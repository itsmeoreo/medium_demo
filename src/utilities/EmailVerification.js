function VerifyEmailAddress(email) {
  var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if(email.length > 0) {
      if ((email !== "" && emailFormat.test(email))){
          return true;
      }
  }
  return false;
}

function VerifyAge(age) {
  return age>110 || age< 0;
}

function VerifyPhoneNumber(phoneNumber){
  var phoneNumberFormate= /^[789]\d{9}$/;
  if (phoneNumberFormate.test(phoneNumber)) {
    return true;
  }
  return false;
}

function VerifyPassword(pass){

}

function VerifyCon1(pass) {
  return pass.length>7 && pass.length<17;
}

function VerifyCon2(pass) {
  return (VerifyCon2_1(pass) && VerifyCon2_2(pass)) && (VerifyCon2_3(pass) && VerifyCon2_4(pass))
}

function VerifyCon2_1(pass) {
  return /[0-9]/.test(pass);
}

function VerifyCon2_2(pass) {
  return /[A-Z]/.test(pass);
}

function VerifyCon2_3(pass) {
  return /[a-z]/.test(pass);
}

function VerifyCon2_4(pass) {
  return /[@#$%&*_?~]/.test(pass);
}

function VerifyRePass(pass, repass) {
  return pass === repass;
}

export { VerifyAge, VerifyEmailAddress, VerifyPhoneNumber, VerifyPassword, VerifyCon1, VerifyCon2, VerifyCon2_1, VerifyCon2_2, VerifyCon2_3, VerifyCon2_4, VerifyRePass}