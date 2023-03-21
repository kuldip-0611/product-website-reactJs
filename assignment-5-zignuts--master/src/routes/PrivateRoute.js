import React from 'react'
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
 

  let isLogin = localStorage.getItem("isLogin");
  let isActive = false;
  if (localStorage.getItem('isLogin') === null || localStorage.getItem('loginData') === null) {
    localStorage.setItem('isLogin', false);
    window.location.replace('http://localhost:3000/login')
  } else {
    isLogin = JSON.parse(localStorage.getItem('isLogin'))
    isActive = (JSON.parse(localStorage.getItem('loginData'))).some(item => item.isActive)
  }
  

  return (
    (isLogin && isActive) ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoute
