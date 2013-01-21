(function($) {

	$.fn.tabs = function(options) {
		
		/**
		 * Method
		 */
		var _hidePanel = function($panels) {
			$panels.hide();
		};
		
		var _showPanel = function($navs) {
			var $activeNav = $navs.filter(".active");
			var href = $activeNav.attr("href");
			$(href).slideDown();
		};

		/**
		 * Constructor
		 */
		return this.each(function() {
			var $navs = $(this).find(".md-tabsNav a");
			var $panels = $(this).find(".md-tabsPanel");

			// JSオフでも内容が見れるように、初期のパネル表示/非表示の制御をJSで行う
			_hidePanel($panels);
			_showPanel($navs);

			$navs.on("click", function(ev) {
				ev.preventDefault();

				_hidePanel($panels);

				$navs.removeClass("active");
				$(this).addClass("active");
				
				_showPanel($navs);
			});
		});
	};
}(jQuery));