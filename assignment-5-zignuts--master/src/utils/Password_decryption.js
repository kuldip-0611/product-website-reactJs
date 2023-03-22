import CryptoJS from "crypto-js";
const SECRET_PASS = process.env.REACT_APP_PASS;
const DecryptData = (text) => {
    /* Decrypting the data. */
    const bytes = CryptoJS.AES.decrypt(text, SECRET_PASS);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data
};
export default DecryptData