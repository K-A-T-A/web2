$('.review-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});

sliderSecondBlock()
function sliderSecondBlock(){
    $('.reviews .reviewsBlock .info-block .item').css('opacity', 0.3);
    $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).css('opacity', 1);

}

