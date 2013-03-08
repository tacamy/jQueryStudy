# jquery.heightAlign.js

- 親要素を指定すると、直下の子要素のうち一番高いものに合わせて、すべての要素の高さを揃えます。
- 高さを揃える要素は、デフォルトでは直下の子要素ですが、オプションにより子孫要素を指定することも可能です。

## デモ - Demo

[https://dl.dropbox.com/u/368057/study/jquery.heightAlign/index.html](https://dl.dropbox.com/u/368057/study/jquery.heightAlign/index.html)

## 使い方 - Usage

### サンプル

	<head>
	<script src="./jquery.heightAlign.js"></script>
	<script>
	$(function() {
		$('.items01').heightAlign();
		$('.items02').heightAlign({
			child: '.item02'
		});
	});
	</script>
	</head>
	<body>
	<div class="items01">
		<div class="item01">hoge</div>
		<div class="item01">hoge<br>hogehoge</div>
		<div class="item01">hoge<br>hogehoge<br>hogehogehoge</div>
	</div>
	<div class="items02">
		<div class="items02-inner">
		<div class="item02">hoge<br>hogehoge</div>
		<div class="item02">hoge<br>hogehoge<br>hogehogehoge</div>
		<div class="item02">hoge<br>hogehoge<br>hogehogehoge<br>hogehogehogehoge</div>
		</div>
	</div>
	</body>

### オプション

- child : 子孫要素のうち、高さを揃えたい要素を指定します。

## 対応ブラウザ - Browser

- Internet Explorer 6, 7, 8, 9, 10
- Firefox
- Safari
- Chrome
