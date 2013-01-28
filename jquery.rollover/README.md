# jquery.rollover.js

画像（img, input）にロールオーバーを設定します。

## デモ - Demo

[https://dl.dropbox.com/u/368057/study/jquery.rollover/index.html](https://dl.dropbox.com/u/368057/study/jquery.rollover/index.html)

## 機能 - Function

- 画像のロールオーバー

## 使い方 - Usage

### サンプル

	<head>
	<script src="jquery.rollover.js"></script>
	<script>
	$(function() {
		$(".rollover").rollover();
	});
	</script>
	</head>
	<body>
	<img class="rollover" src="xxx.jpg" alt="">
	<input class="rollover" type="image" src="xxx.jpg" alt="">
	</body>

### オプション

なし

### 画像のロールオーバー

ロールオーバーさせたい画像のclass属性に`.rollover`を付けます。

	<img class="rollover" src="xxx.jpg" alt="">

## TODO

- ロールオーバー用画像の接尾語をオプションで変更できるようにする。
- Class名をオプションで変更できるようにする。
