import { toast } from "react-hot-toast";
import { messages } from "../../constants/toast_messages";

export const getProfile_data = () => {
    const data = localStorage.getItem("loginData");
    const objData = JSON.parse(data);

    const ActiveData = objData.filter((item) => item.isActive);

    console.log(ActiveData[0].fname);

    return ActiveData
}

export const Update_profile_data = (values) => {
    const data = localStorage.getItem('loginData');
    const objdata = JSON.parse(data);

    const ActiveData = objdata.filter(item => item.isActive);
    console.log("obj data", objdata);
    console.log("active data", ActiveData);

    let counter = 0;

    objdata.map(item => {
        if (values.email === item.email) {
            if (values.email === ActiveData[0].email) {
                counter = 0;
            }
            else {
                counter++
            }

        }
        return item
    })
    console.log(counter);

    if (counter >= 1) {
        toast.error(messages.Profile_Update_Mail_exists)
    }
    else {
        ActiveData[0].fname = values.fname;
        ActiveData[0].lname = values.lname;
        ActiveData[0].email = values.email;
        ActiveData[0].mobile = values.mobile;
        toast.success(messages.Profile_Updated_Success)

    }



    localStorage.setItem("loginData", JSON.stringify(objdata));


}