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
      $tooltip
        .stop(true, true)
        .fadeIn(600);
    }
    function hideTooltip() {
      $tooltip
        .stop(true, true)
        .fadeOut(600);
    }
    function setPosition(x, y) {
      $tooltip.css({
        top: y + 25,
        left: x - 20
      });
    }
  };
}(jQuery));
