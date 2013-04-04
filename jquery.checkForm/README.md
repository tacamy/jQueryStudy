# jquery.checkForm.js

- フォームの必須項目が埋まっていなければ、送信ボタンがdisabledになって送信できません。
- エラー箇所のブロックにエラー用のクラスを付けて、エラー箇所が分かるようにします。
- エラー内容のテキストを、エラーメッセージのボックスにまとめて表示します。
- 送信ボタンがdisabledになるため、input要素を変更するたびにエラーチェックを行います。

## デモ - Demo

[https://dl.dropbox.com/u/368057/study/jquery.checkForm/index.html](https://dl.dropbox.com/u/368057/study/jquery.checkForm/index.html)

## 使い方 - Usage

### サンプル

	<head>
	<script src="./jquery.checkForm.js"></script>
	<script>
	$(function() {
	  $('[data-type="form"]').checkForm();
	});
	</script>
	</head>
	<body>
	<form action="#" method="POST" data-type="form">
	  <div data-type="required">
	    <input type="text" name="text" value="">
	  </div>
	  <div data-type="required">
	    <ul>
	      <li><label><input type="checkbox" name="checkbox" value="1">1</label></li>
	      <li><label><input type="checkbox" name="checkbox" value="2">2</label></li>
	    </ul>
	  </div>
	  <div data-type="required">
	    <ul>
	      <li><label><input type="radio" name="radio" value="1">1</label></li>
	      <li><label><input type="radio" name="radio" value="2">2</label></li>
	    </ul>
	  </div>
	  <input type="submit" value="Submit" data-type="submit">
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
