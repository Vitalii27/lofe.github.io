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
        $(".js-animation-pulse").animated_once("pulse");
        $(".js-trigger").waypointTriger(function($this) {
            console.log("waypoint trigger cb");
        });
    }

}); //ready
$(window).on("load", function() {
    $("body").css("opacity", 1);

    var media = window.matchMedia("only screen and (max-width: 62em)").matches;

    if (!Detect.isMobile && !media) {
        // $(".js-animations-up").animated("fadeInUp", "fadeOutDown");
        $(".js-animation-up").animated_once("fadeInUp");
        $(".js-animation-in").animated_once("fadeIn");
        $(".js-animation-left").animated_once("fadeInLeft");
        $(".js-animation-right").animated_once("fadeInRight");
        $(".js-animation-pulse").animated_once("pulse");
    }
});
$(document).ready(function() {
    if (Modernizr.touch) {
        $('section, .contacts-up_content').css('background-attachment', 'scroll');
    }

});
$(document).ready(function() {
    $(window).scroll(function() {
        $('.js-button-up').on('click', function() {
            $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing')
        })
    })

});
var Detect = (function($) {
    // prived block

    function isMobile() {
        if (device.mobile() || Modernizr.touch || $('html').hasClass("tablet") || $('html').hasClass("detect-mobile")) {
            return true;
        }
    }

    function isMicrosoft() {
        if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
            $('html').addClass("detect-microsoft");
            return true;
        }
    }

    function isIE() {
        if (navigator.userAgent.match(/MSIE/i) || navigator.userAgent.match(/Trident\/7\./)) {
            $('html').addClass("detect-ie");
            return true;
        }
    }

    function isEdge() {
        if (navigator.userAgent.match(/Edge\//)) {
            $('html').addClass("detect-edge");
            return true;
        }
    }

    function getScrollBarWidth() {
        var $outer = $('<div>').css({
                visibility: 'hidden',
                width: 100,
                overflow: 'scroll'
            }).appendTo('body'),
            widthWithScroll = $('<div>').css({
                width: '100%'
            }).appendTo($outer).outerWidth();
        $outer.remove();
        return 100 - widthWithScroll;
    }

    return {
        // public methods
        scrollBarWidth: getScrollBarWidth(),
        isMobile: isMobile(),
        isMicrosoft: isMicrosoft(),
        isIE: isIE(),
        isEdge: isEdge()
    }
}(jQuery));
var options = {
    offset: 600
}

