$(function () {
    const loginContainer = $('.login_registration_container');
    loginContainer.find('#registration-btn').click((e) => {
        let registrationFields = loginContainer.find('.registration-fileds');
        if (!registrationFields.is(":visible")) {
            e.preventDefault();
            registrationFields.show();
            return false;
        }
    })
});