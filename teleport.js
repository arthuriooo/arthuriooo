$(document).ready(function(){  
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('head').append('<link rel="stylesheet" type="text/css" href="mobile.css">').append("<script type='text/javascript' src='mini.js'></script> ");
    }
    else {
        $('head').append('<link rel="stylesheet" type="text/css" href="style.css">').append("<script id='scr' type='text/javascript' src='script.js'></script>");
    }
    
});