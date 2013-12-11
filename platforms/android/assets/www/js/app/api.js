$(document).ready(function(){
});
$(document).on('click', '#log_in form #sign-in', log_in);

function log_in(){

var name = $('#log_in form#login #user_login').val();
var password = $('#log_in form#login #user_password').val();

 $.ajax({
    url: "http://foodpal.com/rest_api/user/login.json",
    type: 'post',
    data: {username: name, password: password},
    dataType : 'json',
    error : function(data) {
   window.location.href = "#log_in";
            alert('Error');

    },
    success : function(data) {
       alert(JSON.parse(data));
        //success code
    }
});


}