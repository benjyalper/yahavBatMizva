$('.one').on("click", function () {
    $('.one').addClass('animate__flipInY');
});


$('.two').on("click", function () {
    $('.two').addClass('animate__flipInY');
    $('.two>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.two').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.two').removeClass('animate__zoomOut');
            $('.two').addClass('animate__zoomIn');
            $('img').css('visibility', 'hidden');
        }, 3000);
});

$('.three').on('click', function () {
    $('.three').addClass('animate__flipInY');
    $('.three>img').css('visibility', 'visible');
    // $('.three').remove();
    setTimeout(
        function () {
            $('.three').addClass('animate__zoomOut');
        }, 2500);

    setTimeout(
        function () {
            $('.three2').css('visibility', 'visible');
            $('.three2').addClass('animate__zoomIn');
            // $('.three').after(`<div class="item three2 animate__animated animate__zoomIn" style="grid-area: 1 / 3 / 4 / 4; background-color: #FFDEB4;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt accusantium
            // magnam ut at architecto, nisi eligendi? Molestiae recusandae, sunt ducimus quo eaque cupiditate
            // voluptates nostrum? Vel aut praesentium tempore.</div>`);
        }, 3000);
});



