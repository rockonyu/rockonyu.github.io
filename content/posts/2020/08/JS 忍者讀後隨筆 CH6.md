---
title: JS 忍者讀後隨筆 CH6
date: "2020-08-09T00:00:00.000Z"
tags: ["JS Ninja"]
---

簡單的筆記與紀錄額外參考，原作：<a href="https://www.books.com.tw/products/0010701459" target="_blank">忍者：JavaScript  開發技巧探秘</a>

## Generator

使用生成器函式建立迭代器物件

```JS
function* WeaponGenerator() {
  ...
  yield "Katana";
  ...
}

const weaponsIterator = WeaponGenerator();

const result1 = weaponsIterator.next();
```

使用 `yield*` 將任務委派給其他生成器

```JS
function* WarriorGenerator() {
  yield "Sun Tzu";
  yield* NinjaGenerator();
  yield "Genghis Khan";
}

function* NinjaGenerator() {
  yield "Hattori";
  yield "Yoshi";
}

for (let warrior of WarriorGenerator()) {
  ...
}
```

### ref:

https://zh.javascript.info/generators

## Promise

### ref:

- `finally` 使用時機 - https://zh.javascript.info/promise-basics#finally
- 錯誤處理 - https://zh.javascript.info/promise-error-handling#qi-ta
- async await - https://zh.javascript.info/async-await
- Microtask Queue
  - https://zh.javascript.info/microtask-queue
  - https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
