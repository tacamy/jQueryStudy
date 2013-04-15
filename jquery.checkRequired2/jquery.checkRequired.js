(function($) {

  $.fn.checkRequired = function(options) {
    
    options = $.extend({
      errorClass: 'err'
    }, options);

    return this.each(function() {
      var $form = $(this);
      var $submit = $form.find('input[type="submit"]');
      var $requiredTexts = $form.find('input[type="text"][data-required]');
      var $requiredTextareas = $form.find('textarea[data-required]');
      var $requiredSelects = $form.find('select[data-required]');
      var $requiredChecks = $form.find('ul[data-required]');
      var error = false;
      
      $requiredTexts.each(function() {
        checkText($(this));
      });
      $requiredTextareas.each(function() {
        checkText($(this));
      });
      $requiredSelects.each(function() {
        checkSelect($(this));
      });
      $requiredChecks.each(function() {
        checkCheck($(this));
      });
      
      switchDisabled($submit, $form);

      $requiredTexts.on('blur', function() {
        checkText($(this));
      });
      $requiredTextareas.on('blur', function() {
        checkText($(this));
      });
      $requiredSelects.on('change blur', function() {
        checkSelect($(this));
      });
      $requiredChecks.on('change blur', 'input', function() {
        var $requiredCheck = $(this).closest('[data-required]');
        checkCheck($requiredCheck);
      });
      
      $form.on('change', 'input, select, textarea', function() {
        switchDisabled($submit, $form);
      });
    });
    
    function preventDefault(e) {
      e.preventDefault();
    }
    
    function hasAnyTextInput($elem) {
      return ($elem.val() === '');
    }
    function isNotSelected($elem) {
      var $firstVal = $elem.find('option:first').val();
      var $selectedVal = $elem.find('option:selected').val();
      return ($firstVal === $selectedVal);
    }
    function isNotChecked($elem) {
      return (!$elem.is(':checked'));
    }
    
    function checkText($elem) {
      error = hasAnyTextInput($elem);
      toggleErrorClass($elem, error);
    }
    function checkSelect($elem) {
      error = isNotSelected($elem);
      toggleErrorClass($elem, error);
    }
    function checkCheck($elem) {
      error = isNotChecked($elem.find('input'));
      toggleErrorClass($elem, error);
    }
    
    function toggleErrorClass($elem, error) {
      if (error) {
        $elem.addClass(options.errorClass);
      } else {
        $elem.removeClass(options.errorClass);
      }
    }
    
    function switchDisabled($elem, $form) {
      if ($form.find('.err').length) {
        $elem.attr('disabled', 'disabled');
        $form.on('submit', preventDefault);
      } else {
        $elem.removeAttr('disabled');
        $form.off('submit', preventDefault);
      }
    }
  };
}(jQuery));
