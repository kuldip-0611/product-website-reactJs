import CryptoJS from 'crypto-js';
const SECRET_PASS = "jckjckj";
export const encryptData = (password) => {
 
    const data = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      SECRET_PASS
    ).toString();
 console.log(data)
    return data
  };