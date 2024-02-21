$(function(){

    // 메뉴

    $(".main > li").hover(function(){
        $(this).children(".sub").stop().slideDown()
    }, function(){
        $(".sub").stop().slideUp()
    })//

    // fade이미지
    $(".fade li").eq(0).siblings().hide();
    var n=0; //0 1 2
    setInterval(function(){

        n= (n+1) % 3 ; // 0 1 2

        $(".fade li").eq(n).siblings().fadeOut();
        $(".fade li").eq(n).fadeIn();

    }, 2500)



    // 모달팝업

    $(".p_click").click(function(){
        $(".modal ,  .pop").fadeIn();
    })//

    $(".close").click(function(){
        $(".modal ,  .pop").fadeOut();
    })//
    

})//jquery