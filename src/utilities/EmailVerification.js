function VerifyEmailAddress(email) {
  var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if(email.length > 0) {
      if ((email !== "" && emailFormat.test(email))){
          return true;
      }
  }
  return false;
}

function VerifyPhoneNumber(phoneNumber){

}

function VerifyPassword(pass){

}

function VerifyCon1(pass) {
  
}

function VerifyCon2(pass) {
  
}

function VerifyCon2_1(pass) {
  
}

function VerifyCon2_2(pass) {
  
}

function VerifyCon2_3(pass) {
  
}

function VerifyCon2_4(pass) {
  
}

export {VerifyEmailAddress, VerifyPhoneNumber, VerifyPassword, VerifyCon1, VerifyCon2, VerifyCon2_1, VerifyCon2_2, VerifyCon2_3, VerifyCon2_4}