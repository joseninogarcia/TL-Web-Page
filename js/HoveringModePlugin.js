
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
<<<<<<< HEAD
                    backgroundPosition : '100% 0%'
=======
                    backgroundPosition : '0% 0%'
>>>>>>> 2505320305801a71f4eaf64e9cb9263a075be957
                });
            });
            
            $this.mouseleave(function () {
                $this.animate({
<<<<<<< HEAD
                    backgroundPosition : '-' + settings.dataWidth + '% 0%'
=======
                    backgroundPosition : '0% -' + settings.dataWidth + '%'
>>>>>>> 2505320305801a71f4eaf64e9cb9263a075be957
                });
            });

        };

<<<<<<< HEAD
        $.fn.HoveringFromLeftContent = function (options) {
=======
        $.fn.HoveringFromLeftContent = function(options){
>>>>>>> 2505320305801a71f4eaf64e9cb9263a075be957
            
            var settings = $.extend({
                dataHeight : 166
            },options);

            var $this = $(this);

             $this.mouseenter(function () {
                $this.animate({
<<<<<<< HEAD
                    backgroundPosition: '0% 0%'
=======
                    backgroundPosition : '0% 0%'
>>>>>>> 2505320305801a71f4eaf64e9cb9263a075be957
                });
            });
            
            $this.mouseleave(function () {
                $this.animate({
<<<<<<< HEAD
                    backgroundPosition : '100% 0%'
=======
                    backgroundPosition : '-' + settings.dataHeight + '% 0%'
>>>>>>> 2505320305801a71f4eaf64e9cb9263a075be957
                });
            });
        }

    });
}(jQuery));