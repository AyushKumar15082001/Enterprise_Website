const form = document.querySelector('#login-form');
// const pass_reg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const pass_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phone_no = /^\+?([0-9]{2})\)?[-. ]?([^ ]{0,1})([0-9]{10})$/;
const regName = /^[a-zA-Z ]{2,30}$/;


let username = form.elements.namedItem("username");
let email = form.elements.namedItem("email");
let mobile = form.elements.namedItem("mobile");
let subject = form.elements.namedItem("subject");
let Alert = document.getElementById("alert");
let popup = document.getElementById("popup");

username.addEventListener('input', validate);
email.addEventListener('input', validate);
mobile.addEventListener('input', validate);

form.addEventListener('submit', function (e) {
    if (email.classList == "input-field invalid") {
        Alert.className += " active";
        Alert.innerHTML = "Incorrect Email Format";
    }
    else if (username.classList == "input-field invalid") {
        Alert.className += " active";
        Alert.innerHTML = "Incorrect Name Format";
    }
    else if (mobile.classList == "input-field invalid") {
        Alert.className += " active";
        Alert.innerHTML = "Incorrect Mobile no. Format";
    }
    else {
        var data = new FormData();
        data.append("name", username.value);
        data.append("email", email.value);
        data.append("mobile", mobile.value);
        data.append("subject", subject.value);
        data.append("message", form.elements.namedItem("requirement").value);
        data.append("g-recaptcha-response", form.elements.namedItem("g-recaptcha-response").value);
        data.append("date", new Date().toDateString());
        data.append("time", new Date().toLocaleTimeString());

        //Ajax request
        var xhr =new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState===4 && xhr.status===200){
                if(xhr.responseText === "1") 
                {
                    popup.classList.add("popActive");
                    grecaptcha.reset();
                }
                else if(xhr.responseText === "0") {
                    Alert.className += " active";
                    Alert.innerHTML = "Invalid Captcha, Please Try Again";
                }
                else {
                    Alert.className += " active";
                    Alert.innerHTML = xhr.responseText;
                }
            }
        }
        xhr.open("POST", "form.php",true); 
        xhr.send(data);
    }
    e.preventDefault();
    let timeout = setTimeout(function() {
        Alert.className = "alert";
    }, 5000);
});

function closePopup() {
    popup.classList.remove("popActive");
}
document.addEventListener("click", (e) => {
    let targetEl = e.target;     
    do {
        if (targetEl == popup) return;
        targetEl = targetEl.parentNode;
    } while (targetEl);
    if (popup.className == "popup popActive") {
        closePopup();
    }
});

function validate(e) {
    let line = document.querySelectorAll(".inputBox input");
    if (e.target.name == "email") {
        if (pass_reg.test(e.target.value)) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
            line[2].style.borderBottom = "3px solid #44E444";
        }
        else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
            line[2].style.borderBottom = "3px solid #FF0000";
        }
        if (email.value == "") {
            e.target.classList.remove('invalid');
            e.target.classList.remove('valid');
            line[2].style.borderBottom = "3px solid #eeeeee";
        }
    }

    if (e.target.name == "mobile") {
        if (phone_no.test(e.target.value)) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
            line[3].style.borderBottom = "3px solid #44E444";
        }
        else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
            line[3].style.borderBottom = "3px solid #FF0000";
        }
        if (mobile.value == "") {
            e.target.classList.remove('invalid');
            e.target.classList.remove('valid');
            line[3].style.borderBottom = "3px solid #eeeeee";
        }

    }

    if (e.target.name == "username") {
        if (regName.test(e.target.value)) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
            line[0].style.borderBottom = "3px solid #44E444";
        }
        else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
            line[0].style.borderBottom = "3px solid #FF0000";
        }
        if (username.value == "") {
            e.target.classList.remove('invalid');
            e.target.classList.remove('valid');
            line[0].style.borderBottom = "3px solid #eeeeee";
        }
        if (mobile.value == "+91 ") {
            mobile.classList.add('invalid');
            mobile.classList.remove('valid');
            line[3].style.borderBottom = "3px solid #FF0000";
        }
    }
}

//for automatic value in form
subject.addEventListener('click', value);
function value(e) {
    if (subject.value == "") {
        document.getElementById('sub').value = "Inquiry";
    }
}

mobile.addEventListener('click', value2);
function value2(e) {
    let line = document.querySelectorAll(".inputBox input");
    if (mobile.value == "") {
        document.getElementById('mobile').value = "+91 ";
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
        line[3].style.borderBottom = "3px solid #FF0000";
    }
}