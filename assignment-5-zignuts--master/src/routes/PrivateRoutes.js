import React from 'react';
import ProfileEdit from '../components/common/ProfileEdit';
import ChangePassword from '../components/common/ChangePassword';
import PrivateRoute from '../routes/PrivateRoute';
import DetailPage from '../components/common/DetailPage';
import ProductPage from '../components/common/ProductPage';
import { Routes, Route, Navigate} from 'react-router-dom';
import RegistrationForm from '../components/common/RegistrationForm';
import LoginForm from '../components/common/LoginFrom';

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Navigate to='/products' />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/change_password' element={<ChangePassword />} />
          <Route path='/editprofile' element={<ProfileEdit />} />
          <Route path='/products/:id' element={<DetailPage />} />
        </Route>
        <Route path='/login' element={<LoginForm />} />

        <Route path='/registration' element={<RegistrationForm />} />


      </Routes>
    </>
  )
}

export default PrivateRoutes
