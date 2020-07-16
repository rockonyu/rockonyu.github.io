---
title: 優化開發時期 webpack 的編譯速度
date: "2020-06-23T00:00:00.000Z"
tags: ["Optimize"]
---

## 調整策略

1. 使用 [speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin) 可以觀察目前消耗最多的地方
2. webpack 開發階段不要使用 production 模式，可避免反覆優化
3. 使用 [cache-loader](https://github.com/webpack-contrib/cache-loader) 與 [thread-loader](https://github.com/webpack-contrib/thread-loader) 加速與暫存編譯後的檔案
4. 以 webpack 的 [watch mode](https://webpack.js.org/configuration/watch/#root) 作為優化目標

這個專案在開發時期使用 production 模式，會讓 [Terser](https://webpack.js.org/plugins/terser-webpack-plugin/#root) 提早優化，因此改回使用 development 模式編譯，並加上 `cache loader` 與 `thread loader` 後，可將原本平均兩分鐘的編譯時間縮短為 15 秒左右，效果顯著。

未來會朝向開啟 watch 模式進行調整，希望編譯單檔的時間能夠在 2 秒內結束。

## 額外參考

- https://medium.com/@shinychang/webpack-%E6%9C%80%E4%BD%B3%E5%8C%96-cache-loader-e17f5651a941
