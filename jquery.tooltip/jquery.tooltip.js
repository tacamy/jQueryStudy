(function($) {

  $.fn.tooltip = function() {

    /**
     * Core
     */
    var $tooltip = $('<div class="md-tooltip"></div>').appendTo('body');

    return this.each(function() {
      var self = $(this);

      self.on({
        mouseenter:function(e) {
          setPosition(e.pageX, e.pageY);
          $tooltip.html(self.data('tooltip'));
          showTooltip();
        },
        mouseleave:function() {
          hideTooltip();
        },
        mousemove:function(e) {
          setPosition(e.pageX, e.pageY);
        }
      });
    });

    /**
     * Method
     */
    function showTooltip() {
      $tooltip.stop()
        .show()
        .css('opacity', 0)
        .animate({opacity: 1}, 600);
    }
    function hideTooltip() {
      $tooltip.stop()
        .animate(
          {opacity: 0}, 600, function() {
            $tooltip.hide();
          });
    }
    function setPosition(x, y) {
      $tooltip.css({
        top: y + 15,
        left: x + 5
      });
    }
  };
}(jQuery));
