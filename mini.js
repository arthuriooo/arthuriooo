

$(document).ready(function(){
    
    var $i = 0;
    
    $('#knopka').on("click", function(){
       
        $("#knopka")
            .animate({
            margin: '0',
            height: '2000px',
            width: '100%',
//            opacity: 0
        }, 800, function(){ });
        
        $("#knopka p")
            .animate({
            opacity: 0
        }, 800, function(){ });
        
        $("#whois").css('z-index','10');
        
        $("#whois").fadeIn(1500);
        
        $("#knopka").fadeOut(500);
        
    });
    
    $('.choose:first-child').on("click",function(){
        
        $('.choose').fadeOut();
        
        $('small').fadeIn();
        
        $('#whois')
            .animate({
            height: '100%',
        }, 800, function(){ });
        
        $('#whoare')
            .animate({
            width: 'auto',
            borderWidth: '10px'
        }, 800, function(){ });
        
        $('#who')
            .animate({
            fontSize: '60px'
        }, 400, function(){ });
        
        $('#who').html('Личная информация');
        
        $('#whois')
            .css('animation-name', 'but1')
            .css('animation-duration', '0.4s')
            .css('background-color','rgba(150, 37, 30, 0.9)');
        
        $('#prsnl')
            .animate({
            bottom: '+=80%'
        }, 1500, function(){ })
            .delay()
            .animate({
            borderRadius: '40px',
            left: '5%',
            width: '90%'
        }, 700, function(){ });
        
        $i=1;
        
    });
    
    $('.choose:nth-child(2)').on("click",function(){
        
        $('.choose').fadeOut();
        
        $('small').fadeIn();
        
        $('#whois')
            .animate({
            height: '100%',
        }, 800, function(){ });
        
        $('#whoare')
            .animate({
            width: 'auto',
            borderWidth: '10px'
        }, 800, function(){ });
        
        $('#who')
            .animate({
            fontSize: '60px'
        }, 400, function(){ });
        
        $('#who').html('Образование');
        
        $('#whois')
            .css('animation-name', 'but2')
            .css('animation-duration', '0.4s')
            .css('background-color','RGBA(255, 161, 83, 0.9)');
        
        $('#edctn')
            .animate({
            bottom: '+=80%'
        }, 1500, function(){ })
            .delay()
            .animate({
            borderRadius: '40px',
            left: '5%',
            width: '90%'
        }, 700, function(){ });
        
        $i=1;
        
    });
    
    $('.choose:nth-child(3)').on("click",function(){
        
        $('.choose').fadeOut();
        
        $('small').fadeIn();
        
        $('#whois')
            .animate({
            height: '100%',
        }, 800, function(){ });
        
        $('#whoare')
            .animate({
            width: 'auto',
            borderWidth: '10px'
        }, 800, function(){ });
        
        $('#who')
            .animate({
            fontSize: '60px'
        }, 400, function(){ });
        
        $('#who').html('Навыки');
        
        $('#whois')
            .css('animation-name', 'but3')
            .css('animation-duration', '0.4s')
            .css('background-color','RGBA(155, 241, 240, 0.9)');
        
        $('#skls')
            .animate({
            bottom: '+=80%'
        }, 1500, function(){ })
            .delay()
            .animate({
            borderRadius: '40px',
            left: '5%',
            width: '90%'
        }, 700, function(){ });
        
        $i=1;
        
    });
    
    $('.choose:nth-child(4)').on("click",function(){
        
        $('.choose').fadeOut();
        
        $('small').fadeIn();
        
        $('#whois')
            .animate({
            height: '100%',
        }, 800, function(){ });
        
        $('#whoare')
            .animate({
            width: 'auto',
            borderWidth: '10px'
        }, 800, function(){ });
        
        $('#who')
            .animate({
            fontSize: '60px'
        }, 400, function(){ });
        
        $('#who').html('Опыт Работы');
        
        $('#whois')
            .css('animation-name', 'but4')
            .css('animation-duration', '0.4s')
            .css('background-color','RGBA(97, 255, 154, 0.9)');
        
        $('#xprnc')
            .animate({
            bottom: '+=80%'
        }, 1500, function(){ })
            .delay()
            .animate({
            borderRadius: '40px',
            left: '5%',
            width: '90%'
        }, 700, function(){ });
        
        $i=1;
        
    });
    
    $('.choose:last-child').on("click",function(){
        
        $('.choose').fadeOut();
        
        $('small').fadeIn();
        
        $('#whois')
            .animate({
            height: '100%',
        }, 800, function(){ });
        
        $('#whoare')
            .animate({
            width: 'auto',
            borderWidth: '10px'
        }, 800, function(){ });
        
        $('#who')
            .animate({
            fontSize: '60px'
        }, 400, function(){ });
        
        $('#who').html('Контакты');
        
        $('#whois')
            .css('animation-name', 'but5')
            .css('animation-duration', '0.4s')
            .css('background-color','RGBA(236, 236, 167, 0.9)');
        
        $('#cntcts')
            .animate({
            bottom: '+=80%'
        }, 1500, function(){ })
            .delay()
            .animate({
            borderRadius: '40px',
            left: '5%',
            width: '90%'
        }, 700, function(){ });
        
        $i=1;
        
    });
    
    $('#who').on('click', function(){
        if ($i == 1) {
            $i=0;
            
            $('.nf')
            .animate({
                borderRadius: '0px',
                width: '100%',
                left: '0'
            }, 400, function(){ })
            .animate({
                bottom: '-90%'
            }, 900, function(){ });
            
            $('.choose').fadeIn();

            $('small').fadeOut();

            $('#whois')
                .animate({
                height: '100%',
            }, 800, function(){ });

            $('#whoare')
                .animate({
                width: '70%'
            }, 800, function(){ });

            $('#who')
                .animate({
                fontSize: '90px'
            }, 700, function(){ });

            $('#who').html('Артур<br>Игнатьев');

            $('#whois')
                .css('animation-name', 'but5')
                .css('animation-duration', '0.4s')
                .css('background-color','rgba(93, 22, 31, 0.9)')
                .css('animation-direction','reverse');
        }
    });
    
});