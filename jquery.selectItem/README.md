# jquery.selectItem.js

- 左のボックス内の要素を選択すると、右のボックスにその要素を移動できます。
- 解除ボタンで元に戻せます。

## デモ - Demo

[https://dl.dropbox.com/u/368057/study/jquery.selectItem/index.html](https://dl.dropbox.com/u/368057/study/jquery.selectItem/index.html)

## 使い方 - Usage

### サンプル

	<head>
	<link rel="stylesheet" href="./jquery.selectItem.css">
	<script src="./jquery.selectItem.js"></script>
	<script>
	$(function() {
	  $('.md-selectBox').selectItem({
	    limit: 3
	  });
	});
	</script>
	</head>
	<body>
	<div class="md-selectBox">
	  <div class="md-selectBox-inner">
	    <div class="md-selectBox-from">
	      <ul class="md-items">
	        <li class="md-items-item">
	          <div class="md-items-unit"><img src="http://dummyimage.com/50" width="50" height="50" class="md-items-thumb"/><span class="md-items-text">Hanako Yamada 1</span></div>
	          <button class="md-items-delete">解除</button>
	        </li>
	        <li class="md-items-item">
	          <div class="md-items-unit"><img src="http://dummyimage.com/50" width="50" height="50" class="md-items-thumb"/><span class="md-items-text">Hanako Yamada 2</span></div>
	          <button class="md-items-delete">解除</button>
	      </ul>
	    </div>
	    <div class="md-selectBox-to">
	      <ul class="md-items">
	      </ul>
	    </div>
	  </div>
	</div>
	</body>

### オプション

- limit : 右のボックスに追加できる最大値を数値で指定します。

## 対応ブラウザ - Browser

- Internet Explorer 6, 7, 8, 9, 10
- Firefox
- Safari
- Chrome
