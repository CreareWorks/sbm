alert('こちらのサイトはポートフォリオの為に制作した存在しないサイト(会社)です。\nご注意願います。');

$(function(){
    
    //ナビのクリックしたら自動スクロール
    $('a').click(function(){
        let id = $(this).attr('href');
        let position = $(id).offset().top - 60;
        $('html, body').animate({
        'scrollTop': position
        },500);
    })

    //要素が画面に表示されたら適用(スライドアップ)
    $(window).scroll(function (){
        $('.fadein').each(function(){
            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
            }
        });
    });

    //ハンバーガーメニュー
    $('.nav-toggle').on('click',function(){
        $('.nav-toggle, .nav').toggleClass('show');
        $('.nav').hide().slideDown();
    });

    //メイン画面
    $('#main-copy').hide().fadeIn(3000);
    $('#main-copy2').hide().fadeIn(5000);
    $('#jump-button').hide().fadeIn(5000);
    $('#jump-txt').hide().fadeIn(4000);
    $('#clianing-slide').hide().slideDown(1500);
    $('#facility-slide').hide().slideDown(1800);
    $('#security-slide').hide().slideDown(2000);
    $('#architecture-slide').hide().slideDown(2200);
    $('#reception-slide').hide().slideDown(2400);

});
