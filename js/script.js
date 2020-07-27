/*global $,owl,smoothScroll,WOW,alert*/
$(document).ready(function () {
    "use strict";


    $('[data-tool="tooltip"]').tooltip({
        trigger: 'hover',
        animate: true,
        delay: 50,
        container: 'body'
    });
    /* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */
    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('#loading').fadeOut(1000);
        $('.loading').addClass('ac');
    });


    //for smoth scroll
    smoothScroll.init({
        speed: 800,
        updateURL: false,
        offset: 20
    });

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true,
        offset: 0,
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();


    if ($("html").length) {
        $("html").niceScroll({
            cursorcolor: "#b71d1d",
            cursorwidth: "6px",
            cursorborder: "0px",
            zindex: "9999999",
            emulatetouch: false,
            scrollspeed: 200,
            mousescrollstep: 60,
            touchbehavior: true,
            grabcursorenabled: false,
            bouncescroll: true
        });
    }

    //    $("html").niceScroll({
    //        cursorcolor: "#b71d1d",
    //        cursorwidth: "6px",
    //        cursorborder: "0px",
    //        zindex: "9999999",
    //        emulatetouch: false,
    //        scrollspeed: 700,
    //        mousescrollstep: 20,
    //        touchbehavior: false,
    //        grabcursorenabled: true,
    //        bouncescroll: false
    //    });

    /* ---------------------------------------------
     Sliders
    --------------------------------------------- */

    // For Customer Slider
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    sync1.owlCarousel({
        transitionStyle: "fade",
        //        singleItem: true,
        items: 1,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        autoPlay: 6000,
        afterAction: syncPosition,
        responsiveRefreshRate: 200
    });

    sync2.owlCarousel({
        items: 3,
        itemsCustom: [
			[0, 1],
			[450, 2],
			[600, 2],
			[700, 2],
			[1000, 3],
			[1200, 3],
			[1400, 3],
			[1600, 3],
            [1800, 4]
        ],
        pagination: false,
        navigation: false,
        responsiveRefreshRate: 100
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $("#sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if ($("#sync2").data("owlCarousel") !== undefined) {
            center(current)
        }

        var current1 = this.currentItem;
        $("#sync1")
            .find(".owl-item")
            .removeClass("active")
            .eq(current1)
            .addClass("active");
    }

    $("#sync2").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }

        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }

    }

    /* ****************** Timelie slider ************** */

    // For Customer Slider
    var sync11 = $("#sync11");
    var sync22 = $("#sync22");

    sync11.owlCarousel({
        //        transitionStyle: "fadeInUp",
        singleItem: true,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        autoPlay: 4000,
        afterAction: syncPosition1,
        responsiveRefreshRate: 200
    });

    sync22.owlCarousel({
        items: 5,
        itemsCustom: [
        			[0, 5],
        			[450, 5],
        			[600, 5],
        			[700, 5],
        			[1000, 5],
        			[1200, 6],
        			[1400, 5],
        			[1600, 5]
                ],
        pagination: false,
        navigation: false,
        responsiveRefreshRate: 100,
        autoPlay: false,
        mouseDrag: false
    });

    function syncPosition1(el) {
        var current22 = this.currentItem;
        $("#sync22")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current22)
            .addClass("synced")
        if ($("#sync22").data("owlCarousel") !== undefined) {
            center1(current22)
        }

        var current11 = this.currentItem;
        $("#sync11")
            .find(".owl-item")
            .removeClass("active")
            .eq(current11)
            .addClass("active");
    }

    $("#sync22").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync11.trigger("owl.goTo", number);
    });

    function center1(number) {
        var sync22visible = sync22.data("owlCarousel").owl.visibleItems;
        var num1 = number;
        var found1 = false;
        for (var i in sync22visible) {
            if (num1 === sync22visible[i]) {
                var found1 = true;
            }
        }

        if (found1 === false) {
            if (num1 > sync22visible[sync22visible.length - 1]) {
                sync22.trigger("owl.goTo", num1 - sync22visible.length + 2)
            } else {
                if (num1 - 1 === -1) {
                    num1 = 0;
                }
                sync22.trigger("owl.goTo", num1);
            }
        } else if (num1 === sync22visible[sync22visible.length - 1]) {
            sync22.trigger("owl.goTo", sync22visible[1])
        } else if (num1 === sync22visible[0]) {
            sync22.trigger("owl.goTo", num1 - 1)
        }

    }

    /* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-60px");
        }
    });

    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    //customize the header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 156) {
            $('.main-head').addClass('sticky');
        } else {
            $('.main-head').removeClass('sticky');
        }
    });

    $('.side-nav').mCustomScrollbar({
        autoHideScrollbar: false,
        setTop: 0,
        scrollInertia: 50,
        theme: "light-1"
    });

    $('.open-sidebar').on('click', function () {
        $('.sidebar').toggleClass('opened');
        $('.overlay_gen').fadeIn();
        $('body').addClass('sided');
    });

    $('.overlay_gen').on('click', function () {
        $('.sidebar').toggleClass('opened');
        $('.overlay_gen').fadeOut();
        $('body').removeClass('sided');
    });

    $('.op-vid').on('click', function () {
        $('.ab-img .ab-vid').addClass('hosted');
    });

    if ($('.select2').length) {
        $('.select2').select2();
    }

    if ($('.select-nosearch').length) {
        $('.select-nosearch').select2({
            minimumResultsForSearch: Infinity
        });
    }

    $('.hero-s .h-big-slider .item,.hero-slider-box').height(window.innerHeight - 90);
    $('.works-s .second-s,  .works-s .third-s, .service-s, .works-s .first-s .container-wrap').height(window.innerHeight - 11);
    $('.main-footer').height(window.innerHeight);

    var def_height = $('.works-s .second-s').innerHeight();

    $('html').clickBubble({
        color: '#c5a869',
        size: 40,
        time: 1000,
        borderWidth: 1
    });

    $('.second-overlay').click(function () {
        $(this).fadeOut();
        $('.wo-slider .owl-wrapper .owl-item:nth-of-type(1)').removeClass('l-space');
    });

    $(".wo-slider").owlCarousel({
        //        transitionStyle: "fade",
        navigation: false,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: false,
        pagination: false,
        afterAction: function (el) {
            //remove class active
            this
                .$owlItems
                .removeClass('active');

            //add class active
            this
                .$owlItems //owl internal $ object containing items
                .eq(this.currentItem)
                .addClass('active');
        }
    });

    $(".th-slider").owlCarousel({
        //        transitionStyle: "fade",
        navigation: true,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: false,
        pagination: false,
        stopOnHover: false,
        navigationText: ["<span class='slider-left'>السابق</span>", "<span class='slider-right'>التالي</span>"],
        afterAction: function (el) {
            //remove class active
            this
                .$owlItems
                .removeClass('active');

            //add class active
            this
                .$owlItems //owl internal $ object containing items
                .eq(this.currentItem)
                .addClass('active');
        }
    });

    $(".serv-slider").owlCarousel({
        //        transitionStyle: "fade",
        navigation: true,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: false,
        pagination: true,
        stopOnHover: false,
        navigationText: ["<span class='arrow-left'></span>", "<span class='arrow-right'></span>"],
        afterAction: function (el) {
            //remove class active
            this
                .$owlItems
                .removeClass('active');

            //add class active
            this
                .$owlItems //owl internal $ object containing items
                .eq(this.currentItem)
                .addClass('active');
        }
    });

    $('.second-blocks .item .inner').click(function () {
        $('.third-s').addClass('active');
        //        $('html').css({
        //            overflow: 'hidden'
        //        })
    });
    $('.back-works').click(function () {
        $('.third-s').removeClass('active');
        //        $('html').css({
        //            overflow: 'hidden'
        //        })
    });

    $('.js-tilt').tilt({
        maxTilt: 20,
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        //        speed: 300, // Speed of the enter/exit transition.
        transition: true, // Set a transition on enter/exit.
        disableAxis: null, // What axis should be disabled. Can be X or Y.
    });

    $('.js-tilt1').tilt({
        maxTilt: 5,
        perspective: 500, // Transform perspective, the lower the more extreme the tilt gets.
        easing: "cubic-bezier(.02,.28,.32,.49)", // Easing on enter/exit.
        //        speed: 300, // Speed of the enter/exit transition.
        transition: true, // Set a transition on enter/exit.
        disableAxis: null, // What axis should be disabled. Can be X or Y.
    });

    if ($('.h-small-slider .owl-item:nth-of-type(3)').hasClass('synced')) {
        $('.h-small-slider').css({
            maxWidth: '56%'
        });
    }
    //    else if ($('.hero-s .h-small-slider .owl-item').eq(3).hasClass('synced')) {
    //        $('.hero-s .h-small-slider').css({
    //            maxWidth: "54%"
    //        });
    //    } 
    //    else if ($('.hero-s .h-small-slider .owl-item').eq(4).hasClass('synced')) {
    //        $('.hero-s .h-small-slider').css({
    //            maxWidth: "52%"
    //        });
    //    }

    $(".proj-ab-slider").owlCarousel({
        //        transitionStyle: "fade",
        navigation: true,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 5000,
        pagination: false,
        stopOnHover: true,
        navigationText: ["<span class='arrow-left'><i class='fa fa-angle-left'></i></span>", "<span class='arrow-right'><i class='fa fa-angle-right'></i></span>"],
        mouseDrag: false
    });

    //    $(".fancybox").fancybox();

    $('.expand').click(function () {
        $('.wrap-photo').addClass('here');
    });

    $('.compress').click(function () {
        $('.wrap-photo').removeClass('here');
    });

    $('.anchor').click(function () {
        $('.wo-slider .owl-wrapper').css({
            transform: "translate3d(-1680px, 0px, 0px)"
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1150) {
            $(".proj-bottom .proj-bottom-img").addClass('view');
            $(".proj-bottom").addClass('view');
        } else {
            $(".proj-bottom .proj-bottom-img").removeClass('view');
            $(".proj-bottom").removeClass('view');
        }
    });

    $(".team-slider").owlCarousel({
        //        transitionStyle: "fade",
        items: 4,
        itemsCustom: [
        			[0, 2],
        			[450, 2],
        			[600, 3],
        			[700, 3],
        			[1000, 4],
        			[1200, 4],
        			[1400, 5],
        			[1600, 5]
                ],
        pagination: false,
        navigation: false,
        responsiveRefreshRate: 100,
        autoPlay: 5000,
        mouseDrag: true
    });

    $('.open-wid').click(function () {
        $('.nav-wrap').toggleClass('active');
    });

    //    var i = 0;
    //    $('.down-btn').on('click', function (e) {
    //        e.preventDefault();
    //        i++;
    //        var offset = $(".next-section").eq(i).offset().top;
    //        $('html, body').stop().animate({
    //            scrollTop: 0
    //        }, 400);
    //    });

    $(".down-btn").click(function () {
        var cls = $(this).closest(".new-section").next();
        $("html, body").animate({
            scrollTop: cls
        }, 400);
    });

    $('.nav-wrap .wido').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


});