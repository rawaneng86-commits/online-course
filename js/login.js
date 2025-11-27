$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
      loop: true,              
      margin: 20,             
      nav: true,             
      dots: false,            
      autoplay: true,         
      autoplayTimeout: 3000,   
      navText: [
          '<i class="fa fa-arrow-left"></i>',  // سهم اليسار
          '<i class="fa fa-arrow-right"></i>'  // سهم اليمين
        ],
      responsive:{
          0:{ items:1 },      
          768:{ items:1 },     
          1000:{ items:1 }     
      }
  });
   var owl = $(".owl-carousel");



   /*--------login-valid------ */
   
   $('.login-sec form').on('submit',function(e){
    e.preventDefault();
 

    let isValid=true;
    $('.error-msg').remove();


    //التحقق من الايميل 
    let emailInput=$('.email');
    let emailVal=emailInput.val().trim();
    let emailRegex=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if(emailVal === '' ){
      showError(emailInput, '⚠️ Please enter your email');
      isValid=false;
    }else if(emailVal !== '' &&!emailRegex.test(emailVal)) {
       showError(emailInput, '❌ Email must be valid (example@gmail.com)');
       isValid=false;
    }else{
      setValid(emailInput);
    }
  
 
    //التحقق من الباسوورد
    let passInput=$('.pass');
    let passVal=passInput.val().trim();
    let passRegex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    $('.error-msg-pass').remove(); // احذف الرسائل السابقة

    if(passVal === '' ){
      passInput.css('border','1.5px solid red');
      $('.input-group-pass').after(`<small class='error-msg-pass'>⚠️ Please enter your password</small>`);

      isValid=false;
    }else if(passVal !== '' && !passRegex.test(passVal)) {
       passInput.css('border','1.5px solid red');
      $('.input-group-pass').after(`<small class='error-msg-pass'>❌ Password must contain at least one letter, one number, and be 8 characters long</small>`);
       isValid=false;
    }else{
      setValid(passInput);
    }


    if(isValid){
      alert('✅ Logged in successfully!');
      window.location.href='index.html';
    }

   });

   function showError(input,message) {
    input.css('border','1.5px solid red');
    input.after(`<small class='error-msg'>${message}</small>`);
    
   }
   function setValid(input) {
    input.css('border','1.5px solid green')
   }





       //اظهار و اخفاء الباسوورد
    $('.togglePass').on('click', function() {

        let input = $('.pass');

        if (input.attr('type') === 'password') {
            input.attr('type', 'text'); 
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            input.attr('type', 'password'); 
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        }
    });
})
$(window).on('load',function(){
    $('.fixed-secreen-home').delay(2000).fadeOut(2000);
  })