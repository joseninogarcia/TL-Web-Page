
/*
    Left Image Slider
    Created By: Jose Nino N. Garcia
*/


(function ($) {
    $(document).ready(function () {

        //Additional Customs

        
        $.fn.ShowLeftContent = function (options) {

            var settings = $.extend({
                datawidth: 100
            }, options);

            var $this = $(this);
            $this.css("margin-left", "-" + settings.datawidth + "px");
            $this.css("cursor", "pointer");

            $this.mouseenter(function () {
                $this.animate({
                    "margin-left": "0"
                });
            });

            $this.mouseleave(function () {
                $this.animate({
                    "margin-left": "-" + settings.datawidth + "px"
                });
            });

        };

        $.fn.ShowUpContent = function (options) {
            var settings = $.extend({ dataheight: 166 }, options);

            var $this = $(this);
            $this.css("margin-top", "-" + settings.dataheight + "px");
            $this.css("cursor", "pointer");

            $this.mouseenter(function () {
                $this.css("background", "#64adcc");
                $this.animate({
                    "margin-top": "0",
                });
            });

            $this.mouseleave(function () {
                $this.animate({
                    "margin-top": "-" + settings.dataheight + "px"
                });
            });
        };

    });
} (jQuery));
