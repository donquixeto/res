$(function() {
    $('#st1 .row .LPPILOT_Answer_Table > div').on('click', function() {
        $('.middleImage1').hide();
        $('.middleImage2').fadeIn(500);
        $('#st1').hide();
        $('#st2').fadeIn(500);
    })
    $('#st2 .row .LPPILOT_Answer_Table > div').on('click', function() {
        $('.middleImage2').hide();
        $('.middleImage3').fadeIn(500);
        $('#st2').hide();
        $('#st3').fadeIn(500);
    })
    $('#st3 .previous_question_button').on('click', function() {
        $('.middleImage3').hide();
        $('.middleImage2').fadeIn(500);
        $('#st3').hide();
        $('#st2').fadeIn(500);
    })
    $('#st2 .previous_question_button').on('click', function() {
        $('.middleImage2').hide();
        $('.middleImage1').fadeIn(500);
        $('#st2').hide();
        $('#st1').fadeIn(500);
    })
})