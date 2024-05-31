var captchadisplay = document.getElementById("captcha")

function generateCaptcha() {
    var captcha = '';
    var captchaLength = 6; // Length of the CAPTCHA string
  
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
  
    for (var i = 0; i < captchaLength; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * charactersLength));
      
    }
    return captcha  
}

captchadisplay.innerText = generateCaptcha();

var enteredcaptcha = document.getElementById("captcha-verify")
var verify = document.getElementById("verify-btn")

verify.addEventListener("click",function(){
    var captchacheck = captchadisplay.innerText
    //console.log(captchacheck)
    var usercaptcha = enteredcaptcha.value
    //console.log(usercaptcha)
    if(captchacheck == usercaptcha){
        alert("Captcha Verified Successfully!...")
    }else{
        alert("Captcha Verified Failed. Please Try Again...")
    }
    
})
