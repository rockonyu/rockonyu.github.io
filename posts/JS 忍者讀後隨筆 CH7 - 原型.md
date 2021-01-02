---
title: JS 忍者讀後隨筆 CH7 - 以原型實現物件導向
published: false
tags: javascript
id: 559262
---

簡單的筆記與紀錄額外參考，原作：<a href="https://www.books.com.tw/products/0010701459" target="_blank">忍者：JavaScript  開發技巧探秘</a>

## 7.1 瞭解原型

透過原型，物件可以存取屬於其他物件的屬性。
當存取物件所沒有的屬性時，會在物件原型裡搜索該屬性。

```JS
const yoshi = { skulk: true };
const hattori = { sneak: true };

Object.setPrototypeOf(yoshi, hattori);
```

## 7.2 物件建構與原型

```JS
function Ninja(){}
Ninja.prototype.swingSword = function(){
    return true;
}
```

使用 `new` 運算子呼叫，會建立一個全新的物件，而 `swingSword` 函式會在實例化的物件間共用。
若將方法定義在 `Ninja` 函式內，代表每個實例化的物件都各自保有方法定義。
每個函式的原型物件都有一個 `constructor` 屬性，會參照到建構器函式。

```JS
function Ninja(){}

const ninja = new Ninja();
const ninja2 = new ninja.constructor();
```

## 7.3 實現物件繼承

```JS
function Person(){}
Person.prototype.dance = function(){};

function Ninja(){}
Ninja.prototype = new Person();

var ninja = new Ninja();

ninja.constructor === Person
```

解決 `constructor` 屬性的問題

```JS
// 新增一個不可列舉的 constructor 屬性並指回 Ninja
Object.defineProperty(Ninja.prototype, "constructor", {
    enumerable: false,
    value Ninja,
    writable: true
});

ninja.constructor === Ninja
```

`instanceof` 運算子會檢查 `Ninja` 函式目前的原型，是否出現在 `ninja` 物件實例的原型串鏈上。

## 7.4 在 ES6 裡使用 JavaScript 的類別

```JS
class Person {
    constructor(name) {
        this.name = name;
    }

    dance() {
        return true;
    }
}

// 使用 extends 關鍵字來繼承其他類別
class Ninja extends Person {
    constructor(name, weapon) {
        super(name);
        this.weapon = weapon;
    }

    wieldWeapon() {
        return true;
    }
}
```

# 7.5 小結
