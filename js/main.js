٩$(document).ready(function(){

    $('.button-load-out').on('click',function(){
    
    $('video')[0].play();
    $('.loading').fadeOut(500);

    
    }); 

    //-------------------home--cards-sec-3------------------------
      $('.owl-carousel').owlCarousel({
      loop: true,              
      margin: 20,              
      nav: false,              
      dots: false,             
      autoplay: true,         
      autoplayTimeout: 700,
      responsive:{
          0:{ items:1},
          400:{items:3},       
          768:{ items:3 }, 
          900:{ items:4 },    
          1000:{ items:5 } ,    
            1380:{ items:7 }
        }
  });
   var owl = $(".owl-carousel");
    //-----------------home-sec-4--------------------------
     $(window).on('scroll', function() {
    
    let scrollTop = $(this).scrollTop();
    if($(window).width() > 991){
            if (scrollTop > 1000) {
                $('.hide-sec4 ').addClass('show-content');
                $('.hide-sec4 ').addClass('show-content');
            }
            if (scrollTop > 1100) {
                $('.right').addClass('show-right');
            }
            if (scrollTop > 1300) {
                $('.left').addClass('show-left');
            }


            if (scrollTop > 1800) {
                $('.hide-sec5 ').addClass('show-content');
                $('.hide-sec5 ').addClass('show-content');
            }
            if (scrollTop > 2000) {
                $('.sec5-left1').addClass('show-left');
                $('.sec5-right1').addClass('show-right');
            }
            if (scrollTop > 2500) {
                $('.sec5-left2').addClass('show-left');
                $('.sec5-right2').addClass('show-right');
            }
            if (scrollTop > 3000) {
                $('.sec5-left3').addClass('show-left');
                $('.sec5-right3').addClass('show-right');
            }


            if (scrollTop > 4000) {
                $('.hide-sec6 ').addClass('show-content');
                $('.hide-sec6 ').addClass('show-content');
            }
            if (scrollTop > 4200) {
                $('.sec6-left1').addClass('show-left');
                $('.sec6-right1').addClass('show-right');
            }
            if (scrollTop > 4300) {
                $('.sec6-left2').addClass('show-left');
                $('.sec6-right2').addClass('show-right');
            }

            if (scrollTop > 4800) {
                $('.hide-sec7 ').addClass('show-content');
                $('.hide-sec7 ').addClass('show-content');
            }
            if (scrollTop > 5000) {
                $('.sec7-left1').addClass('show-left');
                $('.sec7-right1').addClass('show-right');
            }
            if (scrollTop > 6000) {
                $('.sec8-left1').addClass('show-left');
                $('.sec8-right1').addClass('show-right');
            }
    }
     else if($(window).width() > 767){
            if (scrollTop > 1050) {
                $('.hide-sec4 ').addClass('show-content');
                $('.hide-sec4 ').addClass('show-content');
            }
            if (scrollTop > 1300) {
                $('.right').addClass('show-right');
            }
            if (scrollTop > 1700) {
                $('.left').addClass('show-left');
            }


            if (scrollTop > 2000) {
                $('.hide-sec5 ').addClass('show-content');
                $('.hide-sec5 ').addClass('show-content');
            }
            if (scrollTop > 2500) {
                $('.sec5-left1').addClass('show-left');
                $('.sec5-right1').addClass('show-right');
            }
            if (scrollTop > 3500) {
                $('.sec5-left2').addClass('show-left');
                $('.sec5-right2').addClass('show-right');
            }
            if (scrollTop > 4500) {
                $('.sec5-left3').addClass('show-left');
                $('.sec5-right3').addClass('show-right');
            }


            if (scrollTop > 5500) {
                $('.hide-sec6 ').addClass('show-content');
                $('.hide-sec6 ').addClass('show-content');
            }
            if (scrollTop > 6500) {
                $('.sec6-left1').addClass('show-left');
                $('.sec6-right1').addClass('show-right');
            }
            if (scrollTop > 7000) {
                $('.sec6-left2').addClass('show-left');
                $('.sec6-right2').addClass('show-right');
            }

            if (scrollTop > 7500) {
                $('.hide-sec7 ').addClass('show-content');
                $('.hide-sec7 ').addClass('show-content');
            }
            if (scrollTop > 8000) {
                $('.sec7-left1').addClass('show-left');
                $('.sec7-right1').addClass('show-right');
            }
            if (scrollTop > 9000) {
                $('.sec8-left1').addClass('show-left');
                $('.sec8-right1').addClass('show-right');
            }
    }
     else if($(window).width() < 768){
            if (scrollTop > 1050) {
                $('.hide-sec4 ').addClass('show-content');
                $('.hide-sec4 ').addClass('show-content');
            }
            if (scrollTop > 1300) {
                $('.right').addClass('show-right');
            }
            if (scrollTop > 2300) {
                $('.left').addClass('show-left');
            }


            if (scrollTop > 3200) {
                $('.hide-sec5 ').addClass('show-content');
                $('.hide-sec5 ').addClass('show-content');
            }
            if (scrollTop > 3500) {
                $('.sec5-left1').addClass('show-left');
                $('.sec5-right1').addClass('show-right');
            }
            if (scrollTop > 4500) {
                $('.sec5-left2').addClass('show-left');
                $('.sec5-right2').addClass('show-right');
            }
            if (scrollTop > 5500) {
                $('.sec5-left3').addClass('show-left');
                $('.sec5-right3').addClass('show-right');
            }


            if (scrollTop > 7000) {
                $('.hide-sec6 ').addClass('show-content');
                $('.hide-sec6 ').addClass('show-content');
            }
            if (scrollTop > 7500) {
                $('.sec6-left1').addClass('show-left');
                $('.sec6-right1').addClass('show-right');
            }
            if (scrollTop > 8000) {
                $('.sec6-left2').addClass('show-left');
                $('.sec6-right2').addClass('show-right');
            }

            if (scrollTop > 9000) {
                $('.hide-sec7 ').addClass('show-content');
                $('.hide-sec7 ').addClass('show-content');
            }
            if (scrollTop > 9500) {
                $('.sec7-left1').addClass('show-left');
                $('.sec7-right1').addClass('show-right');
            }
            if (scrollTop > 10500) {
                $('.sec8-left1').addClass('show-left');
                $('.sec8-right1').addClass('show-right');
            }
    }
    });
    //---------------home--sec-7-----------------
    $('.go-btn').on('click',function(){
        window.location.href='signUp.html';
    })
    //-------------------home--sec-8 ---------------------
    $('#close').on('click',function(){
        if($(this).text() === '✖'){
            $(this).html('<i class="fa fa-plus" aria-hidden="true"></i>')
        }else{
            $(this).text('✖')
        }
        $('.div-2').slideToggle(1000);
        

    });





   //----------------home-sec-6---------------

    $('.sec-6 .card .button-1').on('click', function(){

        $('#testimonialModal-1').fadeIn();
        
    });
    $('.sec-6 .card .button-2').on('click', function(){

        $('#testimonialModal-2').fadeIn();
    });
    $('.sec-6 .card .button-3').on('click', function(){

        $('#testimonialModal-3').fadeIn();
    });
    $('.sec-6 .card .button-4').on('click', function(){

        $('#testimonialModal-4').fadeIn();
    });

           
    // إغلاق المودال عند الضغط على X
    $('.close').on('click', function(){
        $('#testimonialModal').fadeOut();
    });

    // إغلاق المودال عند الضغط خارج المحتوى
    $(window).on('click', function(e){
        if($(e.target).is('#testimonialModal')){
            $('#testimonialModal').fadeOut();
        }
    });

    
});

$(window).on('load', function () {
    $('.fixed-secreen-home').fadeOut(500);
});



