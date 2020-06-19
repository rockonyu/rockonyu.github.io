---
title: 如何讓 Firefox 接受 .dev 站台的自簽憑證？
date: "2020-06-19T00:00:00.000Z"
tags: ["firefox", "https"]
---

火狐瀏覽器在特定 https 連線會有警示，一般情況下你可以接受風險並繼續。
有些站台會在開發時期就使用 https 連線，為了避免警示頁面的干擾，通常會搭配自簽憑證，設定後多數的問題就可以解決。

這兩篇文章是保哥的自簽憑證設定：

1. [如何使用 OpenSSL 建立開發測試用途的自簽憑證](https://blog.miniasp.com/post/2019/02/25/Creating-Self-signed-Certificate-using-OpenSSL)
2. [如何使用 PowerShell 建立開發測試用途的自簽憑證](https://blog.miniasp.com/post/2018/04/24/Using-PowerShell-to-build-Self-Signed-Certificate)

作為高冷的火狐使用者，發現在開發公司的特定專案時，卻仍是顯示警示頁面，沒有略過風險的按鈕，將站台加入忽略名單也沒有用。
這個問題持續困擾我一段時間，只好先用回 Chrome 瀏覽器。（對多數人好像這個不是問題XD）

前幾天在網路上搜索一番後，發現跟這個站台是 `.dev` 結尾可能有關係！

以前的專案規模小小的，通常在 localhost 開發，憑證什麼的都可以略過警示，但某些稍微複雜的專案會需要鎖特定 host 進行開發，例如將 `my-app.dev` 導向本機 `127.0.0.1`，發現在這個情況，火狐 [HSTS](https://zh.wikipedia.org/wiki/HTTP%E4%B8%A5%E6%A0%BC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8) 警示頁的略過風險按鈕就會消失。

以下文章及討論談到這種情況，大意是使用 `.dev` 結尾的站台，會被強制使用 https 連線，建議的做法則是將 `.dev` 結尾改成 `.test` 或其他結尾：

1. https://ma.ttias.be/chrome-force-dev-domains-https-via-preloaded-hsts/
2. https://superuser.com/questions/565409/how-to-stop-an-automatic-redirect-from-http-to-https-in-chrome/1251483#1251483

但是但是，公司的開發環境牽一髮動全身，而且我們不是將自簽憑證匯入作業系統了嗎？
由於火狐使用內建 SSL 憑證管理，並不會根據作業系統信任的憑證而變話。當你嘗試將 `.dev` 站台加入忽略名單，也沒有作用，火狐明確的說明因為 HSTS 政策，因此無法手動將網站設定為排除。

這個問題又被擱置了一段時間。

直到前陣子搜尋到這篇[討論](https://superuser.com/questions/1303396/how-to-fix-firefox-59-no-longer-accepting-my-self-signed-ssl-certificate-on-dev
)，說明可以設定火狐接受作業系統信任的憑證，此作法根據[官方文件](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)也是建議的做法：

1. 在火狐網址列輸入 `about:config` 進入進階偏好設定
2. 搜尋 `security.enterprise_roots.enabled` 並設定為 `true`

重新整理頁面後，發現火狐瀏覽器已經信任先前匯入作業系統的憑證，至此就可以繼續使用 https 開發 `.dev` 結尾的站台囉！

火狐官方的 Issue 列表在 N 年前也有[討論](https://bugzilla.mozilla.org/show_bug.cgi?id=1314010)此設定是否能夠預設開啟，時至今日未看先猜結論是保持現狀，細節有時間再爬文。

萌新發文如有謬誤請大大指教。（但還沒有留言板，可以發 Issue 給我哈哈）