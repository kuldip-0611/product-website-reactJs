import './App.css';

import ProductHeader from './components/ProductHeader';

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
