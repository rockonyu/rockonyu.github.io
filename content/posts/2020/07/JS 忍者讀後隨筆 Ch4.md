---
title: JS 忍者讀後隨筆 CH4
date: "2020-07-12T00:00:00.000Z"
tags: ["JS Ninja"]
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
 
