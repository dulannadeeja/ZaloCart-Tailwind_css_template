
document.addEventListener("DOMContentLoaded", function () {
    appInit();
});

function appInit() {
    swiperInit();
}


// swiper slider init function
function swiperInit() {
    document.querySelectorAll('.swiper').forEach(function (el, i) {

        let index = i + 1;
        let isBrandsSlider = el.classList.contains('swiper-brands');
        let isBestDealsSlider = el.classList.contains('swiper-best-deals');
        let isProductsGridSlider = el.classList.contains('swiper-products-grid');

        if (isBrandsSlider) {
            new Swiper(el, {

                // Optional parameters
                direction: 'horizontal',
                slidesPerView: 4,
                spaceBetween: 5,
                slidesPerGroup: 4,
                grabCursor: true,
                keyboard: {
                    enabled: true,
                },

                // pagination
                pagination: {
                    el: ".swiper-pagination" + '-' + index,
                    clickable: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next' + '-' + index,
                    prevEl: '.swiper-button-prev' + '-' + index,
                },


                breakpoints: {
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                        slidesPerGroup: 4,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                        slidesPerGroup: 5,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                        slidesPerGroup: 6,
                    },
                    1280: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                        slidesPerGroup: 7,
                    },
                    1536: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                        slidesPerGroup: 8,
                    },
                }
            });
        } else if (isBestDealsSlider) {
            console.log('best deals');
            new Swiper(el, {

                // Optional parameters
                direction: 'vertical',
                slidesPerView: 5,
                spaceBetween: 20,
                slidesPerGroup: 5,
                grabCursor: true,
                keyboard: {
                    enabled: true,
                },

                // pagination
                pagination: {
                    el: ".swiper-pagination" + '-' + index,
                    clickable: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next' + '-' + index,
                    prevEl: '.swiper-button-prev' + '-' + index,
                },
            });
        } else if (isProductsGridSlider) {
            new Swiper(el, {

                // Optional parameters

                slidesPerView: 5,
                spaceBetween: 0,
                grid: {
                    rows: 3,
                    fill: 'row',

                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next' + '-' + index,
                    prevEl: '.swiper-button-prev' + '-' + index,
                },


                breakpoints: {
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        grid: {
                            rows: 4,
                            fill: 'row',

                        }
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                        grid: {
                            rows: 3,
                            fill: 'row',

                        }
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                        grid: {
                            rows: 3,
                            fill: 'row',

                        }
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 0,
                        grid: {
                            rows: 2,
                            fill: 'row',

                        }
                    },
                    1536: {
                        slidesPerView: 7,
                        spaceBetween: 0,
                        grid: {
                            rows: 2,
                            fill: 'row',

                        }
                    },
                }
            });
        } else {
            new Swiper(el, {

                // Optional parameters
                direction: 'horizontal',
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
                grabCursor: true,
                keyboard: {
                    enabled: true,
                },

                // pagination
                pagination: {
                    el: ".swiper-pagination" + '-' + index,
                    clickable: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next' + '-' + index,
                    prevEl: '.swiper-button-prev' + '-' + index,
                },


                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        slidesPerGroup: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        slidesPerGroup: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        slidesPerGroup: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                        slidesPerGroup: 5,
                    },
                    1536: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                        slidesPerGroup: 6,
                    },
                }
            });

        }


    });
}

