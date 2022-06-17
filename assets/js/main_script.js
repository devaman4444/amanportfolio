$(document).ready(function(){

// Screen Sizes
let sMaxXl = matchMedia("(max-width: 1399px)");
let sMaxLg = matchMedia("(max-width: 1199px)");
let sMaxMd = matchMedia("(max-width: 991px)");
let sMaxXxs = matchMedia("(max-width: 314px)");


// Hero Section Content auto height
const heroContentsHeight = ()=>{
    $(".hero-text-sec > svg").css('--height', `${$(".hero-text p").outerHeight()}px`);
    $(".hero-text-sec").css('--height', `${$(".hero-text p").innerHeight()}px`);
}
heroContentsHeight();
$(window).resize(function () { 
    heroContentsHeight();
});



// Secondary Navigation Menu Height Controll
const navBarHeight = (xxsScreen = false)=>{
    let toggleBar = $(".toggle-bar").outerHeight(true);
    let logo = $(".secondaryNav .navContainer>a").outerHeight(true);
    let navShrink;
    if(toggleBar > logo){
        navShrink = toggleBar;
    }else{
        navShrink = logo;
    }
    let navMenus = $(".nav-menus").outerHeight(true);
    let navExpand = navShrink + navMenus;

    if(!xxsScreen){
        $(".secondaryNav .navContainer").css({"max-height":`${navShrink}px`,"transition":"0.5s"});
        $(".scNavActive").css("max-height",`${navExpand}px`);
    }
    else if(xxsScreen){
        $(".secondaryNav .navContainer").css({"max-height":`${toggleBar + logo}px`,"transition":"0.5s"});
        $(".scNavActive").css("max-height",`${toggleBar + logo + navMenus}px`);
    }

}




// Toggle Button Action Query

$(".toggle-bar").click(function(){
    $(this).toggleClass("active");

    $(".navigationbar").toggleClass("active");
    
    $(".secondaryNav .navContainer .nav-menus").toggleClass("active");
    $(".secondaryNav .navContainer").toggleClass("scNavActive");
    
    if(!sMaxXxs.matches){
        navBarHeight();
    }else{
        navBarHeight(true);
    }
});



// Resume Page -> progress bar indicator width
$( ".progress_bar_inner" ).each(function() {
  $(this).css("--width",$("p:last-child",this ).text());
});



// Scroll Animation

const elems = document.querySelectorAll('.progress_bar_inner');
const triggerBottom = window.innerHeight;

// Function for animation
function elemAnime(){

    elems.forEach(elem=>{
        //Get element position releative to the viewport
        const position = elem.getBoundingClientRect().bottom;

        if((position+10) < triggerBottom){
            elem.classList.remove('anime_pause');
        }
    });
}
function addDelay(){
    var delay = 0.3;
    elems.forEach(elem=>{
        //Get element position releative to the viewport
        let position = elem.getBoundingClientRect().bottom;

        if(position < triggerBottom){
            elem.style.animationDelay = "0.3s";
        }
        delay = delay+0.1;
    });
}
addDelay();
window.addEventListener('scroll', elemAnime);
setTimeout(elemAnime,400);



// Media Query
const media = ()=>{
    // max width 1199
    if(sMaxLg.matches){
        $(".secondaryNav .navContainer .toggle-bar").addClass("visible").removeClass("hidden");
        navBarHeight();
    }else{
        $(".secondaryNav .navContainer .toggle-bar").addClass("hidden").removeClass("visible");
    }
    // max-width 991
    if(sMaxMd.matches){
        $("#hero-section .toggle-bar").addClass("visible").removeClass("hidden");
    }else{
        $("#hero-section .toggle-bar").addClass("hidden").removeClass("visible");
    }
    // max-width 314
    if(sMaxXxs.matches){
        navBarHeight(true);
    }
}
media();

onresize = media;


// $(window).resize(function () { 
//     navBarHeight();
// });



});











