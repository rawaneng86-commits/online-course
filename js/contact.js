$(document).ready(function(){
   
    $('form').on('submit', function(e) {
        e.preventDefault();

        let allFilled = true; 

        $('.tex1, .tex2, .tex3, .tex4, .tex5, .tex6, .tex7').each(function() {
            if ($(this).val().trim() === '') {
                $(this).css('border', '1.5px solid red');
                $(this).attr('title', ' This field is required ');
                allFilled = false; 
            } else {
                $(this).css('border', '1.5px solid green');
                $(this).attr('title', 'Field filled successfully');
            }
        })

        //تحقق من الاسم
        let nameInput1 = $('.tex1');
        let nameInput2 = $('.tex2');
        let nameVal1 = nameInput1.val().trim();
        let nameVal2 = nameInput2.val().trim();
        let nameRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/; // يدعم عربي وإنجليزي
        
        if (nameVal1 !== '' && !nameRegex.test(nameVal1)) {
            nameInput1.css('border', '1.5px solid red');
            nameInput1.attr('title', 'Name must contain letters only');
        }
         if (nameVal2 !== '' && !nameRegex.test(nameVal2)) {
            nameInput2.css('border', '1.5px solid red');
            nameInput2.attr('title', 'Name must contain letters only');
        }
        // تحقق من الايميل
        let emailInput = $('.tex3');
        let emailVal = emailInput.val().trim();
        let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (emailVal !== '' && !emailRegex.test(emailVal)) {
            emailInput.css('border', '1.5px solid red');
            emailInput.attr('title', 'Please enter a valid Gmail address (example@gmail.com)');
           
        }

       let countryCode = $('#countryCode').val().trim(); // الكود مثل +970
        let phoneInput = $('.tex4');
        let phoneVal = phoneInput.val().trim(); // الرقم بدون الكود
        let phoneRegex = /^[0-9]{7,12}$/; // 7–12 أرقام

        // تحقق من اختيار كود الدولة
        if (countryCode === '') {
            $('#countryCode').css('border', '1.5px solid red');
            allFilled = false;
        } else {
            $('#countryCode').css('border', '1.5px solid green');
        }

        // تحقق من الرقم نفسه
        if (phoneVal !== '' && !phoneRegex.test(phoneVal)) {
            phoneInput.css('border', '1.5px solid red');
            phoneInput.attr('title', 'Phone number must contain digits only (7–12 digits)');
            allFilled = false;
        }


        // بعد الفحص
        if (allFilled) {
            alert('✅ All fields filled successfully!');
            
             this.submit();
        } else {
            alert('⚠️ Please fill in all required fields before submitting.');
        }
    });

    return;
});