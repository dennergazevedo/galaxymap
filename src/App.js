import React from "react";

import Routes from './routes';

/* TOAST */
import { ToastContainer } from 'react-toastify';

/* STYLES */ 
import GlobalStyles from './styles/global';

function App(){
  return(
    <>
      <GlobalStyles />
      <Routes/>
      <ToastContainer autoClose={3000}/>
    </>
  );
}

export default App;