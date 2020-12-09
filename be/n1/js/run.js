$(document).on('click','.next',function(e){e.preventDefault();$(this).parent().parent().hide().next().fadeIn();$('.carousel').carousel('next');});$(document).on('click','.run_loading',function(e){e.preventDefault();$('.up').slideUp('fast');$(this).parent().parent().hide().next().fadeIn();$('.step4 .loading').show();$('.carousel').carousel('next');$('.carousel').carousel('pause');loading_run_1('1500');loading_run_2('3000');loading_run_3('4500');loading_run_4('6000');});function loading_run_1(time_delay){timeoutID1=window.setTimeout(loading_1,time_delay);}
function loading_1(){$('.run_loading_1').hide();$('.run_loading_2, .li_run_loading_1').fadeIn();}
function loading_run_2(time_delay){timeoutID2=window.setTimeout(loading_2,time_delay);}
function loading_2(){$('.run_loading_2').hide();$('.run_loading_3, .li_run_loading_2').fadeIn();}
function loading_run_3(time_delay){timeoutID3=window.setTimeout(loading_3,time_delay);}
function loading_3(){$('.run_loading_3').hide();$('.run_loading_4, .li_run_loading_3').fadeIn();}
function loading_run_4(time_delay){timeoutID4=window.setTimeout(loading_4,time_delay);}
function loading_4(){$('.run_loading_4, .loading').hide();$('.li_run_loading_4, .run_loading_5, .show_end').fadeIn();window.scrollBy(0,document.body.scrollHeight);}