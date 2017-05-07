requirejs.config({
    paths:{
        jquery:'jquery-3.2.1.min',
        sideBar:'sideBar',
        backBtn:'backBtn',
        listNav:'listNav'
    }
});
requirejs(['jquery','sideBar','backBtn','listNav'],function($,sideBar,backBtn,listNav){
    console.log($+sideBar+backBtn+listNav+'is loaded');
});