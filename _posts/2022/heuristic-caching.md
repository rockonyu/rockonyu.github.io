---
title: 為什麼我的請求總是被快取!?
date: '2022-11-04T08:03:33Z'
---

目前開發的產品是 SPA 架構，但過去兩年一直有個待解的問題，在發佈新版後偶爾會有資源沒更新到 (ex. 多語系檔案)。曾經有試著調整，但因為不是每次都會發生，加上目前客戶不多，問題常常被掩蓋著。

此次花時間研究 nginx 跟瀏覽器關於快取的標頭，最後解法卻意外的簡單，用此篇文章記錄過程中走歪的路。

## 情境

我們透過 nginx 提供靜態資源的 Etag 與 Last-Modified，在先不考慮瀏覽器端快取的情境，一般來說收到回應的下次請求需要將 If-None-Match 或 If-Modified-Since 帶在標頭，伺服器端才有機會透過 hash 判斷回應 200 新資源或 304 沿用舊資源。

在我們網站的情境是，初次回應明明有帶特定標頭，但後續的請求卻沒有將其帶回來，也沒有收到預期中的 304。

## 研究

一開始朝向為什麼請求沒有帶 If-None-Match，找到這篇 [文章](https://stackoverflow.com/questions/15900548/why-browser-does-not-send-if-none-match-header)，在想是否因為 gzip 造成 Etag 不同才不會回應 304，但將相關設定都移除後問題仍在。

再者也懷疑在前端 CRA 請求資源時移除了相關的欄位，有去找看是否有人遇到類似 issue，這篇快取設定的 [文章](https://create-react-app.dev/docs/production-build/#static-file-caching) 其實有提到一些關鍵，內文建議，除了 static 資料夾以外的資源都可以設定成 `Cache-Control: no-cache`，當下是認為設定了 Etag 這邊應該不用另外調整。

花了些時間如無頭蒼蠅般的搜尋後，因為也想不到其他更好的方式，決定重看 MDN 在於快取方面的介紹，結果在前幾個段落就發現一個沒看過的名詞：heuristic caching。

# Heuristic caching

> HTTP 被設計成盡可能的快取任何資源，即使沒有提供 Cache-Control 標頭，在特定條件成立時資源仍然會被快取。

這個特定條件就是在只設定了 Date 與 Last Modified 的情境。

例如 Last-Modified 時間是一年前，瀏覽器會預期這份資源不會這麼快被變更，因此會將其快取，實際時間由瀏覽器的實作決定，MDN 裡提到規格建議是 1/10 的時間，例如在沒有手動清除快取的情境下，會在 36.5 天後才會實際打出 API 到伺服器端確認資源是否過期。

回頭檢查我們網站的回應，確實只有 Etag、Last Modified 與 Date，認定就是進入了 heuristic caching，才會無法完整控制快取的行為。

有點不是很確定，但猜測幫回應加上 Etag、Last Modified 與 Date 是 nginx 的預設行為，最後就先依照 CRA 文件建議將 static 資料夾以外的 HTTP 回應加上 `Cache-Control: no-cache` 標頭。

確認瀏覽器在有 Cache-Control 與 Etag 相互配合的情況，終於將 If-None-Match 帶入下次請求的標頭，也取得預期中的 304 回應了。

# 學習到什麼

1. Etag、Last Modified 需要與 Cache-Control 搭配使用
2. 僅有 Last Modified 與 Date 會進入 heuristic caching，由瀏覽器決定快取時間

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#heuristic_caching
- https://blog.techbridge.cc/2017/06/17/cache-introduction/
- https://www.kabisa.nl/tech/http-caching-gotcha-heuristic-freshness/