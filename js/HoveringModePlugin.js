
/*
    Plugin Name: hoveringMode
    Developer: Jose Nino N. Garcia
    Date Created: September 27, 2014
*/


(function ($) {
    $(document).ready(function () {

        $.fn.HoveringTopContent = function (options) {

            var settings = $.extend({
                dataWidth : 110
            }, options);
            
            var $this = $(this);

            $this.mouseenter(function () {
                $this.animate({
                    backgroundPosition : '0 0'
                });
            });
            
            $this.mouseleave(function () {
                $this.animate({
                    backgroundPosition : '0 -' + settings.dataWidth,
                });
            });

        };

        $.fn.HoveringFromLeftContent = function(options){
            
            var settings = $.extend({
                dataHeight : 166
            },options);

            var $this = $(this);

             $this.mouseenter(function () {
                $this.animate({
                    backgroundPosition : '0 0',
                });
            });
            
            $this.mouseleave(function () {
                $this.animate({
                    backgroundPosition : '-' + settings.dataHeight + ' 0',
                });
            });
        }

    });
}(jQuery));