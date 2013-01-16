# md-tabs.js

- タブ切り替えのjQueryプラグイン（の勉強）

## 使い方

- スタート時のアクティブタブを指定するには、`.md-tabsNav > li > a`に`class="active"`をHTMLで指定
- HTMLのscriptタグかJSファイルに以下の記述が必要
```
$(function() {
	$(".md-tabs").tabs();
});
```

## TODO

- アニメーションの有無や種類をオプションで変更できるようにしたい
- slideDownするとき、その下の要素の位置がつられて動くので、パネルの高さを保持して動かないように・・すればいいの？