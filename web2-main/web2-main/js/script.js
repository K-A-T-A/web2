$('.review-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});

sliderSecondBlock()
$('.reviews .reviewsBlock .slick-arrow').on('click', function() {
    sliderSecondBlock()
})
function sliderSecondBlock(){ 
    $('.reviews .reviewsBlock .info-block .item.active').removeClass('active');
    $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).addClass('active')

}

