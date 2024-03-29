---
title: 為什麼我的請求總是被快取!?
date: '2022-11-04T08:03:33Z'
---

過去兩年一直有個待解的問題：在新的版本上線後，多語系檔案有時會被瀏覽器快取。前同事曾經有試著修正，但因為不是每次部署後都會發生，加上目前客戶不多，通常遇到問題時都是請 QA 手動清掉快取。

這週在閱讀快取相關文件時，意外發現這個問題發生的原因與解法，透過此篇文章記錄。

# 情境

網站是透過 nginx 提供靜態資源的 Etag 與 Last-Modified 標頭，在不考慮瀏覽器端快取的情境，收到回應後的下次請求需要將 If-None-Match 或 If-Modified-Since 帶在標頭，伺服器端才有機會透過 hash 判斷回應 200 新資源或 304 沿用舊資源。

我們的情境是請求常常遺漏了 If-None-Match 或 If-Modified-Since 標頭，回應也不是預期中的 304。

# 研究

很好奇為什麼請求遺漏了 If-None-Match，找到這篇 [文章](https://stackoverflow.com/questions/15900548/why-browser-does-not-send-if-none-match-header) 提到 gzip 可能會造成 Etag 計算差異，才不回應 304，但將 gzip 相關設定都移除後問題仍在。

再者也懷疑前端 CRA 請求資源時移除了相關的欄位，但沒發現有類似 issue，反而這篇快取設定的 [文章](https://create-react-app.dev/docs/production-build/#static-file-caching) 有提到一些關鍵，內文建議除了 static 資料夾以外的資源都設定成 `Cache-Control: no-cache`，當下是認為有 Etag 這邊應該不用另外調整。

經過一段時間如無頭蒼蠅般的搜尋後，決定重看 MDN 在於快取方面的介紹，結果在前幾個段落就發現一個沒看過的名詞：heuristic caching。

# Heuristic caching

> HTTP 被設計成盡可能的快取任何資源，即使沒有提供 Cache-Control 標頭，在特定條件成立時資源仍然會被快取。

特定條件指的是在僅設定 Date 與 Last Modified 的情境。

例如 Last-Modified 時間是一年前，瀏覽器猜測這份資源不會這麼快被變更而將其快取，實際客戶端的快取時間由瀏覽器的實作決定，規格建議是上次修改時間的 1/10，以剛剛的例子來說就是在 36.5 天後，才會實際發出 API 到伺服器端確認資源是否過期。

檢查網站的回應確實沒有提供 Cache-Control 標頭，這樣會造成瀏覽器認定此份資源仍然有效，連請求都沒有發出去，當然也就無從收到伺服器回應的 304。

因此先依照 CRA 文件的建議在 nginx 將 static 資料夾以外的 HTTP 回應都加上 `Cache-Control: no-cache` 標頭，在確認回應同時有 Cache-Control 與 Etag 標頭的情況，就正常的將其帶入下次請求的標頭，也取得預期中的 304 回應。

# 學習到什麼

1. Etag、Last Modified 盡量不要單獨使用，回應都盡量要加上 Cache-Control 標頭
2. 回應只有 Date 與 Last Modified 會讓瀏覽器進入 heuristic caching，無法控制資源要被更新的時機

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#heuristic_caching
- https://blog.techbridge.cc/2017/06/17/cache-introduction/
- https://www.kabisa.nl/tech/http-caching-gotcha-heuristic-freshness/
- https://blog.csdn.net/qq_34556414/article/details/106337292
