import './App.css';

import ProductHeader from './views/header/ProductHeader';

import { Toaster } from 'react-hot-toast';

import PrivateRoutes from './routes/PrivateRoutes';


function App() {
 
  return (
    <>

      <Toaster />
      <ProductHeader />
      <PrivateRoutes />
      






    </>
  );
}

export default App;
