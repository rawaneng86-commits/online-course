$(document).ready(function(){
    $('#resetForm').on('submit', function(e){
    e.preventDefault();
    
    let emailInput = $('.email');
    let emailVal = emailInput.val().trim();
    let emailRegex=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    $('.error-msg').hide();
    $('.success-msg').hide();


    if(emailVal !== '' && emailRegex.test(emailVal)){
        emailInput.css('border', '1.5px solid green');
        $('.success-msg').fadeIn();
    }else {
        emailInput.css('border', '1.5px solid red');
        $('.error-msg').text('❌ Please enter a valid email address').fadeIn();
    }
    });

});