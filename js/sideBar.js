define(['jquery'],function($){
    'use strict';
     var showSideBar=function (){
        mask.fadeIn();
        sidebar.css('right',0);
    };
    var hideSideBar=function(){
         mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    }
    var sidebar=$('#sidebar'),
        mask=$('.mask'),
        sidebar_trigger=$('#sidebar_trigger'),
        backButton=$('.backToTop');
    sidebar_trigger.on('click',showSideBar);
    mask.on('click',hideSideBar);
   
    return {
        showSideBar: showSideBar,
         hideSidebar: hideSideBar
}

});