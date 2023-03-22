import { toast } from "react-hot-toast";
import { messages } from "../../constants/toast_messages";

export const getProfile_data = () => {
    /* Getting the data from local storage and converting it into an object. */
    const data = localStorage.getItem("loginData");
    const objData = JSON.parse(data);
    /* Filtering the data from the local storage and returning the active data. */

    const ActiveData = objData.filter((item) => item.isActive);

    console.log(ActiveData[0].fname);

    return ActiveData
}

export const Update_profile_data = (values) => {
    const data = localStorage.getItem('loginData');
    const objdata = JSON.parse(data);

   /* Filtering the data from the local storage and returning the active data. */
    const ActiveData = objdata.filter(item => item.isActive);
    console.log("obj data", objdata);
    console.log("active data", ActiveData);

    /* Checking if the email is already in use. */
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
       /* Updating the data in the local storage. */
        ActiveData[0].fname = values.fname;
        ActiveData[0].lname = values.lname;
        ActiveData[0].email = values.email;
        ActiveData[0].mobile = values.mobile;
        toast.success(messages.Profile_Updated_Success)

    }



    localStorage.setItem("loginData", JSON.stringify(objdata));


}