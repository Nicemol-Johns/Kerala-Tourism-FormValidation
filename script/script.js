var email = document.getElementById("email");
var number = document.getElementById("number");
var password1 = document.getElementById("Password1");
var password2 = document.getElementById("Password2");
var password = document.getElementById("Password");
var popUp1 = document.getElementById("pop-up1");
var popUp2 = document.getElementById("pop-up2");
var popUp3 = document.getElementById("pop-up3");
var popUp4 = document.getElementById("pop-up4");

let isValid=true;
let pwdValid=true;

var stats = document.getElementById("progressStats");

var regexEmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
var regexNumber = /^[0-9]{3}[\.-\s]?[0-9]{3}[\.-\s]?[0-9]{4}$/;
var regexPwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z\d\.*_#-]{8,}$/;

function checkStrength(){

    console.log(`within check strength ${isValid}`)
    let regexCaps = /[A-Z]/g;
    let matchesCaps = password1.value.match(regexCaps);
    let countCaps = (matchesCaps || []).length;
    let regexSmall = /[a-z]/g;
    let matchesSmall = password1.value.match(regexSmall);
    let countSmall = (matchesSmall || []).length;
    let regexDigits = /[0-9]/g;
    let matchesDigits = password1.value.match(regexDigits);
    let countDigits = (matchesDigits || []).length;
    display();
    if (password1.value.length<8){
        stats.style.width="25%";
        stats.style.backgroundColor="red";
        stats.innerText="Poor";
        pwdValid=pwdValid&&false;
        console.log(`for length lesss than eight ${pwdValid}`);

    }
    else if(countCaps>=2 && countSmall>=2 && countDigits>=2 && password1.value.length>10 && regexPwd.test(password1.value)){
        pwdValid = true;
        stats.style.width="100%";
        stats.style.backgroundColor="green";
        stats.innerText="Strong";
        pwdValid=pwdValid&&true;
        console.log(`for strong password ${pwdValid}`);
    }
    else if(countCaps>=1 && countSmall>=1 && countDigits>=1 && password1.value.length>=8 && regexPwd.test(password1.value)){
        pwdValid = true;
        stats.style.width="50%";
        stats.style.backgroundColor="orange";
        stats.innerText="Medium";
        isValid=isValid&&true;
        console.log(`for medium password ${pwdValid}`);
    }
    else{
        pwdValid = true;
        console.log(`no case provided ${pwdValid}`);
    }
}

function display(){
    popUp3.style.display = "block";
}

function hide(){
    popUp3.style.display = "none";
}

function validate(){
    console.log(isValid);
    if(regexEmail.test(email.value)){
        isValid=isValid&&true;  
        console.log(`for correct email${isValid}`);
    }
    else if(email.value==""){
        email.style.border="3px solid red";
        popUp1.style.display = "block";
        popUp1.style.zIndex = "2";
        document.querySelector("label[for='emailError']").textContent="Field cannot be empty";
        isValid=isValid&&false;
        console.log(`email no input ${isValid}`);
    }
    else{
        email.style.border="3px solid red";
        popUp1.style.display = "block";
        popUp1.style.zIndex = "2";
        isValid=isValid&&false;
        console.log(`invalid input ${isValid}`);
    }

    if(regexNumber.test(number.value)){
        isValid=isValid&&true;
        console.log(`valid phone number ${isValid}`);
    }
    else if(number.value==""){
        number.style.border="3px solid red";
        popUp2.style.display = "block";
        popUp2.style.zIndex = "2";
        document.querySelector("label[for='numberError']").textContent="Field cannot be empty"
        isValid=isValid&&false;
        console.log(`no number ${isValid}`);
    }
    else{
        number.style.border="3px solid red";
        popUp2.style.display = "block";
        popUp2.style.zIndex = "2";
        isValid=isValid&&false;
        console.log(`wrong number format ${isValid}`);
    }

    if(password1.value==""){
        password1.style.border="3px solid red";
        popUp3.style.display = "block";
        popUp3.style.zIndex = "2";
        document.querySelector("label[for='passwordError']").textContent="Field cannot be empty"
        isValid=isValid&&false;
        console.log(`for password is empty ${isValid}`);
    }
    else{
        display();
        isValid=isValid&&pwdValid;
        console.log(`Password not empty ${isValid}`);
    }
    
    
    if(password2.value==""){
        password2.style.border="3px solid red";
        popUp4.style.display = "block";
        popUp4.style.zIndex = "2";
        document.querySelector("label[for='confirmPasswordError']").textContent="Field cannot be empty"
        isValid=isValid&&false; 
        console.log(`for empty confirm password ${isValid}`);  
    }
    else if(password1.value == password2.value){
        isValid = isValid&&true;
        console.log(`password match ${isValid}`);
    }
    else{
        password2.style.border="3px solid red";
        popUp4.style.display = "block";
        popUp4.style.zIndex = "2";
        document.querySelector("label[for='confirmPasswordError']").textContent="Passwords did not match"
        isValid=isValid&&false; 
        console.log(`no password match ${isValid}`);        
    }
    console.log(isValid);
    return isValid;
}