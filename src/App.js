import React  from 'react';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import Layout from './comman/layout/Layout'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {  
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Layout />     
    </>
  );
}

export default App;
