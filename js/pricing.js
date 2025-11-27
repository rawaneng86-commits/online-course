$(document).ready(function(){

 
    //-------------------home--sec-8 ---------------------
    $('#close').on('click',function(){
        if($(this).text() === '✖'){
            $(this).html('<i class="fa fa-plus" aria-hidden="true"></i>')
        }else{
            $(this).text('✖')
        }
        $('.q1').slideToggle(1000);
        

    });
    $('#open-q2').on('click',function(){
        if($(this).html() === '<i class="fa fa-plus" aria-hidden="true"></i>'){
            $(this).text('✖')
        }else{
            $(this).html('<i class="fa fa-plus" aria-hidden="true"></i>')
        }
        $('.q2').slideToggle(1000);
        

    });
    $('#open-q3').on('click',function(){
        if($(this).html() === '<i class="fa fa-plus" aria-hidden="true"></i>'){
            $(this).text('✖')
        }else{
            $(this).html('<i class="fa fa-plus" aria-hidden="true"></i>')
        }
        $('.q3').slideToggle(1000);
        

    });
    $('#open-q4').on('click',function(){
        if($(this).html() === '<i class="fa fa-plus" aria-hidden="true"></i>'){
            $(this).text('✖')
        }else{
            $(this).html('<i class="fa fa-plus" aria-hidden="true"></i>')
        }
        $('.q4').slideToggle(1000);
        

    });
    $('#open-q5').on('click',function(){
        if($(this).html() === '<i class="fa fa-plus" aria-hidden="true"></i>'){
            $(this).text('✖')
        }else{
            $(this).html('<i class="fa fa-plus" aria-hidden="true"></i>')
        }
        $('.q5').slideToggle(1000);
        

    });

//our pricing
  $('#btn-monthly').on('click', function() {
    $('#btn-yearly').removeClass('active');
    $(this).addClass('active');
    $('.yearly').fadeOut(500, function() {
    $('.monthly').fadeIn(500).css('display','flex');
    })
  });
   $('#btn-yearly').on('click', function() {
    $('#btn-monthly').removeClass('active');
    $(this).addClass('active');
    $('.monthly').fadeOut(500, function() {
    $('.yearly').fadeIn(500).css('display','flex');
    })
  });




    // فتح المودال المناسب حسب data-modal
    $('.go-btn').on('click',function() {
        var modalID = $(this).data('modal');
        $(modalID).fadeIn();
    });

    // إغلاق المودال عند الضغط على ×
    $('.close').on('click',function() {
        $('.modal').fadeOut();
    });

    // إغلاق المودال عند الضغط خارج المحتوى
    $(window).on('click',function(e) {
        if ($(e.target).is('.modal')) {
            $('.modal').fadeOut();
        }
    });

    //إرسال النموذج
    $('form').on('submit',function(e){
        e.preventDefault();
        alert('Form submitted successfully! (Demo)');
        $('.modal').fadeOut();
    });

  
});





