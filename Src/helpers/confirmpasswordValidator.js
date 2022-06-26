
import ResetPasswordScreen from "../screens/ResetPassword"
const password= ResetPasswordScreen.password;

export function confirmpasswordValidator(confirmpassword,password) {
    if (!confirmpassword) return "Password can't be empty."
    if (confirmpassword.length < 8) return 'Password ATLEAST 8 characters long.'
    if(password!=confirmpassword) return "Confirm password not match with New password"
    return ''
  }