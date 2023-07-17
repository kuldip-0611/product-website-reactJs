import CryptoJS from 'crypto-js';
const SECRET_PASS = 'process.env.REACT_APP_PASS';
export const encryptData = (password) => {
 /* Encrypting the data. */
 
    const data = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      SECRET_PASS
    ).toString();
 console.log(data)
    return data
  };