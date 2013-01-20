# md-tabs.js

タブをクリックするとそれに対応するコンテンツを表示するという、ごく普通のタブ切り替えのjQueryプラグインです。

## 機能 - Function

- タブクリックでコンテンツを表示
- デフォルトのアクティブタブを指定

## 使い方 - Usage

### サンプル

	<head>
	<script src="md-tabs.js"></script>
	<script>
	$(function() {
		$(".md-tabs").tabs();
	});
	</script>
	</head>
	<body>
	<div class="md-tabs">
		<ul class="md-tabsNav">
			<li><a href="#tab1">Tab1</a></li>
			<li><a href="#tab2" class="active">Tab2</a></li>
		</ul>
		<div id="tab1" class="md-tabsPanel">
			<p>Tab1 Content</p>
		</div>
		<div id="tab2" class="md-tabsPanel">
			<p>Tab2 Content</p>
		</div>
	</div>
	</body>

### オプション

なし

### タブクリックでコンテンツを表示

タブのhref属性に、コンテンツ (`.md-tabsPanel`) のID名を指定します。

	<ul class="md-tabsNav">
		<li><a href="#tab1">...</a></li>
	</ul>
	<div id="tab1" class="md-tabsPanel">
		...
	</div>

### デフォルトのアクティブタブを指定

タブのclass属性に`.active`を付けます。

	<li><a href="#..." class="active">...</a></li>

## TODO

アニメーションの有無や種類をオプションで変更できるようにする。

