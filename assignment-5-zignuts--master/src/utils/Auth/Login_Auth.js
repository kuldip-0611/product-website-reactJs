
import { toast } from "react-hot-toast";
import { messages } from "../../constants/toast_messages";
import DecryptData from "../Password_decryption";
export const Login_Auth = (values) => {

    /* Getting the data from local storage and converting it into an object. */
    const data = localStorage.getItem("loginData");
    const inobjData = JSON.parse(data);
   /* Setting the isActive property of all the objects in the array to false. */
    inobjData.map((item) => {
        item.isActive = false;
        return item
    });

    
    const ans = inobjData.filter((item) => {
        /* Decrypting the password and comparing it with the password entered by the user. */
        const decrypted_password = DecryptData(item.password);
        return (
            item.email === values.email && decrypted_password === values.password
        );
    });

    console.log(ans)

    /* This is setting the isActive property of the object to true. and add data to local storage */
    if (ans.length >= 1) {
        console.log(ans[0]);
        ans[0].isActive = true;
        console.log(ans[0]);
        toast.success(messages.Login_Success);
        localStorage.setItem("isLogin", true);
        localStorage.setItem('loginData', JSON.stringify(inobjData));
       
    } else {
        /* Showing the error message. */
        toast.error(messages.Login_Error);
    }
};