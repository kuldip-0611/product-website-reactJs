

export const Handle_Logout = () => {
  localStorage.setItem("isLogin", false);
  const data = localStorage.getItem("loginData");
  const inobjData = JSON.parse(data);

  const newData = inobjData.map((item) => {
    if (item.isActive === true) {
      item.isActive = false

    }
    return item


  });
  localStorage.setItem('loginData', JSON.stringify(newData))
}