import { toast } from "react-hot-toast";
import { messages } from "../../constants/messages";
import DecryptData from "../Password_decryption";
import { encryptData } from "../password_encryption";

export const ChangePassword_initialState = {
    current_password: "Kuldip@0611",
    edit_password: "Desai#0611",
    confirm_edit_password: "Desai#0611",
  };

export const Change_Password = (values) =>{
    console.log(values);

    const data = localStorage.getItem("loginData");
    const inobjData = JSON.parse(data);

    const ActiveUser = inobjData.find((item) => item.isActive);
    if (DecryptData(ActiveUser.password) === values.edit_password) {
      toast.error(messages.Passowrd_Same);
    } else if (DecryptData(ActiveUser.password) !== values.current_password) {
      toast.error(messages.Password_Invalid);
    } else {
      ActiveUser.password = encryptData(values.edit_password);
      toast.success(messages. Passwod_Updated);
      const newLoginData = inobjData.map((item) => {
        if (item.isActive) {
          item = ActiveUser;
        }
        return item;
      });
      localStorage.setItem("loginData", JSON.stringify(newLoginData));
    }
}