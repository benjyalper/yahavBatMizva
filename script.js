$('.one').on("click", function () {
    $('.one').addClass('animate__flipInY');
});

$('.two').on("click", function () {
    $('.two').addClass('animate__flipInY');
    $('img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.two').addClass('animate__zoomOut');
        }, 3000);
    setTimeout(
        function () {
            $('.two').removeClass('animate__zoomOut');
            $('.two').addClass('animate__zoomIn');
            $('img').css('visibility', 'hidden');
        }, 4000);



}); 