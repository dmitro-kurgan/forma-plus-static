import '../components/scss/style.scss';

import '../components/js/bootstrap.min';

import '../components/js/map.js';

import fancybox from '../components/js/jquery.fancybox.min';

import 'slick-carousel';

var slickProjects = $('.slick-projects')
var slickBottle = $('.plastic-bottle-video')
var slickComments = $('.slick-comments')

slickProjects.slick({
	
});

slickBottle.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

slickComments.slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '100px',
    variableWidth: true,
    slidesToScroll: 1
})

$(function() {
    var date = new Date();
    var yearNow = date.getFullYear();
    var year = document.getElementById('year');
    year.innerHTML = (' ' + yearNow + ' ');
});

function changeMobile() {
    if(matchMedia) {
        var screen = window.matchMedia('(max-width: 768px)');
        screen.addListener(changes);
        changes(screen);
    }
    function changes(screen) {
        if(screen.matches) {
            $('.footer__copyright').appendTo('.footer__content');
        }
        else {
            $('.footer__copyright').appendTo('.footer__content');
            $('.footer__production').appendTo('.footer__content');
        }
    };
};
changeMobile();

$(document).ready(function(){
// ---------INPUT FOCUS--------

    $('input').click(function() {
    	$('input').removeClass('focus');
    	$(this).addClass('focus')
    });

// -------------BACK-TO-TOP---------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});
// ---------------TAB-CLICK-MOBILE------------
function tabScroll() {
    if(matchMedia) {
        var screen = window.matchMedia('(max-width: 991px)');
        screen.addListener(changes);
        changes(screen);
    }
    function changes(screen) {
        if(screen.matches) {
            $('.nav-pills > li > a').click(function(event) {
                event.preventDefault();
                var id = $('#tab-content'),
                top = $(id).offset().top - 20;
                $('body, html').animate({scrollTop: top}, 600);
            });
        }   
    }
}
tabScroll();
// ----------------LANGUAGE-------------
var headerLang = $('.language__select');
headerLang.click(function() {
    $(this).addClass('opened');
})
$(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(headerLang).length) return;
    headerLang.removeClass("opened");
    event.stopPropagation();
  });
});
// ---------------SHOW MENU-------------------
function ShowMenu() {
    $('#hamburger').click(function() {
        $(this).toggleClass('opened')
        $('#headerMenu').toggleClass('opened');
    });
}
ShowMenu();
// -----------------MOBILE----------------------
function changeMobile() {
    if(matchMedia) {
        var screen = window.matchMedia('(max-width: 768px)');
        screen.addListener(changes);
        changes(screen);
    }
    function changes(screen) {
        if(screen.matches) {
            $('.header #language').prependTo('#headerMenu');
            $('.menu-item-has-children > a').addClass('noclick');
            $('.noclick').click(function(e) {
                e.preventDefault();
                if($(this).parent('.menu-item-has-children').hasClass('opened')) {
                    // $('#headerMenu > ul > .menu-item-has-children').removeClass('open-menu');
                }
                else {
                    // $('#headerMenu > ul > .menu-item-has-children').removeClass('open-menu');
                    $(this).parent('.menu-item-has-children').toggleClass('opened');
               }
            });
        }
        else {
            $('.header #language').prependTo('.header__contact');
        }
    };
};
changeMobile();

// ----------------LOCATION-----------
$(document).ready(function () {
    // if(window.location.href.indexOf('') > 0 || window.location.href.indexOf('index.html') > 0) {
    //     $('.header__menu > ul > li:first-child').addClass('current-menu-item');
    // }
    $('.header__menu > ul > li:first-child').addClass('current-menu-item');
    if(window.location.href.indexOf('about.html') != -1) {
        $('.header__menu > ul > li').removeClass('current-menu-item');
        $('.header__menu > ul > li:nth-child(2)').addClass('current-menu-item');
    }
    else if(window.location.href.indexOf('services.html') != -1) {
        $('.header__menu > ul > li').removeClass('current-menu-item');
        $('.header__menu > ul > li:nth-child(3)').addClass('current-menu-item');
    }
    else if(window.location.href.indexOf('product.html') != -1) {
        $('.header__menu > ul > li').removeClass('current-menu-item');
        $('.header__menu > ul > li:nth-child(4)').addClass('current-menu-item');
    }
    else if(window.location.href.indexOf('equipment.html') != -1) {
        $('.header__menu > ul > li').removeClass('current-menu-item');
        $('.header__menu > ul > li:nth-child(5)').addClass('current-menu-item');
    }
    else if(window.location.href.indexOf('count.html') != -1) {
        $('.header__menu > ul > li').removeClass('current-menu-item');
        $('.header__menu > ul > li:nth-child(6)').addClass('current-menu-item');
    }
    else if(window.location.href.indexOf('comments.html') != -1) {
        $('.header__menu > ul > li').removeClass('current-menu-item');
        $('.header__menu > ul > li:nth-child(7)').addClass('current-menu-item');
    }
    else if(window.location.href.indexOf('contacts.html') != -1) {
        $('.header__menu > ul > li').removeClass('current-menu-item');
        $('.header__menu > ul > li:nth-child(8)').addClass('current-menu-item');
    }
    else if(window.location.href.indexOf('news.html') != -1 || window.location.href.indexOf('article.html') != -1) {
        $('.header__menu > ul > li').removeClass('current-menu-item');
        $('.header__menu > ul > li:last-child').addClass('current-menu-item');
    }
})