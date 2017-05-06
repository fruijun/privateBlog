$(function(){
    'use strict';
    var sidebar=$('#sidebar'),
        mask=$('.mask'),
        sidebar_trigger=$('#sidebar_trigger'),
        backButton=$('.backToTop');
    function showSidebar(){
        mask.fadeIn();
        sidebar.css('right',0);
    }
    function hideSidebar(){
        mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    }
    sidebar_trigger.on('click',showSidebar)
    mask.on('click',hideSidebar)
    backButton.on('click',function(){
    $('html,body').animate({
        scrollTop:0
    },800)})
    $(window).on('scroll',function(){
        if($(window).scrollTop()>$(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    })
$(window).trigger('scroll');
$('.list-nav').first().css("background","#6090b6");
$('.list-nav').on('click',function(){
    $(this).css("background","#6090b6");
    var $otherSpans = $(this).closest('li').siblings().find('span.list-nav');
    
    $otherSpans.css("background","");
    var href = $(this).attr("href");
    var pos = $(href).offset().top;
    $("html,body").animate({scrollTop: pos}, 1000);	   
    return false;
})
$('.search-text-box').on('focus',function(){
    this.value='';
    this.style.width='90px';
});
$('.search-text-box').on('blur',function(){
    this.value='Search';
    this.style.width='45px';
    
});



})
