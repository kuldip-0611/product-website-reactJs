import CryptoJS from "crypto-js";
const SECRET_PASS = "jckjckj";
const DecryptData = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, SECRET_PASS);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data
};
export default DecryptData