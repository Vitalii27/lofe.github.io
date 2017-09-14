//Animate CSS + WayPoints javaScript Plugin + device.js
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
(function($) {
    $.fn.animated = function(inEffect, outEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            }
        }, {
            offset: $(window).height()
        }).waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            }
        }, {
            offset: -$(window).height()
        });
    };
})(jQuery);

(function($) {
    $.fn.animated_once = function(inEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {

            $(this).addClass(inEffect).css("opacity", "1");

        }, {
            offset: $(window).height()
        });
    };
})(jQuery);

(function($) {
    $.fn.waypointTriger = function(cb) {
        $(this).waypoint(function(dir) {
            if (dir === "down") {
                cb($(this));
            }
        }, {
            offset: $(window).height()
        }).waypoint(function(dir) {
            if (dir === "up") {
                cb($(this));
            }
        }, {
            offset: -$(window).height()
        });
    };
})(jQuery);

$(function() {

    if (!device.mobile()) {
        $(".js-animations-up").animated("fadeInUp", "fadeOutDown");
        $(".js-animation-up").animated_once("fadeInUp");
        $(".js-animation-in").animated_once("fadeIn");
        $(".js-animation-left").animated_once("fadeInLeft");
        $(".js-animation-right").animated_once("fadeInRight");
        $(".js-trigger").waypointTriger(function($this) {
            console.log("waypoint trigger cb");
        });
    }

}); //ready
$(document).ready(function() {
    if (Modernizr.touch) {
        $('section, .contacts-up_content, . ').css('background-attachment', 'scroll');
    }
});
$(document).ready(function() {
    $(window).scroll(function() {
        $('.js-button-up').on('click', function() {
            $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing')
        })
    })

});
$(document).ready(function() {

    // var $container = $(".instagram");
    // $container.imagesLoaded(function() {
    //     $container.masonry({
    //         columnWidth: ".item",
    //         itemSelector: ".instagram_block"
    //     });
    // });

});
jQuery(function($){}); // ready

