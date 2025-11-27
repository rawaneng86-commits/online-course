$(document).ready(function(){


 
const modeBtn = $('.mode-btn');
    const body = $('body');
    const studentGif = $('.student-gif');

    // عند التحميل، افحص إن كان المستخدم مفعّل الوضع الليلي مسبقًا
  

    if (localStorage.getItem('theme') === 'dark') {
    body.addClass('dark');
    studentGif.attr('src','images/ezgif-1f2a8def8c2a31dc.gif');
    } else {
    studentGif.attr('src','images/61fa30e18114819a29576391_online-ads.gif');
    }

    // عند الضغط على الزر
    modeBtn.on('click', function () {
        body.toggleClass('dark');

        if (body.hasClass('dark')) {
            localStorage.setItem('theme', 'dark');
            studentGif.attr('display','images/ezgif-1f2a8def8c2a31dc.gif')
        } else {
            localStorage.setItem('theme', 'light');
              studentGif.attr('src','images/61fa30e18114819a29576391_online-ads.gif')
        }

    });


});


