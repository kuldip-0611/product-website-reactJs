import './App.css';
import LoginForm from './components/common/LoginFrom';
import ProductHeader from './components/ProductHeader';
import ProductPage from './components/common/ProductPage';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import RegistrationForm from './components/common/RegistrationForm';
import { Toaster } from 'react-hot-toast';
import ProfileEdit from './components/common/ProfileEdit';
import ChangePassword from './components/common/ChangePassword';
import PrivateRoute from './routes/PrivateRoute';
import DetailPage from './components/common/DetailPage';
import { useEffect } from 'react';

function App() {
 
  return (
    <>

      <Toaster />
      <ProductHeader />
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
  );
}

export default App;
