---
title: JS 的亂數產生不重複
date: "2020-06-22T00:00:00.000Z"
tags: ["javascript", "random"]
---

前幾天看到一個亂數產生不重複的寫法，覺得很有趣：

``` js
[...Array(10).keys()].sort(() => 0.5 – Math.random())
```

可以拆成前後兩段程式碼：

1. 產生 0 ~ N 的陣列數組
2. 採用 shuffle 排序

由於記憶中只剩下效率很差的泡泡排序，想說這樣的方式應該會導致數組無法穩定，一直在檢查吧？

雖然理解瀏覽器不會採用 O(n^2) 的算法，但對各家瀏覽器採用的排序方式有點好奇，因此在網路上搜索一番：

* firefox - merge sort
* chrome - tim sort


經過一番網海搜索，發現火狐採用的合併排序會導致結果不太亂，例如這是在火狐連續跑 5 次的結果：

``` js
[ 1, 2, 0, 4, 6, 7, 3, 8, 5, 9 ]
[ 0, 2, 1, 3, 4, 5, 8, 6, 9, 7 ]
[ 0, 1, 4, 2, 3, 8, 5, 6, 7, 9 ]
[ 2, 5, 3, 0, 6, 1, 7, 9, 8, 4 ]
[ 4, 1, 0, 2, 3, 5, 6, 8, 7, 9 ]
```

可以看出初始陣列最左邊的 0 與右邊的 9，幾乎依舊分別留在陣列的前後段。

相對於 chrome 的連續跑五次的結果比較散亂：

``` js
[ 0, 5, 9, 7, 1, 2, 8, 6, 4, 3 ]
[ 2, 1, 8, 6, 9, 5, 0, 3, 7, 4 ]
[ 9, 0, 1, 5, 7, 6, 2, 4, 3, 8 ]
[ 2, 6, 4, 7, 8, 0, 1, 9, 3, 5 ]
[ 7, 2, 5, 9, 3, 4, 1, 6, 8, 0 ]
```

如未來找到更有趣的亂數產生算法會繼續補充在文章內。


- JavaScript的shuffle演算法（發亂數不重複）https://kelunyang.wordpress.com/2009/04/01/javascript%E7%9A%84poker%E6%BC%94%E7%AE%97%E6%B3%95%EF%BC%88%E7%99%BC%E4%BA%82%E6%95%B8%E4%B8%8D%E9%87%8D%E8%A4%87%EF%BC%89/

- 從 Array 的 sort 方法，聊到各瀏覽器的實作 https://medium.com/@realdennis/javascript-%E5%BE%9Earray%E7%9A%84sort%E6%96%B9%E6%B3%95-%E8%81%8A%E5%88%B0%E5%90%84%E5%AE%B6%E7%80%8F%E8%A6%BD%E5%99%A8%E7%9A%84%E5%AF%A6%E4%BD%9C%E7%AE%97%E6%B3%95-c23a335b1b80

- 合併排序法 http://alrightchiu.github.io/SecondRound/comparison-sort-merge-sorthe-bing-pai-xu-fa.html

- 建立 1 ~ N 的數組陣列 https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
