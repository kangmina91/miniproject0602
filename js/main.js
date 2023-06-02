$(function () {
    // $('h1').hide();
    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        // 슬라이드 해당 숫자
        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        // 슬라이드 총 갯수
        $('.main_visual .slide_num strong').text(s.slideCount);
        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    })

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    })


    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    })

    // 상단 메뉴
    $(window).on('scroll', function () {

        // 변수에 스크롤한 량을 담는다.
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    $('.bg_video').YTPlayer({
        videoURL: '38Ath3n6ABc',
        containment: '.main_video',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    // $('h1').hide();

    $('.product_slide').slick({
        // 이미지 갯수보다 하나 작게 쓸 것
        slidesToShow: 3,
        // 버튼 누르면 해당 슬라이드도 함께 돌리기 - 이때 이미지 개수가 맞아야 한다.
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        // 반응형 슬라이드
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

    $('.pic_slide').slick({
        vertical: true,
        // 버튼 누르면 해당 슬라이드도 함께 돌리기
        asNavFor: ".product_slide",
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    })

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st - 95 }, 600);
    })



})