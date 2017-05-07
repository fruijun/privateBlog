define(['jquery'],function($){
    var  backButton=$('.backToTop');
   function  animate(){
        $('html,body').animate({
             scrollTop:0
            },800);
        };
    function scroll(){
         if($(window).scrollTop()>$(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    };
    backButton.on('click',animate);
    $(window).on('scroll', scroll);
    $(window).trigger('scroll');
return{
    animate:animate,
    scroll:scroll
};
});