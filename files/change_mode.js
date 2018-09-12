/* !font-size change ------------------------------------------------------- */
fsize=$.cookie('fsize');

$(function(){
if(fsize == null) {
$("#l-wrapper").css("font-size","100%");
$("ul.fontSize li#normal").removeClass("off");
$("ul.fontSize li#normal").addClass("on");
$("ul.fontSize li#enlarge").removeClass("on");
$("ul.fontSize li#enlarge").addClass("off");
}
if(fsize == 0) {
$("#l-wrapper").css("font-size","100%");
$("ul.fontSize li#normal").removeClass("off");
$("ul.fontSize li#normal").addClass("on");
$("ul.fontSize li#enlarge").removeClass("on");
$("ul.fontSize li#enlarge").addClass("off");
}
if(fsize == 1) {
$("#l-wrapper").css("font-size","120%");
$("ul.fontSize li#normal").removeClass("on");
$("ul.fontSize li#normal").addClass("off");
$("ul.fontSize li#enlarge").removeClass("off");
$("ul.fontSize li#enlarge").addClass("on");
}
if(fsize == 2) {
$("#l-wrapper").css("font-size","140%");
$("ul.fontSize li#normal").removeClass("on");
$("ul.fontSize li#normal").addClass("off");
$("ul.fontSize li#enlarge").removeClass("off");
$("ul.fontSize li#enlarge").addClass("on");
}
if(fsize == 3) {
$("#l-wrapper").css("font-size","160%");
$("ul.fontSize li#normal").removeClass("on");
$("ul.fontSize li#normal").addClass("off");
$("ul.fontSize li#enlarge").removeClass("off");
$("ul.fontSize li#enlarge").addClass("on");
}
if(fsize == 4) {
$("#l-wrapper").css("font-size","180%");
$("ul.fontSize li#normal").removeClass("on");
$("ul.fontSize li#normal").addClass("off");
$("ul.fontSize li#enlarge").removeClass("off");
$("ul.fontSize li#enlarge").addClass("on");
}
if(fsize == 5) {
$("#l-wrapper").css("font-size","200%");
$("ul.fontSize li#normal").removeClass("on");
$("ul.fontSize li#normal").addClass("off");
$("ul.fontSize li#enlarge").removeClass("off");
$("ul.fontSize li#enlarge").addClass("on");
}
});


function textSizeUp(){
if(fsize == 5) {
m = escape("これ以上文字のサイズを大きくできません。");
alert(unescape(m));
}
if(fsize == 4) {
$("#l-wrapper").css("font-size","200%");
fsize = 5;
}
if(fsize == 3) {
$("#l-wrapper").css("font-size","180%");
fsize = 4;
}
if(fsize == 2) {
$("#l-wrapper").css("font-size","160%");
fsize = 3;
}
if(fsize == 1) {
$("#l-wrapper").css("font-size","140%");
fsize = 2;
}
if(fsize == 0) {
$("#l-wrapper").css("font-size","120%");
fsize = 1;
}
if(fsize == null) {
$("#l-wrapper").css("font-size","120%");
fsize = 1;
}
$("ul.fontSize li#normal").removeClass("on");
$("ul.fontSize li#normal").addClass("off");
$("ul.fontSize li#enlarge").removeClass("off");
$("ul.fontSize li#enlarge").addClass("on");
$.cookie("fsize",fsize,{expires:30,path:'/'});
}


function textSizeReset(){
m = escape("標準文字サイズに戻しますか？");
r = confirm(unescape(m));
    if (r) {
$("#l-wrapper").css("font-size","100%");
fsize = 0;
$("ul.fontSize li#normal").removeClass("off");
$("ul.fontSize li#normal").addClass("on");
$("ul.fontSize li#enlarge").removeClass("on");
$("ul.fontSize li#enlarge").addClass("off");
$.cookie("fsize",fsize,{expires:30,path:'/'});
    }
}


/* !background-color change ------------------------------------------------------- */
bgColor=$.cookie('bgColor')

$(function(){
    if($.cookie('bgColor')){
        loadCss();
    }
});
function changeColor(){
    if($.cookie('bgColor')){
        removeCss();
        $.removeCookie('bgColor' , { path: "/" });
    }else{
        loadCss();
        $.cookie('bgColor' , 'black' , { expires: 7,  path: "/" });
    }
};

function loadCss(){
    var bkCss = document.createElement("link");
    bkCss.setAttribute("rel", "stylesheet");
    bkCss.setAttribute("type", "text/css");
    bkCss.setAttribute("href", "/site/zen/files/pa_bgcolorBlack.css");

    if(!$('head').find('link[href="/site/zen/files/pa_bgcolorBlack.css"]').size()){
        document.getElementsByTagName("head")[0].appendChild(bkCss);
    }
};

function removeCss(){
    $('head').find('link[href="/site/zen/files/pa_bgcolorBlack.css"]').remove();
};


/* レスポンシブ対応 ------------------------------------------------------- */
// 769px以下の表示ではフォントサイズ、配色を標準に戻す
$(window).on("load resize", function() {
    var winW = $(window).width()

    if(winW <= 769){
        reponsiveReset();
    }
});

function reponsiveReset(){
    $("#l-wrapper").css("font-size","100%");
    fsize = 0;
    $("ul.fontSize li#normal").removeClass("off");
    $("ul.fontSize li#normal").addClass("on");
    $("ul.fontSize li#enlarge").removeClass("on");
    $("ul.fontSize li#enlarge").addClass("off");

    if($.cookie('bgColor')){
        removeCss();
        $.removeCookie('bgColor' , { path: "/" });
    }
};
