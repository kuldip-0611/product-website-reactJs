import DecryptData from "../utils/Password_decryption";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export const Login_Check = (values) => {
  const navigate = useNavigate();
  /* Getting the data from local storage and converting it into an object. */
  const data = localStorage.getItem("loginData");
  const inobjData = JSON.parse(data);
 


    inobjData.map((item) => {

      /* This is checking if the email and password are correct. */
      if (item.email === values.email) {
        const decrypted_password = DecryptData(item.password);
        if (decrypted_password === values.password) {
          toast.success("login successfull");
          navigate("/products");
        }
      }
      else {
        toast.error("invalid Email or Password");

      }
      return item;
    });
  

}