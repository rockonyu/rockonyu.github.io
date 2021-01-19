---
title: Practice Flex
date: '2020-06-26T00:00:00.000Z'
tags: css
---

https://mastery.games/flexboxzombies/

先放上練習的流水帳，細節之後再整理。

### CH1

1. 將元素轉設定為 flex

```css
crossbow {
  display: flex;
}
```

2. 使用 flex-direction 變更排版方式，預設值為 `row`

```css
// 左到右 (預設)
crossbow {
  display: flex;
  flex-direction: row;
}

// 右到左
crossbow {
  display: flex;
  flex-direction: row-reverse;
}

// 上到下
crossbow {
  display: flex;
  flex-direction: column;
}

// 下到上
crossbow {
  display: flex;
  flex-direction: column-reverse;
}
```

### CH2

1. 使用 justify-content 變更內容的對齊，預設值為 `flex-start`

```css
// 對齊起始點 (預設：左)
crossbow {
  display: flex;
  justify-content: flex-start;
}

// 對齊結束點 (右)
crossbow {
  display: flex;
  justify-content: flex-end;
}
```

搭配 flex-direction 可以調整為任何方向，例如：

```css
// 對齊右側結束點
crossbow {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
```

```css
// 對齊上方結束點
crossbow {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
}
```

另一個範例，將內容對齊中間：

```css
// 對齊中間
crossbow {
  display: flex;
  justify-content: center;
}
```

將項目填滿整個容器並使用空白隔開 (兩側無空白)

```css
crossbow {
  display: flex;
  justify-content: space-between;
}
```

項目填滿容器使用空白間隔，並在左右兩側也加上空白

```css
crossbow {
  display: flex;
  justify-content: space-around;
}
```

### CH3

使用 align-items 變更項目側邊的對齊

```css
crossbow {
  display: flex;
  align-items: flex-start;
}
```

以下範例項目採用下到上的縱向排序並齊左

```css
crossbow {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
}
```

`align-items` 擁有 `stretch` 屬性能夠將項目展開，以下屬性表示從左到右排序的項目，且每個項目的均延展至容器的高度

```css
crossbow {
  display: flex;
  align-items: stretch;
}
```

使用 `justify-content` 與 `align-items` 排列各種情境。

Line targets up along the red Justify Laser with `justify-content` and align targets along the blue Alignment Lasers with `align-items`

`align-items` 的預設值是 `stretch`

### CH4

使用 `align-self` 針對容器內的各別項目重設對齊

```css
crossbow {
  display: flex;
  align-items: flex-end;
}

.target {
  align-self: center;
}
```

### CH5

使用 `flex-grow` 標記會隨著容器變寬的項目，預設的值是 `0` 代表不會隨著容器擴張，如設定超過 `1` 則會以相對的倍率擴張。

`align-items: stretch` 指的是項目會延展至副軸的長度。

### CH6

`flex-grow` 表示有額外空間時，項目該如何反應
`flex-shrink` 表示空間不足時，項目該如何反應，預設值是 `1` 代表會隨著容器壓縮，設定為 `0` 代表不壓縮

### CH7

`flex-basis` 可以視為是 `width` 或 `height` 的增強，如果同時設定 `flex-basis` 或寬高，後者會被忽略。
`flex-basis` 在水平的 `flex-direction` 被視為寬，垂直則視為高。

`flex-basis` 會受到 `min-width` 與 `min-height` 影響，最小寬/高度不會低於設定的值。
`flex-basis` 會受到 `max-width` 與 `max-height` 影響，最大寬/高度不會超過設定的值。

`flex-basis` 無法保證寬度，在外層容器寬度不足，項目會因為 `flex-shrink` 屬性而壓縮。
`flex-basis` 的預設值是 `auto` 代表該項目會使用 `width` 屬性作其寬度。

若 `flex-basis` 設定為 `0` 容器會縮減至最小可用的寬度。[範例](https://stackoverflow.com/questions/47578958/the-difference-between-flex-basis-auto-and-0-zero/47579078)

When flex-basis is 0, flex-grow ignores the size of the content in flex items and treats all space on the line as free space.

### CH8

`order` 屬性用來改變主軸上項目的順序，數字越高離起始點越遠、預設值為 0，設定負數會更接近起始點，
`order` 無法套用到 nth-of-type 選擇器，因此選擇的項目不會根據 order 有所改變

### CH9

`flex-wrap: wrap` 屬性會使項目在容器空間不足時換行。
`flex-wrap: wrap-reverse` 會將新行建立在項目上方，且同樣會反轉 `align-items` 的設定，例如 `flex-end` 指的是上方。

wrap firt, shrink second.

`flex-wrap` 的預設值是 `no-wrap`，其他屬性與其互動 (如 `justify-content` 與 `align-items`) 會使用新行作為邊界。

### CH10

`align-content` 用來表示在多行 (wrap 時) 項目該如何對齊，預設值是 `stretch` 代表項目會填滿主軸的高，運作起來與 `align-items` 類似：`flex-start` 代表上方，`flex-end` 代表下方。
`align-content` 也包含了類似 `justify-content` 的 `space-between` 與 `space-around` 屬性。
`align-content` 對 `flex-wrap: no-wrap` 的容器無效

https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content

### CH11: Shortcut

`flex` 屬性可以同時設定 `flex-grow`、`flex-shrink` 與 `flex-basis` 屬性。

`flex: 1` => `flex: 1 1 0`
`flex: auto` => `flex: 1 1 auto`
`flex: none` => `flex: 0 0 auto`

`flex-flow` 可以同時設定 `flex-direction` 與 `flex-wrap` 屬性。

### CH12: Review
