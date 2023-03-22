
export const Handle_Logout = () => {
 /* Setting the value of isLogin to false. */
  localStorage.setItem("isLogin", false);
  
  /* Getting the data from local storage and parsing it into an object. */
  const data = localStorage.getItem("loginData");
  const inobjData = JSON.parse(data);

  /* Setting the value of isActive to false. */
  const newData = inobjData.map((item) => {
    if (item.isActive === true) {
      item.isActive = false

    }
    return item


  });
  localStorage.setItem('loginData', JSON.stringify(newData))
}