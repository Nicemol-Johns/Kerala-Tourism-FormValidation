var email_Login = document.getElementById("email_Login");
var password_login = document.getElementById("Password_Login");
var popupEmail = document.getElementById("popupEmail");
var popupPwd = document.getElementById("popupPwd");
console.log(1);

let isValidLogin=true;

var regexEmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
var regexPwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z\d\.*_#-]{8,}$/;

// function display(){
//     popUp3.style.display = "block";
// }

function validation(){
    console.log(isValidLogin);
    if(email_Login.value==""){
        email_Login.style.border="3px solid red";
        popupEmail.style.display = "block";
        popupEmail.style.zIndex = "2";
        document.querySelector("label[for='emailLoginError']").textContent="Field cannot be empty";
        isValidLogin=isValidLogin&&false;
        console.log(`email_Login no input ${isValidLogin}`);
    }
    else if(regexEmail.test(email_Login.value)){
        isValidLogin=isValidLogin&&true;  
        console.log(`for correct email_Login ${isValidLogin}`);
    }
    else{
        email_Login.style.border="3px solid red";
        popupEmail.style.display = "block";
        popupEmail.style.zIndex = "2";
        isValidLogin=isValidLogin&&false;
        console.log(`invalid input ${isValidLogin}`);
    }

    if (regexPwd.test(password_login.value)){
        popupPwd.style.display = "block";
        popupPwd.style.zIndex = "2";
        isValidLogin=isValidLogin&&true;
    }
    else{
        password_login.style.border="3px solid red";
        popupPwd.style.display = "block";
        popupPwd.style.zIndex = "2";
        document.querySelector("label[for='passwordLoginError']").textContent="Invalid input";
        isValidLogin=isValidLogin&&false;
        console.log(`for password is empty ${isValidLogin}`);
    }
    console.log(isValidLogin);
    return isValidLogin;
}