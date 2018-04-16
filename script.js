$(document).ready(function(){
    
    $('#1').click(function(){
        $('#cat,#solid,#sea').css('display','none');
        $('#jeans').css('display','block');
        $('#education,#skills,#experience,#contacts').css('display','none');
        $('#personal').css('display','block');
        
        $('#l2,#l3,#l4,#l5').css('display','none');
        $('#l1').css('display','inline-block');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('border-color','#96251e');
        $('#name,#infa p,#arthuriooo p,.menus').css('color','#96251e');
        $('#personal').css('background-color','#96251e');
        $('#personal').css('color','white');
        $('.title').css('border-color','white');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('box-shadow','0 0 10px #96251e');
        
        $('#name,#infa p,#arthuriooo p').css('animation-name','shine1');
        
        $('#1').css({
            'background-color':'#96251e',
            'color':'white',
            'box-shadow':'0 0 15px #96251e'
        });
        $('#2,#3,#4,#5').css('background-color','#f5f3f4');
    
    });
    
    $('#2').click(function(){
        $('#cat,#solid,#jeans').css('display','none');
        $('#sea').css('display','block');
        $('#personal,#skills,#experience,#contacts').css('display','none');
        $('#education').css('display','block');
        
        $('#l1,#l3,#l4,#l5').css('display','none');
        $('#l2').css('display','inline-block');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('border-color','#1f4264');
        $('#name,#infa p,#arthuriooo p,.menus').css('color','#1f4264');
        $('#education').css('background-color','#1f4264');
        $('#education').css('color','white');
        $('.title,#education div').css('border-color','white');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('box-shadow','0 0 10px #1f4264');
        
        $('#name,#infa p,#arthuriooo p').css('animation-name','shine2');
        
        $('#2').css({
            'background-color':'#1f4264',
            'color':'white',
            'box-shadow':'0 0 15px #1f4264'
        });
        $('#1,#3,#4,#5').css('background-color','#f5f3f4');
    });
    
    $('#3').click(function(){
        $('#cat,#jeans,#sea').css('display','none');
        $('#solid').css('display','block');
        $('#personal,#education,#experience,#contacts').css('display','none');
        $('#skills').css('display','block');
        
        $('#l1,#l2,#l4,#l5').css('display','none');
        $('#l3').css('display','inline-block');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('border-color','#383a48');
        $('#name,#infa p,#arthuriooo p,.menus').css('color','#383a48');
        $('#skills').css('background-color','#383a48');
        $('#skills').css('color','white');
        $('.title,#skills p').css('border-color','white');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('box-shadow','0 0 10px #383a48');
        
        $('#name,#infa p,#arthuriooo p').css('animation-name','shine3');
        
        $('#3').css({
            'background-color':'#383a48',
            'color':'white',
            'box-shadow':'0 0 15px #383a48'
        });
        $('#1,#2,#4,#5').css('background-color','#f5f3f4');
    });
    
    $('#4').click(function(){
        $('#jeans,#solid,#sea').css('display','none');
        $('#cat').css('display','block');
        $('#personal,#skills,#education,#contacts').css('display','none');
        $('#experience').css('display','block');
        
        $('#l1,#l2,#l3,#l5').css('display','none');
        $('#l4').css('display','inline-block');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('border-color','#c75f64');
        $('#name,#infa p,#arthuriooo p,.menus').css('color','#c75f64');
        $('#experience').css('background-color','#c75f64');
        $('#experience').css('color','white');
        $('.title,#experience p').css('border-color','white');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('box-shadow','0 0 10px #c75f64');
        
        $('#name,#infa p,#arthuriooo p').css('animation-name','noshine');
        
        $('#4').css({
            'background-color':'#c75f64',
            'color':'white',
            'box-shadow':'0 0 15px #c75f64'
        });
        $('#1,#3,#2,#5').css('background-color','#f5f3f4');
    });
    
    $('#5').click(function(){
        $('#jeans,#solid,#sea').css('display','none');
        $('#cat').css('display','block');
        $('#personal,#skills,#education,#experience').css('display','none');
        $('#contacts').css('display','block');
        
        $('#l1,#l2,#l3,#l4').css('display','none');
        $('#l5').css('display','inline-block');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('border-color','#c75f64');
        $('#name,#infa p,#arthuriooo p,.menus').css('color','#c75f64');
        $('#contacts').css('background-color','#c75f64');
        $('#contacts').css('color','white');
        $('.title').css('border-color','white');
        
        $('#name,#infa p,#arthuriooo p,.menus').css('box-shadow','0 0 10px #c75f64');
        
        $('#name,#infa p,#arthuriooo p').css('animation-name','noshine');
        
        $('#5').css({
            'background-color':'#c75f64',
            'color':'white',
            'box-shadow':'0 0 15px #c75f64'
        });
        $('#1,#3,#4,#2').css('background-color','#f5f3f4');
    });
    
    
    
});