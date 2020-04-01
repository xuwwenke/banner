$(function(){
    var html=$(''
        +'<div class="slider" id="slider">'
            +'<div class="slide"><img src="img/b5.png" alt=""></div>'
            +'<div class="slide"><img src="img/b1.png" alt=""></div>'
            +'<div class="slide"><img src="img/b2.png" alt=""></div>'
            +'<div class="slide"><img src="img/b3.png" alt=""></div>'
            +'<div class="slide"><img src="img/b4.png" alt=""></div>'
            +'<div class="slide"><img src="img/b5.png" alt=""></div>'
            +'<div class="slide"><img src="img/b1.png" alt=""></div>'
        +'</div>'
        +'<span id="left"><</span>'
        +'<span id="right">></span>'
        +'<ul class="nav" id="navs">'
            +'<li>1</li>'
            +'<li>2</li>'
            +'<li>3</li>'
            +'<li>4</li>'
            +'<li>5</li>'
        +'</ul>'
    );

    var $banner=$(html);
    $('.box').append($banner)
    var timer,time=2000
        $slide=$banner.find('.slide'),
        $li=$banner.find('li'),
        index=0,
        width=$('.slide').width(),
        len=$slide.length-2;

    $li.eq(index).attr('class','active');
    function change(){
        $('#slider').animate({left:'-='+width},500,function(){
            index++;
            if(index==len){
                $("#slider").css({left:-width});
                index=0;
            }
            $li.attr('class','');
            $li.eq(index).attr('class','active');
        })
    }
    function mover(){
        $('#slider').animate({left:'+='+width},500,function(){
            if(index==0){
                index=len;
                $("#slider").css({left:-width*len});
            }
            index--;
            $li.attr('class','');
            $li.eq(index).attr('class','active');
        })
    }
    

    $('#slider,#left,#right,li').mouseover(function(){
        $('span').css({opacity:0.5})
        clearInterval(timer);
    }).mouseout(function(){
        $('span').css({opacity:0})
        timer=setInterval(function(){
            change()
        },2000)
    })
    $('#left').click(function(){
        // console.log('左')
        mover();
    })
    $('#right').click(function(){
        // console.log('右')
        change();
    })
    $li.click(function(){
        index=$(this).index();
        $("#slider").animate({left:-width*(index+1)},500,function(){
            $li.attr('class','');
            $li.eq(index).attr('class','active');
        })
    })
    timer=setInterval(function(){
        change()
    },time)
})