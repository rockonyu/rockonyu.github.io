---
title: 'JS Ninja: 2. First-Class Function'
# date: '2020-07-11T00:00:00.000Z'
tags: javascript
---

簡單的筆記與紀錄額外參考，原作：<a href="https://www.books.com.tw/products/0010701459" target="_blank">忍者：JavaScript  開發技巧探秘</a>

## CH3 - 初探頭等函式：定義與引數

### 3.1 使用函式與否的差異為何？

JavaScript 中物件與函式有以下特性：

- 透過實值 (literal) 建立
- 指派給變數、陣列資料與其他物件的屬性
- 作為引數傳遞給函式
- 可以做為函式的回傳值
- 擁有可動態建立和指派的屬性

頭等函式的其中一個特性是可以作為引數傳遞給函式。

回呼函式是設置一個預備在稍後呼叫的函式，藉由瀏覽器在事件處理階段或透過其他程式碼。

JavaScript  最重要的特性之一是能夠在程式的任何地方建立函式，使程式碼更緊湊易理解，還可以避免全域命名空間被汙染 (例如箭頭函式)。

ex. 使用比對器進行排序，不需要考慮排序演算法的細節：

```javascript
var values = [0, 3, 2, 5, 7, 4, 8, 1];

values.sort(function (values, values) {
  return value1 - value2;
});
```

### 3.2 函式作為物件的有趣之處

我們將屬性附加到函式上，可以用來：

- 儲存函式

```javascript
var store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  },
};
function ninja() {}

assert(store.add(ninja), 'Function was safely added.');
assert(!store.add(ninja), 'But it was only added once.');
```

- 自我記憶函式

```javascript
function isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = {};
  }

  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value];
  }

  var prime = value !== 0 && value !== 1;

  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return (isPrime.answers[value] = prime); // 儲存計算結果
}
```

pros:

- 藉由取得之前計算的值改善呼叫函式的效能
- 背景作業，不需要執行特殊請求或額外初始化

cons:

- 任何形式的暫存都式花費記憶體空間換取效能
- 暫存不應該與業務邏輯綁在一起
- 很難對這樣的演算法進行負載測試或測量效能，因為結果取決於之前的輸入

### 3.3 定義函式

- 函式宣告 (declaration) 與函式表達式 (expression)
- 箭頭函式
- 函式建構式
- 生成器 (generator)

```javascript
// 獨立函式宣告
function myFunctionDeclaration() {
  // 內部函式宣告
  function innerFunction() {}
}

// 函式表達式與變數宣告 & 指派
var myFunc = function () {};
// 函式表達式作為回呼引數
myFunc(function () {
  // 函式表達式作為回傳值
  return function () {};
});

// 具名的函式表達式做為立即函式的一部分
(function namedFunctionExpression() {})();

// 作為一元運作子的引數而被立即呼叫的函式表達式
+(function () {})();
-(function () {})();
!(function () {})();
~(function () {})();
```

立即函式 (IIFE)

```javascript
(function () {})(3);
```

箭頭函式

- param => expression
- 主體如果只有表達式，即是函式的回傳值
- 如果沒有 return 敘述句，呼叫的結果是 undefined

```javascript
var values = [0, 3, 2, 5, 7, 4, 8, 1];
values.sort((value1, value2) => value1 - value2);
```

### 3.4 引數 (argument) 與函式參數 (parameter)

```javascript
// 函式參數
function skulk(ninja) {
  // 函式引數
  return performAction(ninja, 'skulking');
}
```

使用不定參數

- 需要放在最後一個函式參數，否則會得到 Syntax Error

```javascript
function multiMax(first, ...remainingNumbers) {
  var sorted = remainingNumbers.sort(function (a, b) {
    return b - a;
  });
  return first * sorted[0];
}
```

- 使用預設參數

```javascript
function performAction(ninja, action = 'skulking') {
  return ninja + ' ' + action;
}
```

### 3.5 總結

### 補充參考

- [阿福的筆記](https://www.notion.so/Chapter3-df2158c43739481bafbf6a1b43709d70)
- [阿寬的筆記](https://www.coderbridge.com/@waynelee2048/a58346d15d2f4100ae6eebd8ed34aff3)
