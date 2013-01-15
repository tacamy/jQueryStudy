$.fn.tabs = function(options) {

	// プラグイン本体
	$(this).each(function() {

		// タブとパネルの要素取得
		var $navs = $(".md-tabsNav a", this);
		var $panels = $(".md-tabsPanel", this);

		// JSオフ対策で、パネル非表示をJSで行う
		hidePanel($panels);
		showPanel($navs);

		// タブクリック時の動作
		$navs.click(function(ev) {

			// aのデフォルトイベントを殺す
			ev.preventDefault();

			// パネルを非表示
        	hidePanel($panels);

        	// タブの.activeを全て解除
			$navs.removeClass("active");

			// クリックしたタブに.activeをつける
			$(this).addClass("active");
			
			// アクティブタブのhref先のパネルを表示
			showPanel($navs);
		});
	});

	// パネルを非表示
	function hidePanel($panels) {
		$panels.hide();
	}

	// アクティブタブのhref先のパネルを表示
	function showPanel($navs) {
		var $activeNav = $navs.filter(".active");
		var href = $activeNav.attr("href");
		$(href).slideDown();
	}

	return this;
};

$(function() {
	$(".md-tabs").tabs();
});