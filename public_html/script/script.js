"use strict";
var toggleButtonNavigationSite = document.getElementById('btn-navigation-site');
var toggleButtonNavigation = document.getElementById('btn-navigation');
var toggleButtonFooter = document.getElementById('btn-footer');
var productInfo = document.getElementById("product-info");
var navigationSite = document.getElementById('navigation-site');
var navigation = document.getElementById('navigation');


toggleButtonNavigationSite.addEventListener("click", function () {
    if (navigationSite.style.display === '') {
        navigationSite.style.display = "block";
        productInfo.style.top = '600px';
    } else {
        navigationSite.style.display = '';
        productInfo.style.top = '545px';
    }
    if ((navigationSite.style.display === 'block') && (navigation.style.display === 'block')) {
        productInfo.style.top = '700px';
    } 
    if ((navigationSite.style.display === '') || (navigation.style.display === '')) {
        productInfo.style.top = '600px';
    } 
});
toggleButtonNavigation.addEventListener("click", function () {
    if (navigation.style.display === '') {
        navigation.style.display = "block";
        productInfo.style.top = '600px';
    } else {
        navigation.style.display = '';
        productInfo.style.top = '545px';
    }
    if ((navigationSite.style.display === 'block') && (navigation.style.display === 'block')) {
        productInfo.style.top = '700px';
    } 
    if ((navigationSite.style.display === '') || (navigation.style.display === '')) {
        productInfo.style.top = '600px';
    } 
});
toggleButtonFooter.addEventListener("click", function () {
    var footer = document.getElementById('holder-asides');
    if (footer.style.display === '') {
        footer.style.display = "block";
    } else {
        footer.style.display = '';
    }
});

