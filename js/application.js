status = 0;

$(document).ready(function () {
   
    $(".life_blog").on("click", "a", function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (status == 0) {
            $(this).addClass("active");
            $(".header_img").slideToggle();
            $(this).closest(".life_main").find("#blog_main").slideToggle();
            status = 1; retuen;
        }
        if (status == 1) {
            $(this).closest(".life_choose").find(".active").removeClass("active");
            $(".header_img").slideToggle();
            $(this).closest(".life_main").find("#blog_main").slideToggle();
            status = 0; retuen;
        }
        if (status == 2) {
            $(this).closest(".life_choose").find(".active").removeClass("active");
            $(this).addClass("active");
            $(this).closest(".life_main").find("#gallery_main").slideToggle();
            $(this).closest(".life_main").find("#blog_main").slideToggle();
            status = 1; retuen;
        }
    });



    $(".life_gallery").on("click", "a", function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (status == 0) {
            $(this).addClass("active");
            $(".header_img").slideToggle();
            $(this).closest(".life_main").find("#gallery_main").slideToggle();
            $(document).ready(function () {
                //initialize swiper when document ready
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflow: {
                        rotate: 60,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true
                    }
                });
            });
            status = 2; retuen;
        }
        if (status == 1) {
            $(this).closest(".life_choose").find(".active").removeClass("active");
            $(this).addClass("active");
            $(this).closest(".life_main").find("#blog_main").slideToggle();
            $(this).closest(".life_main").find("#gallery_main").slideToggle();
            $(document).ready(function () {
                //initialize swiper when document ready
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflow: {
                        rotate: 60,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true
                    }
                });
            });
            status = 2; retuen;
        }
        if (status == 2) {
            $(this).closest(".life_choose").find(".active").removeClass("active");
            $(".header_img").slideToggle();
            $(this).closest(".life_main").find("#gallery_main").slideToggle();
            status = 0; retuen;
        }


    });












   
})