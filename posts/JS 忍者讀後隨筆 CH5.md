---
title: JS 忍者讀後隨筆 CH5
published: false
tags: javascript
---

簡單的筆記與紀錄額外參考，原作：<a href="https://www.books.com.tw/products/0010701459" target="_blank">忍者：JavaScript  開發技巧探秘</a>

## CH5 - 大師級函式：閉包與範圍

### 5.1 瞭解閉包

閉包讓函式能存取在定義時其作用範圍內的所有變數與函式。

- Scope 範圍指的是識別項在程式的某些區塊是否可見
- 識別項基本上是變數所綁定的名稱

閉包在函式定義時為函式及所屬範圍內的變數建立一個『安全氣泡』，包含函式與它的變數，並擁有與函式相同的存活空間。

儘管閉包非常有用，但它們並非沒有開銷，所有資訊都保存在記憶體直到 JavaScript 引擎確定不再需要它（垃圾回收安全）或直到頁面卸載。

### 5.2 開始使用閉包

- JavaScript 本身不支援私有變數，但可以使用閉包模擬類似功能。

```JS
function Ninja() {
  var feints = 0;
  this.getFeints = function() {
    return feints;
  };
  this.feint = function() {
    feints++;
  };
}
```

將變數隱藏在建構器函式內，讓它無法從外部存取，反之變數會在閉包的保護下於內部存在。

- 另一個常用情境是處理回呼，通常這些函式經常需要存取外部資料

### 5.3 使用執行背景空間追蹤程式執行

- 執行背景空間 (Execution Context) 有兩種類型：全域 & 函式；差別在只會有一個全域執行背景空間（在 JS 開始執行時建立），而每次呼叫函式則會建立新的函式執行背景空間與建立關聯的字彙環境。
- JS 是單執行緒的模型，一次只能執行一段程式，每當函式呼叫時必須停止當前的執行背景空間，再建立出新的，最簡單方式是使用堆疊，稱為執行背景空間堆疊（Call Stack）
- 除了追蹤應用程式的執行位置，執行背景空間也透過字彙環境 (Lexical Environment) 解析識別項 (Identifier Resolution) 找出參照的變數

### 5.4 使用字彙環境來追蹤識別項

- 字彙環境 (Lexical Environment) 是 JS 作用範圍界定機制的內部實作，用來追蹤識別項到特定變數的對應。
- 字彙環境是 JS 作用範圍界定機制的內部實作，口語上稱為 Scope
- 第一階段是建立新的字彙環境時啟動，讀取當前字彙環境所有宣告的變數與函式，這個階段程式不會執行。第二階段為執行階段，確切行為取決於變數類型 (let、var、const 與函式宣告) 和環境類型（全域、函式或區塊）
- 如果在當前環境找不到識別項，就搜索外部環境直到找到匹配的變數。若無符合的識別項則會得到一個參照錯誤（reference error）
- 每當建立函式時，會將所屬字彙環境的參照儲存在 [[Environment]] 的內部屬性（不能直接存取或操作）

### 5.5 瞭解 JavaScript 的變數類型

- const 定義的變數不能重新指派，但可以修改 (mutations)
- 使用 var 關鍵字會被定義在最鄰近的函式或全域字彙環境（忽略程式區塊）
- 使用 let 與 const 指定區塊範圍內的變數（區塊環境、迴圈環境、函式環境與全域環境）
- 在字彙環境註冊識別項，JavaScript 的程式碼執行分成兩個階段：

  1. 建立新的字彙環境時啟動，讀取並註冊當前字彙環境中所有宣告的變數與函式
  2. 第二階段取決於變數類型（let, var, const 與函式宣告）和環境類型（全域、函式或區塊）

- 使用函式宣告所定義的函式以及相對應的識別項註冊，是在執行任何 JS 程式碼前建立的

#### 經典的 setTimeout 範例：

- 使用 `var` 註冊在外層函式，因此兩秒後 `i` 變數已經計算到 `5`（且污染了全域環境）：

```JS
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 2000);
}

// 兩秒後輸出五次 '5'
// 是否使用箭頭函式沒有差別
```

- 使用 `let` 會註冊在 block scope，每次執行 `i` 都是獨立的：

```JS
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 2000);
}

// 兩秒後一次輸出 '0' '1' '2' '3' '4'
// 是否使用箭頭函式沒有差別
```

### 5.6 探索閉包的運作方式

### 5.7 總結

### Ref:

- [Lexical Environment](http://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments) & [JS Info](https://zh.javascript.info/closure#ci-fa-huan-jing) VS [Execution Context](http://www.ecma-international.org/ecma-262/6.0/#sec-execution-contexts) - [From stackoverflow](https://stackoverflow.com/questions/12599965/lexical-environment-and-function-scope)

- [What's the difference between using `let` VS `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)

- [阿福的筆記](https://www.notion.so/scope-60c1517a823e4200a50b255fbc4c005d)

### 原文待整理：

The process is as follows:

- If we’re creating a function environment, the implicit arguments identifier is created, along with all formal function parameters and their argument values. If we’re dealing with a nonfunction environment, this step is skipped.
- If we’re creating a global or a function environment, the current code is scanned (without going into the body of other functions) for function declarations (but not function expressions or arrow functions!). For each discovered function declaration, a new function is created and bound to an identifier in the environment with the function’s name. If that identifier name already exists, its value is overwritten. If we’re dealing with block environments, this step is skipped.
- The current code is scanned for variable declarations. In function and global environments, all variables declared with the keyword var and defined outside other functions (but they can be placed within blocks!) are found, and all variables declared with the keywords let and const defined outside other functions and blocks are found. In block environments, the code is scanned only for variables declared with the keywords let and const, directly in the current block. For each discovered variable, if the identifier doesn’t exist in the environment, the identifier is registered and its value initialized to undefined. But if the identifier exists, it’s left with its value.
