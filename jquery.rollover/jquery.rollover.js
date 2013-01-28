(function($) {

    $.fn.rollover = function(options) {

        return this.each(function() {
            var src = $(this).attr('src');
            if (!src) return;
            var overSrc = src.replace(/^(.+)(\.[^\.]+)$/, '$1_o$2');

            // Preload
            $('<img>').attr('src', overSrc);

            $(this).on({
                'mouseenter':function() {
                    $(this).css('cursor', 'pointer')
                           .attr('src', overSrc);
                },
                'mouseleave':function() {
                    $(this).attr('src', src);
                }
            });
        });
    };
}(jQuery));