$(document).ready(function() {

    $('.js-popup').magnificPopup({
        type: 'image',
        dots: true,
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',

    });

});
jQuery(function($) {
    // arrow icons
    var arrowLeft = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
    var arrowRight = '<i class="fa fa-angle-right" aria-hidden="true"></i>';

    // preset options
    var welcomeSlider = $('.welcome_slide');

    var welcomeOption = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        swipeToSlide: true,
        //accessibility: false // prevent page scroll up on autoplay
    };
    var assortmentSlider = $('.assortment_carousel');
    var assortmentOption = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        nextArrow: '<button type="button" class="slider_btn--next slider_btn">' + arrowRight + ' </button>',
        prevArrow: '<button type="button" class="slider_btn--prev slider_btn">' + arrowLeft + '</button>',
        infinite: true,
        responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 998,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }]
    }
    var stemsSlider = $('.stems_carousel');
    var stemsOption = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        infinite: true,
        nextArrow: '<button type="button" class="slider_btn--next slider_btn">' + arrowRight + ' </button>',
        prevArrow: '<button type="button" class="slider_btn--prev slider_btn">' + arrowLeft + '</button>',
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }]
    }
    var inspirationSlider = $('.inspiration_carousel');
    var inspirationOption = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        infinite: true,
        nextArrow: '<button type="button" class="slider_btn--next slider_btn">' + arrowRight + ' </button>',
        prevArrow: '<button type="button" class="slider_btn--prev slider_btn">' + arrowLeft + '</button>',
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,

            }
        }]
    }

    // init slider
    welcomeSlider.slick(welcomeOption);
    assortmentSlider.slick(assortmentOption);
    stemsSlider.slick(stemsOption);
    inspirationSlider.slick(inspirationOption);

}); // ready
/* smooth scrolling */
jQuery(function($) {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // prevent conflict with tabs and other script used hash
            if ($(this).data("ignore-scroll")) return;

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 500);
                return false;
            }
        }
    });
});
/* smooth scrolling end*/
jQuery(function($) {
    // on canvas menu
    var $touch = $('.js-toggle-menu');
    var activeClass = "is-swipe-menu-shown";
    var $menu = $('.swipe-menu');
    var $close = $('.js-menu-close');
    var $wrapper = $("body");
    var startBreakpoint = "48em";

    // show/hide menu functions
    function showMenu() {
        $wrapper.addClass(activeClass);
        // ios scroll fix
        $("html, body").css({
            height: "100%"
        });

    }

    function hideMenu() {
        $wrapper.removeClass(activeClass);
        // ios scroll fix
        $("html, body").css({
            // height: "auto",
            "overflow-y": "auto"
        });
    }

    // event listeners
    $touch.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($wrapper.hasClass(activeClass)) {
            hideMenu();
        } else {
            showMenu();
        }
    });

    $close.on('click', function(e) {
        e.stopPropagation();
        hideMenu();
    });

    $wrapper.on('click', function(e) {
        if (e.target.className !== "swipe-menu") {
            hideMenu();
        }
    });

    $menu.on('click', function(e) {
        e.stopPropagation();
    });

    // close menu if target is an anchor link
    $menu.find('a[href*="#"]:not([href="#"])').on('click', function(e) {
        setTimeout(hideMenu, 1000);
    });

    $(window).resize(function() {
        var media = window.matchMedia("only screen and (max-width: " + startBreakpoint + ")").matches;
        if (!media) {
            hideMenu();
        }
    });
    // on canvas menu end
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyIsImJnLWF0dGFjaG1lbnQuanMiLCJidXR0b24tdXAuanMiLCJnYWxsZXJ5LmpzIiwibWFpbi5qcyIsInBvcHVwLmpzIiwic2xpZGVycy5qcyIsInNtb290aC1zY3JvbGwuanMiLCJzd2lwZS1tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQW5pbWF0ZSBDU1MgKyBXYXlQb2ludHMgamF2YVNjcmlwdCBQbHVnaW4gKyBkZXZpY2UuanNcbi8vRXhhbXBsZTogJChcIi5lbGVtZW50XCIpLmFuaW1hdGVkKFwiem9vbUluVXBcIiwgXCJ6b29tT3V0RG93blwiKTtcbihmdW5jdGlvbigkKSB7XG4gICAgJC5mbi5hbmltYXRlZCA9IGZ1bmN0aW9uKGluRWZmZWN0LCBvdXRFZmZlY3QpIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKS5hZGRDbGFzcyhcImFuaW1hdGVkXCIpLndheXBvaW50KGZ1bmN0aW9uKGRpcikge1xuICAgICAgICAgICAgaWYgKGRpciA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKG91dEVmZmVjdCkuYWRkQ2xhc3MoaW5FZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKGluRWZmZWN0KS5hZGRDbGFzcyhvdXRFZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvZmZzZXQ6ICQod2luZG93KS5oZWlnaHQoKVxuICAgICAgICB9KS53YXlwb2ludChmdW5jdGlvbihkaXIpIHtcbiAgICAgICAgICAgIGlmIChkaXIgPT09IFwiZG93blwiKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhpbkVmZmVjdCkuYWRkQ2xhc3Mob3V0RWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhvdXRFZmZlY3QpLmFkZENsYXNzKGluRWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb2Zmc2V0OiAtJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgICAgIH0pO1xuICAgIH07XG59KShqUXVlcnkpO1xuXG4oZnVuY3Rpb24oJCkge1xuICAgICQuZm4uYW5pbWF0ZWRfb25jZSA9IGZ1bmN0aW9uKGluRWZmZWN0KSB7XG4gICAgICAgICQodGhpcykuY3NzKFwib3BhY2l0eVwiLCBcIjBcIikuYWRkQ2xhc3MoXCJhbmltYXRlZFwiKS53YXlwb2ludChmdW5jdGlvbihkaXIpIHtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhpbkVmZmVjdCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7XG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb2Zmc2V0OiAkKHdpbmRvdykuaGVpZ2h0KClcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKGpRdWVyeSk7XG5cbihmdW5jdGlvbigkKSB7XG4gICAgJC5mbi53YXlwb2ludFRyaWdlciA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICAgICQodGhpcykud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7XG4gICAgICAgICAgICBpZiAoZGlyID09PSBcImRvd25cIikge1xuICAgICAgICAgICAgICAgIGNiKCQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvZmZzZXQ6ICQod2luZG93KS5oZWlnaHQoKVxuICAgICAgICB9KS53YXlwb2ludChmdW5jdGlvbihkaXIpIHtcbiAgICAgICAgICAgIGlmIChkaXIgPT09IFwidXBcIikge1xuICAgICAgICAgICAgICAgIGNiKCQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvZmZzZXQ6IC0kKHdpbmRvdykuaGVpZ2h0KClcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKGpRdWVyeSk7XG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIWRldmljZS5tb2JpbGUoKSkge1xuICAgICAgICAkKFwiLmpzLWFuaW1hdGlvbnMtdXBcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xuICAgICAgICAkKFwiLmpzLWFuaW1hdGlvbi11cFwiKS5hbmltYXRlZF9vbmNlKFwiZmFkZUluVXBcIik7XG4gICAgICAgICQoXCIuanMtYW5pbWF0aW9uLWluXCIpLmFuaW1hdGVkX29uY2UoXCJmYWRlSW5cIik7XG4gICAgICAgICQoXCIuanMtYW5pbWF0aW9uLWxlZnRcIikuYW5pbWF0ZWRfb25jZShcImZhZGVJbkxlZnRcIik7XG4gICAgICAgICQoXCIuanMtYW5pbWF0aW9uLXJpZ2h0XCIpLmFuaW1hdGVkX29uY2UoXCJmYWRlSW5SaWdodFwiKTtcbiAgICAgICAgJChcIi5qcy10cmlnZ2VyXCIpLndheXBvaW50VHJpZ2VyKGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndheXBvaW50IHRyaWdnZXIgY2JcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7IC8vcmVhZHkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGlmIChNb2Rlcm5penIudG91Y2gpIHtcclxuICAgICAgICAkKCdzZWN0aW9uLCAuY29udGFjdHMtdXBfY29udGVudCwgLiAnKS5jc3MoJ2JhY2tncm91bmQtYXR0YWNobWVudCcsICdzY3JvbGwnKTtcclxuICAgIH1cclxufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5qcy1idXR0b24tdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sICdzbG93JywgJ3N3aW5nJylcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIHZhciAkY29udGFpbmVyID0gJChcIi5pbnN0YWdyYW1cIik7XHJcbiAgICAvLyAkY29udGFpbmVyLmltYWdlc0xvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAkY29udGFpbmVyLm1hc29ucnkoe1xyXG4gICAgLy8gICAgICAgICBjb2x1bW5XaWR0aDogXCIuaXRlbVwiLFxyXG4gICAgLy8gICAgICAgICBpdGVtU2VsZWN0b3I6IFwiLmluc3RhZ3JhbV9ibG9ja1wiXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9KTtcclxuXHJcbn0pOyIsImpRdWVyeShmdW5jdGlvbigkKXt9KTsgLy8gcmVhZHlcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICQoJy5qcy1wb3B1cCcpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBnYWxsZXJ5OiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92YWxEZWxheTogMzAwLFxyXG4gICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcclxuXHJcbiAgICB9KTtcclxuXHJcbn0pOyIsImpRdWVyeShmdW5jdGlvbigkKSB7XG4gICAgLy8gYXJyb3cgaWNvbnNcbiAgICB2YXIgYXJyb3dMZWZ0ID0gJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuICAgIHZhciBhcnJvd1JpZ2h0ID0gJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcblxuICAgIC8vIHByZXNldCBvcHRpb25zXG4gICAgdmFyIHdlbGNvbWVTbGlkZXIgPSAkKCcud2VsY29tZV9zbGlkZScpO1xuXG4gICAgdmFyIHdlbGNvbWVPcHRpb24gPSB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxuICAgICAgICAvL2FjY2Vzc2liaWxpdHk6IGZhbHNlIC8vIHByZXZlbnQgcGFnZSBzY3JvbGwgdXAgb24gYXV0b3BsYXlcbiAgICB9O1xuICAgIHZhciBhc3NvcnRtZW50U2xpZGVyID0gJCgnLmFzc29ydG1lbnRfY2Fyb3VzZWwnKTtcbiAgICB2YXIgYXNzb3J0bWVudE9wdGlvbiA9IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGlkZXJfYnRuLS1uZXh0IHNsaWRlcl9idG5cIj4nICsgYXJyb3dSaWdodCArICcgPC9idXR0b24+JyxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGlkZXJfYnRuLS1wcmV2IHNsaWRlcl9idG5cIj4nICsgYXJyb3dMZWZ0ICsgJzwvYnV0dG9uPicsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTYwMCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH1cbiAgICB2YXIgc3RlbXNTbGlkZXIgPSAkKCcuc3RlbXNfY2Fyb3VzZWwnKTtcbiAgICB2YXIgc3RlbXNPcHRpb24gPSB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWRlcl9idG4tLW5leHQgc2xpZGVyX2J0blwiPicgKyBhcnJvd1JpZ2h0ICsgJyA8L2J1dHRvbj4nLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWRlcl9idG4tLXByZXYgc2xpZGVyX2J0blwiPicgKyBhcnJvd0xlZnQgKyAnPC9idXR0b24+JyxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICB9XG4gICAgdmFyIGluc3BpcmF0aW9uU2xpZGVyID0gJCgnLmluc3BpcmF0aW9uX2Nhcm91c2VsJyk7XG4gICAgdmFyIGluc3BpcmF0aW9uT3B0aW9uID0ge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGlkZXJfYnRuLS1uZXh0IHNsaWRlcl9idG5cIj4nICsgYXJyb3dSaWdodCArICcgPC9idXR0b24+JyxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGlkZXJfYnRuLS1wcmV2IHNsaWRlcl9idG5cIj4nICsgYXJyb3dMZWZ0ICsgJzwvYnV0dG9uPicsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH1cblxuICAgIC8vIGluaXQgc2xpZGVyXG4gICAgd2VsY29tZVNsaWRlci5zbGljayh3ZWxjb21lT3B0aW9uKTtcbiAgICBhc3NvcnRtZW50U2xpZGVyLnNsaWNrKGFzc29ydG1lbnRPcHRpb24pO1xuICAgIHN0ZW1zU2xpZGVyLnNsaWNrKHN0ZW1zT3B0aW9uKTtcbiAgICBpbnNwaXJhdGlvblNsaWRlci5zbGljayhpbnNwaXJhdGlvbk9wdGlvbik7XG5cbn0pOyAvLyByZWFkeSIsIi8qIHNtb290aCBzY3JvbGxpbmcgKi9cbmpRdWVyeShmdW5jdGlvbigkKSB7XG4gICAgJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgY29uZmxpY3Qgd2l0aCB0YWJzIGFuZCBvdGhlciBzY3JpcHQgdXNlZCBoYXNoXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKFwiaWdub3JlLXNjcm9sbFwiKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xuICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDUwXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuLyogc21vb3RoIHNjcm9sbGluZyBlbmQqLyIsImpRdWVyeShmdW5jdGlvbigkKSB7XG4gICAgLy8gb24gY2FudmFzIG1lbnVcbiAgICB2YXIgJHRvdWNoID0gJCgnLmpzLXRvZ2dsZS1tZW51Jyk7XG4gICAgdmFyIGFjdGl2ZUNsYXNzID0gXCJpcy1zd2lwZS1tZW51LXNob3duXCI7XG4gICAgdmFyICRtZW51ID0gJCgnLnN3aXBlLW1lbnUnKTtcbiAgICB2YXIgJGNsb3NlID0gJCgnLmpzLW1lbnUtY2xvc2UnKTtcbiAgICB2YXIgJHdyYXBwZXIgPSAkKFwiYm9keVwiKTtcbiAgICB2YXIgc3RhcnRCcmVha3BvaW50ID0gXCI0OGVtXCI7XG5cbiAgICAvLyBzaG93L2hpZGUgbWVudSBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICAvLyBpb3Mgc2Nyb2xsIGZpeFxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5jc3Moe1xuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVNZW51KCkge1xuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICAgIC8vIGlvcyBzY3JvbGwgZml4XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmNzcyh7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgICR0b3VjaC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKCR3cmFwcGVyLmhhc0NsYXNzKGFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAgICAgaGlkZU1lbnUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dNZW51KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRjbG9zZS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGhpZGVNZW51KCk7XG4gICAgfSk7XG5cbiAgICAkd3JhcHBlci5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgIT09IFwic3dpcGUtbWVudVwiKSB7XG4gICAgICAgICAgICBoaWRlTWVudSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkbWVudS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICAvLyBjbG9zZSBtZW51IGlmIHRhcmdldCBpcyBhbiBhbmNob3IgbGlua1xuICAgICRtZW51LmZpbmQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGhpZGVNZW51LCAxMDAwKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IFwiICsgc3RhcnRCcmVha3BvaW50ICsgXCIpXCIpLm1hdGNoZXM7XG4gICAgICAgIGlmICghbWVkaWEpIHtcbiAgICAgICAgICAgIGhpZGVNZW51KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBvbiBjYW52YXMgbWVudSBlbmRcbn0pOyJdfQ==
