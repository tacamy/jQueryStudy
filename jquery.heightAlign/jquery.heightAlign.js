(function($) {

  $.fn.heightAlign = function(options) {
    options = $.extend({
      child: '> *'
    }, options);

    return this.each(function() {
      var $self = $(this);
      var $children = $self.find(options.child);
      var heights = [];
      var max;

      $children.each(function(i) {
        heights[i] = $(this).height();
      });

      max = Math.max.apply(null, heights);
      $children.height(max);
    });
  };

}(jQuery));
