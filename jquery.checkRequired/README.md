# jquery.checkRequired.js

- フォームの必須項目が埋まっていなければ、送信ボタンがdisabledになって送信できません。
- 未入力の箇所にクラス属性を付与します。
- input要素が変更されるたびにチェックを行います。

## デモ - Demo

[https://dl.dropbox.com/u/368057/study/jquery.checkRequired/index.html](https://dl.dropbox.com/u/368057/study/jquery.checkRequired/index.html)

## 使い方 - Usage

### サンプル

	<head>
	<script src="./jquery.checkRequired.js"></script>
	<script>
	$(function() {
	  $('[data-cr-role="form"]').checkRequired();
	});
	</script>
	</head>
	<body>
	<form action="#" method="POST" data-cr-role="form">
	  <div data-cr-check="required">
	    <input type="text" name="text" value="">
	  </div>
	  <div data-cr-check="required">
	    <ul>
	      <li><label><input type="checkbox">foo</label></li>
	      <li><label><input type="checkbox">bar</label></li>
	    </ul>
	  </div>
	  <div data-cr-check="required">
	    <ul>
	      <li><label><input type="radio">hoge</label></li>
	      <li><label><input type="radio">fuga</label></li>
	    </ul>
	  </div>
	  <input type="submit" value="Submit" data-cr-role="submit">
	</form>
	</body>

### オプション

- errorItemClassName : エラー箇所のブロックにつけるクラス名を指定できます。
- errorMessageClassName : エラー内容を表示するボックスのクラス名を指定できます。

## 対応ブラウザ - Browser

- Internet Explorer 6, 7, 8, 9, 10
- Firefox
- Safari
- Chrome
