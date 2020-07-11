---
title: JS 忍者讀後隨筆 CH1 & CH2
date: "2020-07-05T00:00:00.000Z"
tags: ["JS Ninja"]
---

簡單的筆記與紀錄額外參考，原作：<a href="https://www.books.com.tw/products/0010701459" target="_blank">忍者：JavaScript  開發技巧探秘</a>

## CH1 - 無所不在的 JavaScript

### 1.1  瞭解  JavaScript 與其他語言的區別

1. Function is the first-class object
2. Closure
3. Scope
4. Prototype OOP

JavaScript  是由物件、原型、函式與閉包組合而成。

本書會特別關注：

1. generator  根據不同請求產出多個值
2. promise  控制非同步程式
3. proxy  控制對特定物件的存取
4. 進階的陣列用法
5. Map & Set
6. 正規表達式
7. 模組

並可以透過轉譯器嘗試未來的新功能 (Babel、Traceur)

### 1.2  瞭解瀏覽器：

1. 文件物件模型  DOM
2. 事件  Event
3. 瀏覽器  API

### 1.3  使用當前的最佳實踐

1. Dev Tools
2. 使用自定義的  assert  函式
3. 透過  console.time  與  console.timeEnd  函數

### 1.4  提高技術轉移性

1. NW.js  與  Electron  開發桌面應用程式
2. Cordova  開發行動裝置平台應用
3. Node.js  開發伺服器端與嵌入式系統應用

### 1.5  總結

## CH2 -  在執行時期產生網頁

### 2.1  生命週期概述

1. 建立頁面
2. 事件處理

### 2.2  頁面建立階段

1. 解析  HTML  並建立  DOM

   - 瀏覽器會嘗試修復  HTML  問題以建立有效的  DOM。
   - 建立期間若碰到  script  元素會暫停  DOM  建置並執行  JavaScript。
   - 參考：HTML5 與 DOM3 可至 MDN 或 whatwg.org 查閱相關規格。

2. 執行  JavaScript  程式

   - 在瀏覽器的全域物件是  window 物件，藉由它能夠存取其他全域物件，而 document 屬性即是目前的  DOM  結構。
   - 瀏覽器  API  可參考  MDN  的  [Web API](https://developer.mozilla.org/en-US/docs/Web/API)。
   - 大致可將  JavaScript  程式的執行分成全域  (global)  跟函式  (function)。
   - 頁面建立階段的  JavaScript  執行會暫停  DOM  建置。
   - 尚未建構完成的 DOM 節點無法透過  JavaScript  存取，這也是傾向把  JS  放到頁面底部的原因之一。
   - JS  執行完畢後，會繼續建置 DOM 結構，反覆此模式直到所有  HTML  元素被解析，則進入事件處理階段。
   - 參考：[Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript)

### 2.3  事件處理

- 例如點擊/移動滑鼠、按下鍵盤等都是不同類型的事件。
- 瀏覽器採用單一執行緒模型，代表同時間只能執行一段程式碼，如某段程式耗費大量時間會造成網頁無法回應。
- 所有發生的事件（資源請求、滑鼠移動等）都會依照順序放入事件佇列 (Event Queue)，直到適當時機被瀏覽器循序處理。
- 瀏覽器會持續檢查事件佇列的頂部，並且一次僅處理一個事件。
- 事件的處理與事件處理函式的呼叫都是非同步的。
- 透過事件監聽器  (addEventListener)  為應用程式提供互動功能，且同一元素可以註冊多個事件處置器。

### 2.4  總結
