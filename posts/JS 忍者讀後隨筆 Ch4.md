---
title: JS 忍者讀後隨筆 CH4
published: true
tags: javascript
---

簡單的筆記與紀錄額外參考，原作：<a href="https://www.books.com.tw/products/0010701459" target="_blank">忍者：JavaScript  開發技巧探秘</a>

## CH4 - 老手看函式：理解函式呼叫

### 4.1 使用函式隱含引數

除了函式定義中明確指出的參數外，呼叫函式還會傳遞兩個隱含參數：`arguments` 與 `this`。

- 現在可以透過 ES6 的不定參數取代 `arguments` 參數

  - 嚴格模式下會禁用 `arguments` 作為函式參數的別名

- `this` 參數指的是與函數呼叫相關聯的物件，通常被稱為函式背景空間 (function context)

### 4.2 呼叫函式

呼叫函式的方式對程式運作有很大的影響，關鍵是 `this` 參數會如何被建立？可以使用四種形式呼叫函式：

#### 作為函式呼叫

- 作為函式 `skulk()`
- `this` 的值在普通模式下是全域物件 `window`；嚴格模式下是 `undefined`

#### 作為方法呼叫

- 作為方法 `ninja.skulk()`
- `this` 的值指向 `ninja` 物件

#### 作為建構器呼叫

- 作為建構函式 `new Ninja()`
- 使用 `new` 關鍵字會建立一個空的新物件，並以它作為函式背景空間 `this`
- 建構式回傳物件會被視為整個 `new` 表達式的回傳值
- 建構函式回傳 primitive value 會被忽略，返回原先建立的物件
- 建構器會使用大寫字母開頭

#### 使用 apply 與 call 呼叫

- 經由函式的 `apply` 或 `call` 方法呼叫：`skulk.call(ninja)` 或 `skulk.apply(ninja)`
- 使用 `addEventListener` 瀏覽器事件處理系統會將函式呼叫的背景空間設為目標元素
- `apply` 方法使用一個物件作為 `this` 與陣列作為引數
- `call` 方法使用一個物件作為 `this` 與多個數值作為引數

### 4.3 修復函式背景空間的問題

- 使用箭頭函式繞過函式的背景空間
- 箭頭函式不會擁有自己的隱含 `this` 參數，而是記住建立時的 `this` 參數值
- 如果箭頭函式定義在全域物件實值中，箭頭函式裡 `this` 參數即是全域的 window 物件
- 使用函式 `bind` 會建立並回傳新的函式，`this` 參數始終是設定的物件

### 4.4 總結

### 補充參考

- [阿福的筆記](https://www.notion.so/Chapter4-3af8d9eafe304ed683e8374eca4505ea)
- [阿寬的筆記](https://www.coderbridge.com/@waynelee2048/05bf562aae0544989594385ce097b9fb)
