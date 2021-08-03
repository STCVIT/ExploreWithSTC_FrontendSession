const form = document.getElementById("form");

form.addEventListener('submit',(e)=>{
    (e).preventDefault();
});
function validate(){
    let name = document.getElementById("name").value.trim(); 
    let phone = document.getElementById("phone_num").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("passcode").value.trim();
    localStorage.setItem("name",name);
    localStorage.setItem("phone",phone);
    localStorage.setItem("email",email);
    localStorage.setItem("password",pass);
    let flag=0; 
    name = name.toUpperCase();
    let len = name.length;
    let len2 = pass.length;
    let reg1=/^[A-Z][A-Z\s]*$/;
    let reg2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let reg3 = /^[7-9]{1}[0-9]{9}$/;
    //name should be only alphabets and of max length 30
    if(name != "" && phone!= "" && email != "" && pass!= "")
    {
    if(len<=30){
        if(reg1.test(name) === true){ 
            flag=flag+1;
        }
        else{
            alert("Enter a valid name");
        }
    }
    else{
        alert("Enter a valid name");
    }
    //validity of email
    if(reg2.test(email) == true){
        flag += 1;
    }
    else{
        alert("Enter valid email");
    }
    //validity of phone number
    if(reg3.test(phone) == true){
        flag += 1;
    }
    else{
        alert("Enter valid phone number");
    }
    //passsword validation
    if(len2>=8){
        flag += 1;
    }
    else{
        alert("Enter a password of 8 characters");
    }
}
    if(flag==4){
        alert("Form submitted successfully");
        window.location.href = "login.html";
    }
}

function login(){
    let email = localStorage.getItem("email");
    let passcode = localStorage.getItem("password");
    let email_pass = document.getElementById("email_add").value.trim();
    let password = document.getElementById("pass").value.trim();
    if( email_pass != "" && password != ""){
        if(email_pass == email && password == passcode){
            window.location.href = "payment.html";
        }
        else{
            alert("enter valid email ID/password");
        }
    }
}