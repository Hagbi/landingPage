$('#contact-form').on('submit', function () {
    $(this).find('p.text-danger').text('');
    var $name = $('#name');
    var $email = $('#email');
    var $phone = $('#phone');
    var $order = $('#order');
    var formvalid = true;
    var emailRegExp = /^(?!.*\.\.)[\w.\-#!$%&'*+\/=?^_`{}|~]{1,35}@[\w.\-]+\.[a-zA-Z]{2,15}$/;
    var phoneRegExp = /^0[2-9]\d{7,8}$/;
    var userdata = {
        name: $name.val().trim(),
        email: $email.val().trim(),
        phone: $phone.val().trim(),
        order: $order.val().trim()

    };

    if (userdata.name.length < 2 || userdata > 70) {
        $name.next().text(' * חובה לרשום שם');
        formvalid = false;
    }
    if (userdata.email.length < 6 || !emailRegExp.test(userdata.email)) {

        $email.next().text('* חובה לרשום אימייל');
        formvalid = false;
    }
    if (!phoneRegExp.test(userdata.phone)) {

        $phone.next().text(' * חובה לרשום טלפון');
        formvalid = false;
    }
    if (userdata.order == '') {
        $order.next().text('* בחר כמות מוזמנים');
        formvalid = false;
    }



    return false;
});