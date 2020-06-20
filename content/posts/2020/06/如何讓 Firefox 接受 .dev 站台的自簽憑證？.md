---
title: 如何讓 Firefox 接受 .dev 站台的自簽憑證？
date: "2020-06-19T00:00:00.000Z"
tags: ["firefox", "https"]
---

有些站台在開發會使用 HTTPS 連線，一般情況可以略過頁面警告，或是透過自簽憑證讓瀏覽器信任這個連線。

近期使用火狐瀏覽器開發專案時，竟然遇到一個情境完全無法略過警告，只能看著頁面乾瞪眼。

這個專案是鎖 host 開發，例如將 `my-app.dev` 指向本機，這種模式在敝公司很常見。

初始想法是設定自簽憑證也許就能排除，因此參考了下面兩篇保哥的文章：

1. [如何使用 OpenSSL 建立開發測試用途的自簽憑證](https://blog.miniasp.com/post/2019/02/25/Creating-Self-signed-Certificate-using-OpenSSL)
2. [如何使用 PowerShell 建立開發測試用途的自簽憑證](https://blog.miniasp.com/post/2018/04/24/Using-PowerShell-to-build-Self-Signed-Certificate)

但是發現生成的 `.dev` 憑證只能匯入作業系統，無法匯入火狐，另外也無法直接設定 `.dev` 站台作為排除清單。

## 重新檢視問題

這篇[文章](https://ma.ttias.be/chrome-force-dev-domains-https-via-preloaded-hsts/)提到 `.dev` 網域強制用戶使用 HTTPS 連線，稱為 [HSTS](https://zh.wikipedia.org/wiki/HTTP%E4%B8%A5%E6%A0%BC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8)，你無法手動排除受到 HSTS 影響的站台。

因此猜測主因是站台使用了 `.dev` 結尾開發，總結遇到的問題：

1. 將 `.dev` 憑證匯入作業系統 => ok，但火狐不看作業系統的憑證
2. 無法將 `.dev` 結尾的憑證直接匯入火狐的 SSL 憑證管理員
3. 採用 HTTP 開發 => `.dev` 網域需要 HTTPS 連線
4. 受到 HSTS 影響的站台無法排除與跳過警示

這個死胡同困擾了我一段時間，也不知道該用什麼關鍵字查詢，就只是找火狐是否有類似 `thisisunsafe` 的指令可以略過警示。

## 解法

意外的簡單：讓火狐信任作業系統的憑證，根據[討論](https://superuser.com/questions/1303396/how-to-fix-firefox-59-no-longer-accepting-my-self-signed-ssl-certificate-on-dev)與[官方文件](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)，這應該是自簽憑證的建議做法：

1. 在網址列鍵入 `about:config`
2. 搜尋 `security.enterprise_roots.enabled` 並設定為 `true`

至此就可以使用 HTTPS 開發 `.dev` 結尾的站台囉！

火狐的 Issue 列表在 N 年前也有[討論](https://bugzilla.mozilla.org/show_bug.cgi?id=1314010)此設定是否能夠預設開啟（預設信任作業系統提供的 SSL 憑證），細節有時間再爬文。

萌新發文如有謬誤請大大指教。
