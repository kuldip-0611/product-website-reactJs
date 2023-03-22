
import { toast } from "react-hot-toast";
import { messages } from "../../constants/toast_messages";
import DecryptData from "../Password_decryption";
export const Login_Auth = (values) => {

    const data = localStorage.getItem("loginData");
    const inobjData = JSON.parse(data);
    inobjData.map((item) => {
        item.isActive = false;
        return item
    });

    
    const ans = inobjData.filter((item) => {
        const decrypted_password = DecryptData(item.password);
        return (
            item.email === values.email && decrypted_password === values.password
        );
    });

    console.log(ans)

    if (ans.length >= 1) {
        console.log(ans[0]);
        ans[0].isActive = true;
        console.log(ans[0]);
        toast.success(messages.Login_Success);
        localStorage.setItem("isLogin", true);
        localStorage.setItem('loginData', JSON.stringify(inobjData));
       
    } else {
        toast.error(messages.Login_Error);
    }
};