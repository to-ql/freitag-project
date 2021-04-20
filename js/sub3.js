
$(document).ready(function(){
    setTimeout(function(){
        $('body').removeClass('inactive'); 
    }, 300);

    TweenMax.set($('.logo'),{css:{x: -20 + 'vw', autoAlpha: 0}});
    TweenMax.set($('.menu_toggle'),{css:{x: -20 + 'vw', autoAlpha: 0}});
    TweenMax.set($('.sns_wrap'),{css:{x: -20 + 'vw', autoAlpha: 0}});

    TweenMax.to($('.logo'), 1, {css: {x:0, autoAlpha: 1}});
    TweenMax.to($('.menu_toggle'), 1, {css: {x:0, autoAlpha: 1}, delay: 0.3});
    TweenMax.to($('.sns_wrap'), 1, {css: {x:0, autoAlpha: 1}, delay:0.3});

      
    var $up = $('.product_box');
    var $upBox = $up.find('div');
    var tl = new TimelineMax();
    var form, to, duration, stagger;
    
        form = {y : 10 + 'vw', autoAlpha : 0};
        to = {y : 0, autoAlpha : 1, ease : Expo.easeOut};
        duration = 1.5;
        stagger = 0.2;
            
    tl.staggerFromTo($upBox, duration, form, to, stagger, null, function(){});
      


    /*상품 상세 페이지*/
    /*PRODUCT01*/
    $('#product01').click(function() {
        $('#product_detail01').addClass('on')
    });
    $('#product_detail01').click(function() {
        $('#product_detail01').removeClass('on')
    });

    /*PRODUCT02*/
    $('#product02').click(function() {
        $('#product_detail02').addClass('on')
    });
    $('#product_detail02').click(function() {
        $('#product_detail02').removeClass('on')
    });

    /*PRODUCT03*/
    $('#product03').click(function() {
        $('#product_detail03').addClass('on')
    });
    $('#product_detail03').click(function() {
        $('#product_detail03').removeClass('on')
    });

    /*PRODUCT04*/
    $('#product04').click(function() {
        $('#product_detail04').addClass('on')
    });
    $('#product_detail04').click(function() {
        $('#product_detail04').removeClass('on')
    });

    /*PRODUCT05*/
    $('#product05').click(function() {
        $('#product_detail05').addClass('on')
    });
    $('#product_detail05').click(function() {
        $('#product_detail05').removeClass('on')
    });


    /*PRODUCT06*/
    $('#product06').click(function() {
        $('#product_detail06').addClass('on')
    });
    $('#product_detail06').click(function() {
        $('#product_detail06').removeClass('on')
    });

    /*PRODUCT07*/
    $('#product07').click(function() {
        $('#product_detail07').addClass('on')
    });
    $('#product_detail07').click(function() {
        $('#product_detail07').removeClass('on')
    });

    /*PRODUCT08*/
    $('#product08').click(function() {
        $('#product_detail08').addClass('on')
    });
    $('#product_detail08').click(function() {
        $('#product_detail08').removeClass('on')
    });

    /*PRODUCT09*/
    $('#product09').click(function() {
        $('#product_detail09').addClass('on')
    });
    $('#product_detail09').click(function() {
        $('#product_detail09').removeClass('on')
    });

    /*PRODUCT10*/
    $('#product10').click(function() {
        $('#product_detail10').addClass('on')
    });
    $('#product_detail10').click(function() {
        $('#product_detail10').removeClass('on')
    });

    /*PRODUCT11*/
    $('#product11').click(function() {
        $('#product_detail11').addClass('on')
    });
    $('#product_detail11').click(function() {
        $('#product_detail11').removeClass('on')
    });

    /*PRODUCT12*/
    $('#product12').click(function() {
        $('#product_detail12').addClass('on')
    });
    $('#product_detail12').click(function() {
        $('#product_detail12').removeClass('on')
    });

    /*PRODUCT13*/
    $('#product13').click(function() {
        $('#product_detail13').addClass('on')
    });
    $('#product_detail13').click(function() {
        $('#product_detail13').removeClass('on')
    });

    /*PRODUCT14*/
    $('#product14').click(function() {
        $('#product_detail14').addClass('on')
    });
    $('#product_detail14').click(function() {
        $('#product_detail14').removeClass('on')
    });

    /*PRODUCT15*/
    $('#product15').click(function() {
        $('#product_detail15').addClass('on')
    });
    $('#product_detail15').click(function() {
        $('#product_detail15').removeClass('on')
    });

    /*PRODUCT16*/
    $('#product16').click(function() {
        $('#product_detail16').addClass('on')
    });
    $('#product_detail16').click(function() {
        $('#product_detail16').removeClass('on')
    });

    /*PRODUCT17*/
    $('#product17').click(function() {
        $('#product_detail17').addClass('on')
    });
    $('#product_detail17').click(function() {
        $('#product_detail17').removeClass('on')
    });













/*텍스트 호버*/
/*product01*/
$("#product01").mouseover(function(){
    $("#product01 img").css("visibility", "visible");
    $("#product01 span").css("visibility", "hidden");
});
$("#product01").mouseout(function(){
    $("#product01 img").css("visibility", "hidden");
    $("#product01 span").css("visibility", "visible");
});

/*product02*/
$("#product02").mouseover(function(){
    $("#product02 img").css("visibility", "visible");
    $("#product02 span").css("visibility", "hidden");
});
$("#product02").mouseout(function(){
    $("#product02 img").css("visibility", "hidden");
    $("#product02 span").css("visibility", "visible");
});

/*product03*/
$("#product03").mouseover(function(){
    $("#product03 img").css("visibility", "visible");
    $("#product03 span").css("visibility", "hidden");
});
$("#product03").mouseout(function(){
    $("#product03 img").css("visibility", "hidden");
    $("#product03 span").css("visibility", "visible");
});

/*product04*/
$("#product04").mouseover(function(){
    $("#product04 img").css("visibility", "visible");
    $("#product04 span").css("visibility", "hidden");
});
$("#product04").mouseout(function(){
    $("#product04 img").css("visibility", "hidden");
    $("#product04 span").css("visibility", "visible");
});

/*product05*/
$("#product05").mouseover(function(){
    $("#product05 img").css("visibility", "visible");
    $("#product05 span").css("visibility", "hidden");
});
$("#product05").mouseout(function(){
    $("#product05 img").css("visibility", "hidden");
    $("#product05 span").css("visibility", "visible");
});

/*product06*/
$("#product06").mouseover(function(){
    $("#product06 img").css("visibility", "visible");
    $("#product06 span").css("visibility", "hidden");
});
$("#product06").mouseout(function(){
    $("#product06 img").css("visibility", "hidden");
    $("#product06 span").css("visibility", "visible");
});

/*product07*/
$("#product07").mouseover(function(){
    $("#product07 img").css("visibility", "visible");
    $("#product07 span").css("visibility", "hidden");
});
$("#product07").mouseout(function(){
    $("#product07 img").css("visibility", "hidden");
    $("#product07 span").css("visibility", "visible");
});

/*product08*/
$("#product08").mouseover(function(){
    $("#product08 img").css("visibility", "visible");
    $("#product08 span").css("visibility", "hidden");
});
$("#product08").mouseout(function(){
    $("#product08 img").css("visibility", "hidden");
    $("#product08 span").css("visibility", "visible");
});

/*product09*/
$("#product09").mouseover(function(){
    $("#product09 img").css("visibility", "visible");
    $("#product09 span").css("visibility", "hidden");
});
$("#product09").mouseout(function(){
    $("#product09 img").css("visibility", "hidden");
    $("#product09 span").css("visibility", "visible");
});

/*product10*/
$("#product10").mouseover(function(){
    $("#product10 img").css("visibility", "visible");
    $("#product10 span").css("visibility", "hidden");
});
$("#product10").mouseout(function(){
    $("#product10 img").css("visibility", "hidden");
    $("#product10 span").css("visibility", "visible");
});

/*product11*/
$("#product11").mouseover(function(){
    $("#product11 img").css("visibility", "visible");
    $("#product11 span").css("visibility", "hidden");
});
$("#product11").mouseout(function(){
    $("#product11 img").css("visibility", "hidden");
    $("#product11 span").css("visibility", "visible");
});

/*product11*/
$("#product11").mouseover(function(){
    $("#product11 img").css("visibility", "visible");
    $("#product11 span").css("visibility", "hidden");
});
$("#product11").mouseout(function(){
    $("#product11 img").css("visibility", "hidden");
    $("#product11 span").css("visibility", "visible");
});

/*product12*/
$("#product12").mouseover(function(){
    $("#product12 img").css("visibility", "visible");
    $("#product12 span").css("visibility", "hidden");
});
$("#product12").mouseout(function(){
    $("#product12 img").css("visibility", "hidden");
    $("#product12 span").css("visibility", "visible");
});

/*product13*/
$("#product13").mouseover(function(){
    $("#product13 img").css("visibility", "visible");
    $("#product13 span").css("visibility", "hidden");
});
$("#product13").mouseout(function(){
    $("#product13 img").css("visibility", "hidden");
    $("#product13 span").css("visibility", "visible");
});

/*product14*/
$("#product14").mouseover(function(){
    $("#product14 img").css("visibility", "visible");
    $("#product14 span").css("visibility", "hidden");
});
$("#product14").mouseout(function(){
    $("#product14 img").css("visibility", "hidden");
    $("#product14 span").css("visibility", "visible");
});

/*product15*/
$("#product15").mouseover(function(){
    $("#product15 img").css("visibility", "visible");
    $("#product15 span").css("visibility", "hidden");
});
$("#product15").mouseout(function(){
    $("#product15 img").css("visibility", "hidden");
    $("#product15 span").css("visibility", "visible");
});

/*product16*/
$("#product16").mouseover(function(){
    $("#product16 img").css("visibility", "visible");
    $("#product16 span").css("visibility", "hidden");
});
$("#product16").mouseout(function(){
    $("#product16 img").css("visibility", "hidden");
    $("#product16 span").css("visibility", "visible");
});
  
/*product17*/
$("#product17").mouseover(function(){
    $("#product17 img").css("visibility", "visible");
    $("#product17 span").css("visibility", "hidden");
});
$("#product17").mouseout(function(){
    $("#product17 img").css("visibility", "hidden");
    $("#product17 span").css("visibility", "visible");
});


});