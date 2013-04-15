# jquery.checkRequired.js

- フォームの必須項目が埋まっていなければ、送信ボタンがdisabledになって送信できません。
- 未入力の必須項目が分かるようにエラー表示します。
- フォームの各要素が変更されるたびにチェックを行います。
- 初期表示時に前項目のチェックを行います。

## デモ - Demo

[https://dl.dropboxusercontent.com/u/368057/study/jquery.checkRequired2/index.html](https://dl.dropboxusercontent.com/u/368057/study/jquery.checkRequired2/index.html)

## 使い方 - Usage

### サンプル

    <head>
    <script src="./jquery.checkRequired.js"></script>
    <script>
    $(function() {
      $('form[name="form"]').checkRequired();
    });
    </script>
    </head>
    <body>
    <form action="#" method="POST" name="form">
      <table>
        <tr>
          <th>Textbox *</th>
          <td>
            <input type="text" name="text" data-required>
            <input type="text" name="text" data-required>
          </td>
        </tr>
        <tr>
          <th>Textarea *</th>
          <td><textarea data-required></textarea></td>
        </tr>
        <tr>
          <th>Checkbox *</th>
          <td>
            <ul data-required>
              <li><label><input type="checkbox">foo</label></li>
              <li><label><input type="checkbox">bar</label></li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Radio *</th>
          <td>
            <ul data-required>
              <li><label><input type="radio" name="radio">hoge</label></li>
              <li><label><input type="radio" name="radio">fuga</label></li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Select *</th>
          <td>
            <select data-required>
              <option val="">選択してください</option>
              <option val="hoge">hoge</option>
              <option val="fuga">fuga</option>
            </select>
          </td>
        </tr>
      </table>
      <input type="submit" value="Submit">
    </form>
    </body>

### オプション

- errorClass : エラー時に付与するクラスの名称を指定します。

## 対応ブラウザ - Browser

- Internet Explorer 6, 7, 8, 9, 10
- Firefox
- Safari
- Chrome
