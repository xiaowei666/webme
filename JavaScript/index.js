$(function(){
    //var mySwiper = new Swiper('.swiper-container',{
    //    mousewheelControl : true,
    //    direction:'vertical',
    //    mousewheelForceToAxis : true,
    //})
    var height = $(".somework").height();
    var hei = $(window).height();
    var index = 0,topv ;
    var num = 0 ;
    $(".m-left").css("transition","all .6s ease");
//head显示影藏
    var bugs = 0 ;
    var flag = true;
    $(".jia").click(function(){

        if(flag){
            $(this).attr('data-role','home2');
            $(this).css("color","rgb(19, 206, 230)");
            setTimeout(function(){
                $(".chao").slideToggle();
            },0);
            flag=false;
        }else{
            $(this).attr('data-role','home1');
            setTimeout(function(){
                $(".chao").slideToggle();
            },0);
            $(this).css("color","#fff");
            flag=true;
        }
    });
    $(".m-left").click(function(){
        bugs = $(this).index(".m-left");
        $(".swiper-container").css({transform:"translate3d(0,-"+bugs*hei+"px,0)"})
    })
    $(".meau").click(function(){
        bugs = $(this).index(".meau");
        $(".swiper-container").css({transform:"translate3d(0,-"+bugs*hei+"px,0)"})
    });
    $(".mean-son").click(function(){
        var pub = $(this).index(".mean-son") ;
       $(".work").css("display","none");
        $($(".work")[pub]).fadeIn();
    });
    setInterval(function(){
        $(".m-left").removeClass("bor");
        $($(".m-left")[bugs]).addClass("bor");
    },200);
    $(".tos").click(function(){

        $(".swiper-container").css({transform:"translate3d(0,-"+0+"px,0)"})
    })
    $(".logo").click(function(){

        $(".swiper-container").css({transform:"translate3d(0,-"+0+"px,0)"})
    })
    //somework 样式
    //下滑
    //
    $(".ss").click(function(){
        $(".swiper-container").css({transform:"translate3d(0,-"+hei+"px,0)"})
    })
 //头像的切换
    $(".chang").css("transition","margin .4s linear");
    touch.on('.homes','dragstart',function(){

    });
    touch.on('.homes','drag',function(e){

    });
    touch.on('.homes','dragend',function(e){
        console.log(e.direction);
        if(Math.abs(e.x)>300|| e.factor<5){
            if(e.direction=='right'){
                num--;
                if(num==-1){
                    num = 5 ;
                }
                $(".chang").css("margin-left",-num*80+"px");
            }else if(e.direction=='left'){
                num++;
                if(num==6){
                    num = 0 ;
                }
                $(".chang").css("margin-left",-num*80+"px");
            }
        }else{
            return ;
        }
    });
//调用方式：---------------------------------------------
    var topx= $(".swiper-slide").height();
    $(".swiper-container").css({transition:"transform .4s linear"});
 $('.swiper-slide').mouseWheel(function(){
     $(".chao").css("display","none");
     setTimeout(function(){
         index--;
         if(index==-1){
             index=0;
         }
          topv = index*topx ;
         $(".swiper-container").css({transform:"translate3d(0,-"+topv+"px,0)"});
         return topv;
     },0)
 },function(){
     $(".chao").css("display","none");
     setTimeout(function(){
         index++;
         if(index==5){
             index=4;
         }
          topv = index*topx ;
         $(".swiper-container").css({transform:"translate3d(0,-"+topv+"px,0)"});
         return topv;
     },10)

 })
    document.onkeydown=function(e){
        if(e.keyCode == 37 || e.keyCode ==38){
            index--;
            if(index==-1){
                index=0;
            }
            topv = index*topx ;
            $(".swiper-container").css({transform:"translate3d(0,-"+topv+"px,0)"});
            return topv;
        }else if(e.keyCode == 39 || e.keyCode ==40){
            index++;
            if(index==5){
                index=4;
            }
            topv = index*topx ;
            $(".swiper-container").css({transform:"translate3d(0,-"+topv+"px,0)"});
            return topv;
        }
    }
//拖拽---------------------------------

    touch.on('.swiper-slide','dragstart',function(){

    });
    touch.on('.swiper-slide','drag',function(e){

        $(".swiper-container").css({transform:"translate3d(0,-"+index*topx+"px,0)"})
    });
    touch.on('.swiper-slide','dragend',function(e){
        if(Math.abs(e.y)>500|| e.factor<5){
            if(e.direction=='down'){
                index--;
                if(index==-1){
                    index=0;
                }
                topv = index*topx ;
                $(".swiper-container").css({transform:"translate3d(0,-"+topv+"px,0)"});
            }else if(e.direction=='up'){
                index++;
                if(index==5){
                    index=4;
                }
                topv = index*topx ;
                $(".swiper-container").css({transform:"translate3d(0,-"+topv+"px,0)"});
            }
        }else{
           return ;
        }
    });
//字体变大
//    for(var i= 0 ; i < $(".skiller .col").length ;i++){
//        $($(".skiller .col")[0]).css({"transform":"translate3d(300px,0,0) rotateX()"})
    //}


    //work

    var gg = 0 ;
    $(".work").css("display","none");
    $(".worksome").css("display","block");
    $("#up").click(function(){
        $(".work").css("display","none");
        $(".worksome").css("display","block");
        gg++;
        if(gg==5){
            gg=0;
        }
        $(".worksome .somework").css("display","none");
        $($(".worksome .somework")[gg]).fadeIn();
    })
    $("#down").click(function(){
        $(".work").css("display","none");
        $(".worksome").css("display","block");
        gg--;
        if(gg==-1){
            gg=4;
        }
        $(".worksome .somework").css("display","none");
        $($(".worksome .somework")[gg]).fadeIn();
    })

    var pp=0;
    $(".tuopan").css("transition","margin .3s ease");
    $("#left").click(function(){
        pp++;
        if(pp==3){
            pp=0;
        }
        var ds = 200;
        $(".tuopan").css("margin-left",-pp*200+"px");
    })
    $("#right").click(function(){
        pp--;
        if(pp==-1){
            pp=2;
        }
        var ds = 200;
        $(".tuopan").css("margin-left",-pp*200+"px");
    })

    //------------------
    $(".top").click(function(){
        $(".top").removeClass("white");
        $(this).addClass("white");
        var js=$(this).index(".top");
        $(".masa").css("display","none");
        $($(".masa")[js]).fadeIn().css("color","#000");

    })


//work系列的影藏与显示；
    $(".work").css("display","none");
    $(".all").css("display","block");

$(document).mousedown(function(e){
    e.preventDefault();
    if(document.all) {
        if (event.button == 2){
            event.returnvalue=false;
        }
    }
})
    window.onmousedown = function () {
        if (window.event) {
            if (event.button == 2) {
                 return false;
            }
        }
    }




})