$(document).ready(function() {
    var header = new Headhesive('.header', options);
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
document.body.onload = function() {
    var preloader = document.getElementById('page-preloader');
    if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
    }

}
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
    var instagramSlider = $('.instagram_mobile-list');
    var instagramOption = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            infinite: true,
            nextArrow: '<button type="button" class="slider_btn--next slider_btn">' + arrowRight + ' </button>',
            prevArrow: '<button type="button" class="slider_btn--prev slider_btn">' + arrowLeft + '</button>',
            dots: true,
            arrows: false,
        }
        // $('.welcome_slide').on('фаеукChange', function(event, slick, currentSlide, nextSlide) {
        //     // welcomeSlider.slick(welcomeOption);
        // });
    welcomeSlider.slick(welcomeOption);
    assortmentSlider.slick(assortmentOption);
    stemsSlider.slick(stemsOption);
    inspirationSlider.slick(inspirationOption);
    instagramSlider.slick(instagramOption);
}); // ready
// windowSize()
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
            // height: "100%"
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyIsImJnLWF0dGFjaG1lbnQuanMiLCJidXR0b24tdXAuanMiLCJkZXRlY3QuanMiLCJoZWFkZXIuanMiLCJtYWluLmpzIiwicG9wdXAuanMiLCJwcmVsb2FkZXIuanMiLCJzbGlkZXJzLmpzIiwic21vb3RoLXNjcm9sbC5qcyIsInN3aXBlLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0FuaW1hdGUgQ1NTICsgV2F5UG9pbnRzIGphdmFTY3JpcHQgUGx1Z2luICsgZGV2aWNlLmpzXG4vL0V4YW1wbGU6ICQoXCIuZWxlbWVudFwiKS5hbmltYXRlZChcInpvb21JblVwXCIsIFwiem9vbU91dERvd25cIik7XG4oZnVuY3Rpb24oJCkge1xuICAgICQuZm4uYW5pbWF0ZWQgPSBmdW5jdGlvbihpbkVmZmVjdCwgb3V0RWZmZWN0KSB7XG4gICAgICAgICQodGhpcykuY3NzKFwib3BhY2l0eVwiLCBcIjBcIikuYWRkQ2xhc3MoXCJhbmltYXRlZFwiKS53YXlwb2ludChmdW5jdGlvbihkaXIpIHtcbiAgICAgICAgICAgIGlmIChkaXIgPT09IFwiZG93blwiKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhvdXRFZmZlY3QpLmFkZENsYXNzKGluRWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhpbkVmZmVjdCkuYWRkQ2xhc3Mob3V0RWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb2Zmc2V0OiAkKHdpbmRvdykuaGVpZ2h0KClcbiAgICAgICAgfSkud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7XG4gICAgICAgICAgICBpZiAoZGlyID09PSBcImRvd25cIikge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoaW5FZmZlY3QpLmFkZENsYXNzKG91dEVmZmVjdCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3Mob3V0RWZmZWN0KS5hZGRDbGFzcyhpbkVmZmVjdCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9mZnNldDogLSQod2luZG93KS5oZWlnaHQoKVxuICAgICAgICB9KTtcbiAgICB9O1xufSkoalF1ZXJ5KTtcblxuKGZ1bmN0aW9uKCQpIHtcbiAgICAkLmZuLmFuaW1hdGVkX29uY2UgPSBmdW5jdGlvbihpbkVmZmVjdCkge1xuICAgICAgICAkKHRoaXMpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpLmFkZENsYXNzKFwiYW5pbWF0ZWRcIikud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7XG5cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoaW5FZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpO1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9mZnNldDogJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgICAgIH0pO1xuICAgIH07XG59KShqUXVlcnkpO1xuXG4oZnVuY3Rpb24oJCkge1xuICAgICQuZm4ud2F5cG9pbnRUcmlnZXIgPSBmdW5jdGlvbihjYikge1xuICAgICAgICAkKHRoaXMpLndheXBvaW50KGZ1bmN0aW9uKGRpcikge1xuICAgICAgICAgICAgaWYgKGRpciA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICBjYigkKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb2Zmc2V0OiAkKHdpbmRvdykuaGVpZ2h0KClcbiAgICAgICAgfSkud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7XG4gICAgICAgICAgICBpZiAoZGlyID09PSBcInVwXCIpIHtcbiAgICAgICAgICAgICAgICBjYigkKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb2Zmc2V0OiAtJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgICAgIH0pO1xuICAgIH07XG59KShqUXVlcnkpO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCFkZXZpY2UubW9iaWxlKCkpIHtcbiAgICAgICAgJChcIi5qcy1hbmltYXRpb25zLXVwXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcbiAgICAgICAgJChcIi5qcy1hbmltYXRpb24tdXBcIikuYW5pbWF0ZWRfb25jZShcImZhZGVJblVwXCIpO1xuICAgICAgICAkKFwiLmpzLWFuaW1hdGlvbi1pblwiKS5hbmltYXRlZF9vbmNlKFwiZmFkZUluXCIpO1xuICAgICAgICAkKFwiLmpzLWFuaW1hdGlvbi1sZWZ0XCIpLmFuaW1hdGVkX29uY2UoXCJmYWRlSW5MZWZ0XCIpO1xuICAgICAgICAkKFwiLmpzLWFuaW1hdGlvbi1yaWdodFwiKS5hbmltYXRlZF9vbmNlKFwiZmFkZUluUmlnaHRcIik7XG4gICAgICAgICQoXCIuanMtYW5pbWF0aW9uLXB1bHNlXCIpLmFuaW1hdGVkX29uY2UoXCJwdWxzZVwiKTtcbiAgICAgICAgJChcIi5qcy10cmlnZ2VyXCIpLndheXBvaW50VHJpZ2VyKGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndheXBvaW50IHRyaWdnZXIgY2JcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7IC8vcmVhZHlcbiQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgJChcImJvZHlcIikuY3NzKFwib3BhY2l0eVwiLCAxKTtcblxuICAgIHZhciBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyZW0pXCIpLm1hdGNoZXM7XG5cbiAgICBpZiAoIURldGVjdC5pc01vYmlsZSAmJiAhbWVkaWEpIHtcbiAgICAgICAgLy8gJChcIi5qcy1hbmltYXRpb25zLXVwXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcbiAgICAgICAgJChcIi5qcy1hbmltYXRpb24tdXBcIikuYW5pbWF0ZWRfb25jZShcImZhZGVJblVwXCIpO1xuICAgICAgICAkKFwiLmpzLWFuaW1hdGlvbi1pblwiKS5hbmltYXRlZF9vbmNlKFwiZmFkZUluXCIpO1xuICAgICAgICAkKFwiLmpzLWFuaW1hdGlvbi1sZWZ0XCIpLmFuaW1hdGVkX29uY2UoXCJmYWRlSW5MZWZ0XCIpO1xuICAgICAgICAkKFwiLmpzLWFuaW1hdGlvbi1yaWdodFwiKS5hbmltYXRlZF9vbmNlKFwiZmFkZUluUmlnaHRcIik7XG4gICAgICAgICQoXCIuanMtYW5pbWF0aW9uLXB1bHNlXCIpLmFuaW1hdGVkX29uY2UoXCJwdWxzZVwiKTtcbiAgICB9XG59KTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGlmIChNb2Rlcm5penIudG91Y2gpIHtcclxuICAgICAgICAkKCdzZWN0aW9uLCAuY29udGFjdHMtdXBfY29udGVudCcpLmNzcygnYmFja2dyb3VuZC1hdHRhY2htZW50JywgJ3Njcm9sbCcpO1xyXG4gICAgfVxyXG5cclxufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5qcy1idXR0b24tdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sICdzbG93JywgJ3N3aW5nJylcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbn0pOyIsInZhciBEZXRlY3QgPSAoZnVuY3Rpb24oJCkge1xuICAgIC8vIHByaXZlZCBibG9ja1xuXG4gICAgZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG4gICAgICAgIGlmIChkZXZpY2UubW9iaWxlKCkgfHwgTW9kZXJuaXpyLnRvdWNoIHx8ICQoJ2h0bWwnKS5oYXNDbGFzcyhcInRhYmxldFwiKSB8fCAkKCdodG1sJykuaGFzQ2xhc3MoXCJkZXRlY3QtbW9iaWxlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTWljcm9zb2Z0KCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTVNJRSAxMC9pKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8xMlxcLi8pKSB7XG4gICAgICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoXCJkZXRlY3QtbWljcm9zb2Z0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0lFKCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTVNJRS9pKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKSB7XG4gICAgICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoXCJkZXRlY3QtaWVcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRWRnZSgpIHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKSkge1xuICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKFwiZGV0ZWN0LWVkZ2VcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbEJhcldpZHRoKCkge1xuICAgICAgICB2YXIgJG91dGVyID0gJCgnPGRpdj4nKS5jc3Moe1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnXG4gICAgICAgICAgICB9KS5hcHBlbmRUbygnYm9keScpLFxuICAgICAgICAgICAgd2lkdGhXaXRoU2Nyb2xsID0gJCgnPGRpdj4nKS5jc3Moe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH0pLmFwcGVuZFRvKCRvdXRlcikub3V0ZXJXaWR0aCgpO1xuICAgICAgICAkb3V0ZXIucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiAxMDAgLSB3aWR0aFdpdGhTY3JvbGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAgICAgc2Nyb2xsQmFyV2lkdGg6IGdldFNjcm9sbEJhcldpZHRoKCksXG4gICAgICAgIGlzTW9iaWxlOiBpc01vYmlsZSgpLFxuICAgICAgICBpc01pY3Jvc29mdDogaXNNaWNyb3NvZnQoKSxcbiAgICAgICAgaXNJRTogaXNJRSgpLFxuICAgICAgICBpc0VkZ2U6IGlzRWRnZSgpXG4gICAgfVxufShqUXVlcnkpKTsiLCJ2YXIgb3B0aW9ucyA9IHtcclxuICAgIG9mZnNldDogNjAwXHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGhlYWRlciA9IG5ldyBIZWFkaGVzaXZlKCcuaGVhZGVyJywgb3B0aW9ucyk7XHJcbn0pOyIsImpRdWVyeShmdW5jdGlvbigkKXt9KTsgLy8gcmVhZHlcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmpzLXBvcHVwJykubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGdhbGxlcnk6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZhbERlbGF5OiAzMDAsXHJcbiAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxyXG5cclxuICAgIH0pO1xyXG59KTsiLCJkb2N1bWVudC5ib2R5Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHByZWxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLXByZWxvYWRlcicpO1xyXG4gICAgaWYgKCFwcmVsb2FkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb25lJykpIHtcclxuICAgICAgICBwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG4gICAgfVxyXG5cclxufSIsImpRdWVyeShmdW5jdGlvbigkKSB7XG4gICAgLy8gYXJyb3cgaWNvbnNcbiAgICB2YXIgYXJyb3dMZWZ0ID0gJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuICAgIHZhciBhcnJvd1JpZ2h0ID0gJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcblxuICAgIC8vIHByZXNldCBvcHRpb25zXG5cbiAgICB2YXIgd2VsY29tZVNsaWRlciA9ICQoJy53ZWxjb21lX3NsaWRlJyk7XG4gICAgdmFyIHdlbGNvbWVPcHRpb24gPSB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxuICAgICAgICAvL2FjY2Vzc2liaWxpdHk6IGZhbHNlIC8vIHByZXZlbnQgcGFnZSBzY3JvbGwgdXAgb24gYXV0b3BsYXlcbiAgICB9O1xuXG4gICAgdmFyIGFzc29ydG1lbnRTbGlkZXIgPSAkKCcuYXNzb3J0bWVudF9jYXJvdXNlbCcpO1xuICAgIHZhciBhc3NvcnRtZW50T3B0aW9uID0ge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWRlcl9idG4tLW5leHQgc2xpZGVyX2J0blwiPicgKyBhcnJvd1JpZ2h0ICsgJyA8L2J1dHRvbj4nLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWRlcl9idG4tLXByZXYgc2xpZGVyX2J0blwiPicgKyBhcnJvd0xlZnQgKyAnPC9idXR0b24+JyxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxNjAwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgfVxuICAgIHZhciBzdGVtc1NsaWRlciA9ICQoJy5zdGVtc19jYXJvdXNlbCcpO1xuICAgIHZhciBzdGVtc09wdGlvbiA9IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpZGVyX2J0bi0tbmV4dCBzbGlkZXJfYnRuXCI+JyArIGFycm93UmlnaHQgKyAnIDwvYnV0dG9uPicsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpZGVyX2J0bi0tcHJldiBzbGlkZXJfYnRuXCI+JyArIGFycm93TGVmdCArICc8L2J1dHRvbj4nLFxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH1cbiAgICB2YXIgaW5zcGlyYXRpb25TbGlkZXIgPSAkKCcuaW5zcGlyYXRpb25fY2Fyb3VzZWwnKTtcbiAgICB2YXIgaW5zcGlyYXRpb25PcHRpb24gPSB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWRlcl9idG4tLW5leHQgc2xpZGVyX2J0blwiPicgKyBhcnJvd1JpZ2h0ICsgJyA8L2J1dHRvbj4nLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWRlcl9idG4tLXByZXYgc2xpZGVyX2J0blwiPicgKyBhcnJvd0xlZnQgKyAnPC9idXR0b24+JyxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgfVxuICAgIHZhciBpbnN0YWdyYW1TbGlkZXIgPSAkKCcuaW5zdGFncmFtX21vYmlsZS1saXN0Jyk7XG4gICAgdmFyIGluc3RhZ3JhbU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGlkZXJfYnRuLS1uZXh0IHNsaWRlcl9idG5cIj4nICsgYXJyb3dSaWdodCArICcgPC9idXR0b24+JyxcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpZGVyX2J0bi0tcHJldiBzbGlkZXJfYnRuXCI+JyArIGFycm93TGVmdCArICc8L2J1dHRvbj4nLFxuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgICAgLy8gJCgnLndlbGNvbWVfc2xpZGUnKS5vbign0YTQsNC10YPQukNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgICAgLy8gICAgIC8vIHdlbGNvbWVTbGlkZXIuc2xpY2sod2VsY29tZU9wdGlvbik7XG4gICAgICAgIC8vIH0pO1xuICAgIHdlbGNvbWVTbGlkZXIuc2xpY2sod2VsY29tZU9wdGlvbik7XG4gICAgYXNzb3J0bWVudFNsaWRlci5zbGljayhhc3NvcnRtZW50T3B0aW9uKTtcbiAgICBzdGVtc1NsaWRlci5zbGljayhzdGVtc09wdGlvbik7XG4gICAgaW5zcGlyYXRpb25TbGlkZXIuc2xpY2soaW5zcGlyYXRpb25PcHRpb24pO1xuICAgIGluc3RhZ3JhbVNsaWRlci5zbGljayhpbnN0YWdyYW1PcHRpb24pO1xufSk7IC8vIHJlYWR5XG4vLyB3aW5kb3dTaXplKCkiLCIvKiBzbW9vdGggc2Nyb2xsaW5nICovXG5qUXVlcnkoZnVuY3Rpb24oJCkge1xuICAgICQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGNvbmZsaWN0IHdpdGggdGFicyBhbmQgb3RoZXIgc2NyaXB0IHVzZWQgaGFzaFxuICAgICAgICAgICAgaWYgKCQodGhpcykuZGF0YShcImlnbm9yZS1zY3JvbGxcIikpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSA1MFxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KTtcbi8qIHNtb290aCBzY3JvbGxpbmcgZW5kKi8iLCJqUXVlcnkoZnVuY3Rpb24oJCkge1xuICAgIC8vIG9uIGNhbnZhcyBtZW51XG4gICAgdmFyICR0b3VjaCA9ICQoJy5qcy10b2dnbGUtbWVudScpO1xuICAgIHZhciBhY3RpdmVDbGFzcyA9IFwiaXMtc3dpcGUtbWVudS1zaG93blwiO1xuICAgIHZhciAkbWVudSA9ICQoJy5zd2lwZS1tZW51Jyk7XG4gICAgdmFyICRjbG9zZSA9ICQoJy5qcy1tZW51LWNsb3NlJyk7XG4gICAgdmFyICR3cmFwcGVyID0gJChcImJvZHlcIik7XG4gICAgdmFyIHN0YXJ0QnJlYWtwb2ludCA9IFwiNDhlbVwiO1xuXG4gICAgLy8gc2hvdy9oaWRlIG1lbnUgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgLy8gaW9zIHNjcm9sbCBmaXhcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuY3NzKHtcbiAgICAgICAgICAgIC8vIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTWVudSgpIHtcbiAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICAvLyBpb3Mgc2Nyb2xsIGZpeFxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5jc3Moe1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnNcbiAgICAkdG91Y2gub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICgkd3JhcHBlci5oYXNDbGFzcyhhY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgIGhpZGVNZW51KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93TWVudSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkY2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBoaWRlTWVudSgpO1xuICAgIH0pO1xuXG4gICAgJHdyYXBwZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lICE9PSBcInN3aXBlLW1lbnVcIikge1xuICAgICAgICAgICAgaGlkZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJG1lbnUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgLy8gY2xvc2UgbWVudSBpZiB0YXJnZXQgaXMgYW4gYW5jaG9yIGxpbmtcbiAgICAkbWVudS5maW5kKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2V0VGltZW91dChoaWRlTWVudSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBcIiArIHN0YXJ0QnJlYWtwb2ludCArIFwiKVwiKS5tYXRjaGVzO1xuICAgICAgICBpZiAoIW1lZGlhKSB7XG4gICAgICAgICAgICBoaWRlTWVudSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gb24gY2FudmFzIG1lbnUgZW5kXG59KTsiXX0=
