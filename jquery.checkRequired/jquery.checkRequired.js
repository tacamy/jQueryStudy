(function($) {

  $.fn.checkRequired = function(options) {
    // const
    var ERROR = -1;

    options = $.extend({
      errorItemClassName: 'error',
      errorMessageClassName: 'errorMessage'
    }, options);

    return this.each(function() {
      var $form = $(this);
      var $submit = $('[data-cr-role="submit"]');
      var $requiredItems = $('[data-cr-check="required"]');
      var $errorMessage = $('<div class="' + options.errorMessageClassName + '">未入力項目があります。</div>')

      // init
      $form.submit(function(e) {
        e.preventDefault();
      });
      changeDisabled($submit, 'disabled');

      // delegate
      $form.on('change', 'input', function() {

        $requiredItems.each(function() {
          var $requiredItem = $(this);
          var $inputItems = $requiredItem.find('input');
          var rc = null;

          if ($inputItems.is(':text')) {
            rc = checkText($inputItems);
          } else if ($inputItems.is(':checkbox') || $inputItems.is(':radio')) {
            rc = checkChecked($inputItems);
          };

          if (rc === ERROR) {
            $requiredItem.addClass(options.errorItemClassName);
          } else {
            $requiredItem.removeClass(options.errorItemClassName);
          }
        });

        if ($form.find('.' + options.errorItemClassName).length) {
          changeDisabled($submit, 'disabled');
          $submit.before($errorMessage.show());
        } else {
          changeDisabled($submit);
          $errorMessage.hide();
        }
      });
    });

    // 1文字も入力されていなければエラーを返す
    function checkText($elem) {
      if ($elem.val() === '') {
        return ERROR;
      } else {
        return this;
      }
    }

    // 1つもチェックされていなければエラーを返す
    function checkChecked($elem) {
      var cnt = 0;
      $elem.each(function() {
        if ($(this).prop('checked') === true) {
          cnt++;
        }
      });
      if (cnt === 0) {
        return ERROR;
      } else {
        return this;
      }
    }

    // disabled属性の切替
    function changeDisabled($submit, state) {
      if (state === 'disabled') {
        $submit.attr('disabled', 'disabled');
      } else {
        $submit.removeAttr('disabled');
      }
    };
  };
}(jQuery));
