// console.log('연결이 되었삼');

(function($){
    $(document).ready(function(){

        setTimeout(function(){
            $('body').removeClass('inactive'); 
          }, 300);

        $(".menu_toggle").on('click', function() {
            $(this).toggleClass("on");

            $(".nav").toggleClass('on');
          });

        TweenMax.set($('.logo'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.menu_toggle'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.sns_wrap'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.video_background'),{css:{autoAlpha: 0}});
        TweenMax.set($('.main_content'),{css:{y: 20 , autoAlpha: 0}});

            TweenMax.to($('.logo'), 1, {css: {x:0, autoAlpha: 1}});
            TweenMax.to($('.menu_toggle'), 1, {css: {x:0, autoAlpha: 1}, delay: 0.3});
            TweenMax.to($('.sns_wrap'), 1, {css: {x:0, autoAlpha: 1}, delay:0.3, onComplete:function(){
                TweenMax.to($('.video_background'),1, {css:{autoAlpha: 1}});
                TweenMax.to($('.main_content'),1, {css:{y: 0, autoAlpha: 1},delay:0.5});
            }});
          
    })
})(jQuery);



