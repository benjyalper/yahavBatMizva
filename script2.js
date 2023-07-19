$('.one').on("click", function () {
    $('.one').addClass('animate__flipInY');
    $('.one>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.one').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.one2').css('visibility', 'visible');
            $('.one2').addClass(`${inAnimate[5]}`);
        }, 3000);
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
            $('.two2').css('visibility', 'visible');
            $('.two2').addClass(`${inAnimate[4]}`);
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
            $('.three2').addClass(`${inAnimate[3]}`);
            // $('.three').after(`<div class="item three2 animate__animated animate__zoomIn" style="grid-area: 1 / 3 / 4 / 4; background-color: #FFDEB4;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt accusantium
            // magnam ut at architecto, nisi eligendi? Molestiae recusandae, sunt ducimus quo eaque cupiditate
            // voluptates nostrum? Vel aut praesentium tempore.</div>`);
        }, 3000);
});

$('.four').on("click", function () {
    $('.four').addClass('animate__flipInY');
    $('.four>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.four').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.four2').css('visibility', 'visible');
            $('.four2').addClass(`${inAnimate[2]}`);
        }, 3000);
});

$('.five').on("click", function () {
    $('.five').addClass('animate__flipInY');
    $('.five>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.five').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.five2').css('visibility', 'visible');
            $('.five2').addClass(`${inAnimate[1]}`);
        }, 3000);
});

var one = '.one';
var two = '.two';
var three = '.three';
var four = '.four';
var five = '.five';
var six = '.six';
var seven = '.seven';
var eight = '.eight';

var inAnimate = ['animate__bounceInUp', 'animate__bounceInLeft', 'animate__fadeInRight', 'animate__fadeInUpBig', 'animate__zoomIn', 'animate__fadeInLeft']



var animateCard = function () {
    $(`${eight}`).addClass('animate__flipInY');
    $('.eight>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.eight').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.eight2').css('visibility', 'visible');
            $('.eight2').addClass(inAnimate[0]);
        }, 3000);
}



$(eight).on("click", animateCard);



