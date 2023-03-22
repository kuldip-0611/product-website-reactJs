import { toast } from "react-hot-toast";
import { messages } from "../constants/toast_messages";

import { encryptData } from "../utils/password_encryption";

let arr = [];

export const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    repeatpassword: "",
    isActive: false,
    mobile: "",
};

const AddataToLocal = (values) => {
    if (localStorage.getItem('loginData') === null) {
        arr = []
    }
    else {
        arr = JSON.parse(localStorage.getItem('loginData'))
    }

    if (arr.some(item => item.email === values.email)) {
        toast.error(messages.Registartion_User_exists)
    }
    else {
        arr.push(values)

        const encrypted_password = encryptData(values.password);
        values.password = encrypted_password;
        const encrypted_resetpassword = encryptData(values.repeatpassword);
        values.repeatpassword = encrypted_resetpassword;
        values.isActive = true;
        localStorage.setItem('loginData', JSON.stringify(arr));  
        localStorage.setItem("isLogin",true);
       


        toast.success(messages.Registration_Successfull)
    }
}
export default AddataToLocal



