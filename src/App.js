import React from "react";

import Routes from './routes';

/* TOAST */
import { ToastContainer } from 'react-toastify';

/* STYLES */ 
import GlobalStyles from './styles/global';

// CONTEXT
import { UserProvider } from './context';

function App(){
  return(
    <>
      <GlobalStyles />
      <UserProvider>
        <Routes/>
      </UserProvider>
      <ToastContainer autoClose={3000}/>
    </>
  );
}

export default App;