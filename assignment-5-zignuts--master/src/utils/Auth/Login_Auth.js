
import { toast } from "react-hot-toast";
import { messages } from "../../constants/toast_messages";
import DecryptData from "../Password_decryption";
export const Login_Auth = (values) => {
    let isUser = false;

    const data = localStorage.getItem("loginData");
    const inobjData = JSON.parse(data);
    /* This is setting the isActive property to false for all the users. */
    inobjData.map((item) => {
        item.isActive = false;
        return item
    });


    /* Filtering the data from the local storage and comparing the email and password with the user
    input. */
    const ans = inobjData.filter((item) => {
        const decrypted_password = DecryptData(item.password);
        return (
            item.email === values.email && decrypted_password === values.password
        );
    });



    /* This is setting the isActive property to true for the user that is logged in. */
    if (ans.length >= 1) {
        console.log(ans[0]);
        ans[0].isActive = true;
        console.log(ans[0]);
        toast.success(messages.Login_Success);
        isUser = true;
        localStorage.setItem("isLogin", true);
        localStorage.setItem('loginData', JSON.stringify(inobjData));

    } else {
        toast.error(messages.Login_Error);
        isUser = false
    }
    return isUser;
};
