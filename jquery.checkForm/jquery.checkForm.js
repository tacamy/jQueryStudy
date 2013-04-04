(function($) {

  $.fn.checkForm = function(options) {
    var ERR = -1;

    options = $.extend({
      errorItemClassName: 'error',
      errorMessageClassName: 'errorMessage',
      errorMessageText: []
    }, options);

    return this.each(function() {
      var $self = $(this);
      var $submit = $('[data-type="submit"]');
      var $requiredList = $('[data-type="required"]');
      var $errorMessageBox = $('<div></div>')
        .addClass(options.errorMessageClassName)
        .prependTo($self);
      var $errorMessageLists = $('<ul></ul>')
        .appendTo($errorMessageBox);
      var $errorMessageArray = [];

      // 初期化
      $self.submit(function(e) {
        e.preventDefault();
      });
      $submit.attr('disabled', 'disabled');

      // form以下のすべてのinput要素のイベントを監視
      $self.on('change', 'input', function() {

        // エラーメッセージの配列を空にして初期化
        $errorMessageArray.length = 0;

        $.each($requiredList, function(i) {
          var $self = $(this);
          var $elem = $self.find('input');
          var rc = null;

          if($elem.is(':text')) {
            rc = checkText($elem);
          } else if($elem.is(':checkbox')) {
            rc = checkChecked($elem);
          } else if($elem.is(':radio')) {
            rc = checkChecked($elem);
          };

          if(rc === ERR) {
            $self.addClass(options.errorItemClassName);
            $errorMessageArray.push(options.errorMessageText[i]);
          } else {
            $self.removeClass(options.errorItemClassName);
          }
        });

        // エラーが1つでもある場合は、
        if($self.find('.' + options.errorItemClassName).length) {

          // submitをdisabled状態にして、
          $submit.attr('disabled', 'disabled');

          // エラーメッセージを表示
          $errorMessageLists.empty();
          $.each($errorMessageArray, function(i) {
            $('<li></li>')
              .text($errorMessageArray[i])
              .appendTo($errorMessageLists);
          });
          $errorMessageBox.show();
        
        // エラーがなければ、
        } else {

          // submitのdisabledを外して、
          $submit.removeAttr('disabled');

          // エラーメッセージを非表示
          $errorMessageBox.hide();
        }
      });
    });

    // 1文字も入力されていなければエラーを返す
    function checkText($elem) {
      if($elem.val() === '') {
        return ERR;
      } else {
        return this;
      }
    }

    // 1つもチェックされていなければエラーを返す
    function checkChecked($elem) {
      var cnt = 0;
      $elem.each(function() {
        if($(this).prop('checked') === true) {
          cnt++;
        }
      });
      if(cnt === 0) {
        return ERR;
      } else {
        return this;
      }
    }
  };
}(jQuery));
