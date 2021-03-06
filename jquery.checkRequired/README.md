# jquery.checkRequired.js

- フォームの必須項目が埋まっていなければ、送信ボタンがdisabledになって送信できません。
- 未入力の必須項目をカウントして表示します。
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
      <table>
        <tr data-cr-check="required">
          <th>Textbox *</th>
          <td><input type="text" name="text"></td>
        </tr>
        <tr>
          <th>Textbox</th>
          <td><input type="text" name="text"></td>
        </tr>
        <tr data-cr-check="required">
          <th>Checkbox *</th>
          <td>
            <label><input type="checkbox">foo</label>
            <label><input type="checkbox">bar</label>
          </td>
        </tr>
        <tr data-cr-check="required">
          <th>Radio *</th>
          <td>
            <label><input type="radio" name="radio">hoge</label>
            <label><input type="radio" name="radio">fuga</label>
          </td>
        </tr>
      </table>
      <input type="submit" value="Submit" data-cr-role="submit">
    </form>
    </body>

### オプション

- errorMessageClassName : エラー内容を表示するボックスのクラス名を指定できます。

## 対応ブラウザ - Browser

- Internet Explorer 6, 7, 8, 9, 10
- Firefox
- Safari
- Chrome
