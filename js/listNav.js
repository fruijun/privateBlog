define(['jquery'],function($){
    var directTo=function(){
            $(this).css("background","#6090b6");
            var $otherSpans = $(this).closest('li').siblings().find('span.list-nav');
            $otherSpans.css("background","");
            var href = $(this).attr("href");
            var pos = $(href).offset().top;
            $("html,body").animate({scrollTop: pos}, 1000);	   
            return false;
        };
    $('.list-nav').first().css("background","#6090b6");
    $('.list-nav').on('click',directTo);
    return{
        directTo:directTo
    }
});