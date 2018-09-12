$(function(){
    var windowW = $(window).width();
    var rwindowW = $(window).width();

    // スマホ用の複製パーツ
    // グロナビ
    var cloneGnavi = $('#l-side').find('.m-gnavi').clone();
    $(cloneGnavi).insertAfter('#l-gnavi_sp form');

    // メインビジュアル
    var cloneVisual = $('#l-main').find('.m-main_img').clone();
    $(cloneVisual).insertAfter('#l-gnavi_sp');

    // カテゴリタイトル
    var cloneCateH2 = $('.m-list_category').find('h2').clone();
    $(cloneCateH2).insertBefore('.m-section_category');

    // サイドメニュータイトル
    var cloneSideH2 = $('.m-section_side_info').find('h2').clone();
    $(cloneSideH2).insertBefore('.m-section_side_info');

    // サイドメニュー
    var cloneSide = $('#l-side').clone();
    $(cloneSide).insertAfter('.m-section_category').eq(0);
    $(cloneSide).attr('id', 'l-side-sp');

    // ブレイクポイント
    var breakP = 769;


    /* ユーザーエージェント取得
    --------------------------------------------------------------------------------*/
    var getUa = function (ua) {
        return {
            mobile:ua.indexOf('iphone') != -1 || ua.indexOf('ipod') != -1 || ua.indexOf('ipad') != -1 || ua.indexOf('android') != -1
        }
    }(window.navigator.userAgent.toLowerCase());


    /* jQueryAutoHeight
    ---------------------------------------------------------- */
    var autoHeight = function() {
            $('ul.m-list_category li').autoHeight({column:4});
    }


    /* スマホ用グロナビの展開
    ---------------------------------------------------------- */
    var spMenu = function() {
        var btnMenu = $('#m-btn_menu_sp');
        $(cloneVisual).show();

        $(btnMenu).on('click', function(){
            if($('#l-gnavi_sp').is(':hidden')){
                $('#l-gnavi_sp').not(':animated').slideDown();
            }else{
                $('#l-gnavi_sp').not(':animated').slideUp();
            }
            return false;
        });
    }


/* 各種読み込み
------------------------------------------------------------------*/
    var stacEvent =  function () {
        if (rwindowW < breakP) {
            // スマホ
            spMenu();
            // autoHeightをクリア
            $('ul.m-list_category li').css('min-height', 'inherit');
            $('.m-section_category').eq(0).next('#l-side-sp').attr('id', 'l-side');
            $('#l-main').prev('#l-side').attr('id', 'l-side-pc')

        }else{
            // PC
            // グロナビを非表示
            $('#l-gnavi_sp').hide();
            $(cloneVisual).hide();
            autoHeight();
            $('.m-section_category').eq(0).next('#l-side').attr('id', 'l-side-sp');
            $('#l-main').prev('#l-side-pc').attr('id', 'l-side')
        }
    };


    // ロード・リサイズ時の処理
    $(window).on('load', function () {
        stacEvent();
    });
    $(window).on('resize', function () {
        rwindowW = $(window).width();

            // モバイルの場合スクロール時はリサイズイベントを発生させない
            if(getUa.mobile){
                if(windowW != rwindowW) {
                    stacEvent();
                }
            }else{
                stacEvent();
            }
    });

    // イベント「今月」リンク先設定
    var ymd = new Date();
    var year = ymd.getFullYear();
    var month = ymd.getMonth() + 1;
    month = ('0' + month).slice(-2);
    var fileName = "event_"+year+""+month+".html";
    $("#thisMonth").attr("href", fileName);

    // 別ウィンドウアイコンがつくリンクに「新しいウインドウが開きます」を追加
    $(".m-icon_external a").attr("title", "新しいウインドウが開きます");

});
