$('.one').on("click", function () {
    $('.one').addClass('animate__flipInY');
    $('.one>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.one').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            // $('.one2').css('visibility', 'visible');
            // $('.one2').addClass(`${inAnimate[5]}`);
            $('.one').after(`<div class="item one2 animate__animated animate__flipInY" style="grid-area: 1 / 1 / 4 / 2;
            background-color: #B2A4FF; text-align: center; padding-top: 4em;">יהב שלי, מתוקה שלי, נכדה שלי. מאחלת לך שתמשיכי להיות כזו
            מקסימה,
            שתהיי תלמידה טובה, אחות טובה, בת טובה להורים, שתצליחי בחטיבת הביניים, שזה כבר יותר מבית ספר יסודי,
            ולא
            לעשות שיעורים באמצע הלילה, איך שחוזרים הבייתה עושים שיעורים! מאחלת באהבה, סבתא אסי </div>`)//add style and script
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
            // $('.three2').css('visibility', 'visible');
            // $('.three2').addClass(`${inAnimate[3]}`);
            // $('.three').after(`<div class="item three2 animate__animated animate__zoomIn" style="grid-area: 1 / 3 / 4 / 4; background-color: #FFDEB4;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt accusantium
            // magnam ut at architecto, nisi eligendi? Molestiae recusandae, sunt ducimus quo eaque cupiditate
            // voluptates nostrum? Vel aut praesentium tempore.</div>`);
            $('.three').after(`<div class="item three2  animate__animated animate__fadeInRight" style="grid-area: 1 / 4 / 5 / 5;
            background-color: #FFDEB4;
            text-align: center;
            padding-top: 2em;">Dear Yahav

            Please except our best wishes for reaching this important stage in your life. With the help of your
            parents, family and friends, I’m sure you will continue to grow into a wonderful person.
            Morgan and I are sure you will have a great time celebrating and wish we could be there to celebrate
            with you. So, we hope you save some fun times for when we come to Israel again.
            All the best health, wealth and joy in all your future endeavors.
            Love,
            Tammy @ Morgan</div>`)
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

$('.nine').on("click", function () {
    $('.nine').addClass('animate__flipInY');
    $('.nine>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.nine').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.nine2').css('visibility', 'visible');
            $('.nine2').addClass(`${inAnimate[5]}`);
        }, 3000);
});

$('.ten').on("click", function () {
    $('.ten').addClass('animate__flipInY');
    $('.ten>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.ten').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.ten2').css('visibility', 'visible');
            $('.ten2').addClass(`${inAnimate[5]}`);
        }, 3000);
});

$('.eleven').on("click", function () {
    $('.eleven').addClass('animate__flipInY');
    $('.eleven>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.eleven').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.eleven2').css('visibility', 'visible');
            $('.eleven2').addClass(`${inAnimate[5]}`);
        }, 3000);
});

$('.twelve').on("click", function () {
    $('.twelve').addClass('animate__flipInY');
    $('.twelve>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.twelve').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.twelve2').css('visibility', 'visible');
            $('.twelve2').addClass(`${inAnimate[5]}`);
        }, 3000);
});

$('.sixteen').on("click", function () {
    $('.sixteen').addClass('animate__flipInY');
    $('.sixteen>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.sixteen').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.sixteen2').css('visibility', 'visible');
            $('.sixteen2').addClass(`${inAnimate[5]}`);
        }, 3000);
});

$('.seventeen').on("click", function () {
    $('.seventeen').addClass('animate__flipInY');
    $('.seventeen>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.seventeen').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.seventeen2').css('visibility', 'visible');
            $('.seventeen2').addClass(`${inAnimate[5]}`);
        }, 3000);
});

$('.eighteen').on("click", function () {
    $('.eighteen').addClass('animate__flipInY');
    $('.eighteen>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.eighteen').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.eighteen2').css('visibility', 'visible');
            $('.eighteen2').addClass(`${inAnimate[5]}`);
        }, 3000);
});

$('.nineteen').on("click", function () {
    $('.nineteen').addClass('animate__flipInY');
    $('.nineteen>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.nineteen').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.nineteen2').css('visibility', 'visible');
            $('.nineteen2').addClass(`${inAnimate[5]}`);
        }, 3000);
});

$('.thirteen').on("click", function () {
    $('.thirteen').addClass('animate__flipInY');
    $('.thirteen>img').css('visibility', 'visible');
    setTimeout(
        function () {
            $('.thirteen').addClass('animate__zoomOut');
        }, 2500);
    setTimeout(
        function () {
            $('.thirteen2').css('visibility', 'visible');
            $('.thirteen2').addClass(`${inAnimate[5]}`);
        }, 3000);
});



