// necessary imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// pages imports
import  HomePage  from './Pages/HomePage/Home';
import Feed from './Pages/HomePage/Feed';
import NotificationsPage from './Pages/Notifications/NotificationsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div style={{ backgroundColor: "rgb(64, 64, 70)", height: "200%",
                  minHeight: "100vh" ,margin:"0px",padding:"0px"}}>
    

        {/* <Feed/> */}
        {/* <HomePage/> */}
        <NotificationsPage/>

    </div>


  </React.StrictMode>
);

reportWebVitals();
