define(['jquery'],function($){
    'use strict';
     var showSidebar=function (){
        mask.fadeIn();
        sidebar.css('right',0);
    };
    var hideSidebar=function(){
         mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    }
    var sidebar=$('#sidebar'),
        mask=$('.mask'),
        sidebar_trigger=$('#sidebar_trigger'),
        backButton=$('.backToTop');
    sidebar_trigger.on('click',showSidebar);
    mask.on('click',hideSidebar);
   
    return {
        showSideBar: showSideBar,
         hideSidebar: hideSidebar
}

});