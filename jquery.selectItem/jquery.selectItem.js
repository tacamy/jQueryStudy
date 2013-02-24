(function($) {

  $.fn.selectItem = function(options) {
    
    options = $.extend({
      limit: '5'
    }, options);
    
    return this.each(function() {
      
      var $self = $(this);
      var $fromBox = $self.find('.md-selectBox-from .md-items');
      var $toBox = $self.find('.md-selectBox-to .md-items');
      
      var countLimit = countItem(0);
      
      $fromBox.on('click', '.md-items-item', function() {
        if(countLimit() >= options.limit) {
          alert((options.limit + 1) + '個以上は追加できません。');
        } else {
          $(this).appendTo($toBox);
          countLimit('+');
        }
      });
      $toBox.on('click', '.md-items-delete', function(e) {
        var $toItem = $(e.target).closest('.md-items-item');
        $toItem.appendTo($fromBox);
        countLimit('-');
      });
    });
    
    function countItem(n) {
      var cnt = n;
      return function(op) {
        if(op === '+') {
          ++cnt;
        } else if(op === '-') {
          --cnt;
        }
        return cnt;
      }
    }
  };
  
}(jQuery));
