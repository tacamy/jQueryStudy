(function($) {

  $.fn.checkRequired = function(options) {

    options = $.extend({
      errorMessageClassName: 'errorMessage'
    }, options);

    return this.each(function() {
      var $form = $(this);
      var $submit = $('[data-cr-role="submit"]');
      var $requiredItems = $('[data-cr-check="required"]');
      var $errorMessage = $('<div class="' + options.errorMessageClassName + '"></div>');
      var errorCount;

      $form.on('submit', preventDefault);
      errorCount = isInputedRequiredField($requiredItems);
      switchSubmitButton(errorCount, $submit, $errorMessage);

      $form.on('change', 'input', function() {
        errorCount = isInputedRequiredField($requiredItems);
        switchSubmitButton(errorCount, $submit, $errorMessage);
      });
    });

    function preventDefault(e) {
      e.preventDefault();
    }

    function isInputedRequiredField($requiredItems) {
      errorCount = 0;

      $requiredItems.each(function() {
        var $requiredItem = $(this);
        var $inputItems = $requiredItem.find('input');
        var error;

        if ($inputItems.is(':text')) {
          error = hasAnyTextInput($inputItems);
        } else if ($inputItems.is(':checkbox') || $inputItems.is(':radio')) {
          error = isChecked($inputItems);
        };

        if (error) errorCount++;
      });

      return errorCount;
    }

    function switchSubmitButton(errorCount, $submit, $errorMessage) {
      if (errorCount) {
        $submit
          .attr('disabled', 'disabled')
          .before(insertErrorMassage($errorMessage, errorCount))
          .closest('form').off('submit', preventDefault);
      } else {
        $submit.removeAttr('disabled');
        $errorMessage.hide();
      }
    }

    function insertErrorMassage($errorMessage, errorCount) {
      return $errorMessage
        .text('必須項目が入力されていません（残り' + errorCount + '個）')
        .show();
    }

    function hasAnyTextInput($elem) {
      return ($elem.val() === '') ? true : false;
    }

    function isChecked($elem) {
      var $checked = $elem.filter(function() {
        return $(this).prop('checked') === true;
      });

      return ($checked.length === 0) ? true : false;
    }
  };
}(jQuery));
