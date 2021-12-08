function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-info");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  window.onload = function(){
    let form = document.main_form;
    let info = document.getElementById("info");
    let name = form.name;
    let lastname = form.lastname;
    let surname = form.surname;
    let gender = form.gender;
    let date = form.birthday;
    let email = form.email;
    let password = form.password;
    let confirmPassword = form.confirmPassword;
  
    
    form.addEventListener("submit", formValidation);
    function formValidation(){
      let wrongFields = false;
      for(let i=0; i<form.length; i++){
        if(form[i].value == "" && form[i].type != 'radio'){
          form[i].classList.add("not-valid");
          wrongFields = true;
        }
        else
          form[i].classList.remove("not-valid"); 				
      }
      if(form.password.value != form.confirmPassword.value)
        {
          info.innerHTML = "Passwords is not same";
          event.preventDefault(); 
        }
      else
        info.innerHTML = "";
      if(!wrongFields)
        alert("Thanks for registration")
      else					 
        event.preventDefault();
          
    }
    for(let i=0; i<form.length; i++){
      form[i].onchange = function(){
        if(this.value !="")
          this.classList.remove("not-valid");
        
      }
    }
  }

  function Regist() {
 
    var result = true;
    var a = document.forms.RegistrationPage.email.value,
        b = document.forms.RegistrationPage.username.value,
        c = document.forms.RegistrationPage.password.value,
        d = document.forms.RegistrationPage.repassword.value;
        f = document.forms.RegistrationPage.phone.value;
    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var username_v = /^[a-zA-Z0-9_-]+$/;
    var password_v =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var repassword_v = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (a == null || a == "" || email_v.test(a) == false) {
        document.getElementById("email_message").innerHTML = "Email address empty or wrong format";
        result = false;
    }
  
    
    if (b == null || b == "" || username_v.test(b) == false) {
        document.getElementById("username_message").innerHTML = "Please enter the correct information";
        result = false;
    }
    if(c.length<8){
      document.getElementById("password_message").innerHTML = "Please enter the correct password";
      result=false;
    }
  
    if(d.length<8||c!==d){
      document.getElementById("repassword_message").innerHTML = "Please enter the correct password";
      result=false;
    }
    if (result == true) {
        users++;
        var user = {Email: a, Name: b, Password: c, enable: true, phone_number: f};
        localStorage.setItem(users, JSON.stringify(user));
        document.getElementById("logged").innerHTML = "";
        document.getElementById("loggeda").style = "display: none";
        document.getElementById("logout").innerHTML = "Log out "+ JSON.parse(localStorage.getItem(users)).Name;
        document.getElementById("logoutbut").style = "display: flex";
        document.getElementById("email_message").innerHTML = "";
        document.getElementById("repassword_message").innerHTML = "";
        document.getElementById("password_message").innerHTML = "";
        document.getElementById("username_message").innerHTML = "";
        document.getElementById("sign_in_inf").innerHTML = "You are logged";
        document.getElementById("sign_in_inf").style = "color: green";
    }
  }