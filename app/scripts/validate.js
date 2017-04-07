$(function(){
    console.log(1);

    var selectFieldSelector = '[data-select]',
        submitSelector = '[data-submit]',
        emailInputSelector = '[data-email]',
        telephoneNumberSelector = '[data-telephone]',
        textFieldSelector = '[data-field]',
        errorClass = 'has-error',
        url = 'https://localhost:3000/';
    
    function sendData(url, data) {
        $.ajax({
            url: url,
            type: 'post', // performing a POST request
            data : data,
            dataType: 'json',
            success: function(data)
            {
                // etc...
                console.log('Success')
            }
        });
    }

    $(submitSelector).click(function (e) {
        e.preventDefault();
        var error = false,
            data = {
                theme: null,
                concerned: null,
                lot: null,
                yourtheme: null,
                title: null,
                firstName: null,
                lastName: null,
                birthday: null,
                phone: null,
                mail: null,
                street: null,
                city: null,
                postcode: null
            };

        $(selectFieldSelector).each(function(indx, element){
            var $elem = $(element),
                $value = $elem.find(":selected").val()
            if($elem.val() == null) {
                $elem.addClass(errorClass);
                error = true;
            } else {
                $elem.removeClass(errorClass);
                data[$elem.attr('name')] = $value;
            }
        });

        $(telephoneNumberSelector).each(function(indx, element){
            var $elem = $(element),
                $value = $elem.val();
            var regExpTlephoneNumberCheck = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/; // replace or change if need

            if(!regExpTlephoneNumberCheck.test($value)){
                $elem.addClass(errorClass);
                error = true;
            } else {
                $elem.removeClass(errorClass);
                data[$elem.attr('name')] = $value;
            }
        });

        $(emailInputSelector).each(function (indx, element) {
            var $elem = $(element);
            var regExpEmailCheck = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
            var $value = $elem.val();

            if(!regExpEmailCheck.test($value)){
                $elem.addClass(errorClass);
                error = true;
            } else {
                data[$elem.attr('name')] = $value;
                $elem.removeClass(errorClass);
            }
        });

        $(textFieldSelector).each(function (indx, element) {
            var $elem = $(element),
                $value = $elem.val();

            if(!$value){
                $elem.addClass(errorClass);
                error = true;
            } else {
                $elem.removeClass(errorClass);
                data[$elem.attr('name')] = $value;
            }
        });

        if(!error) {
            console.log(data);
            sendData(url, data);
        }
    });
});