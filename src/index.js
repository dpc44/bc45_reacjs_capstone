import React from 'react';
import ReactDOM from 'react-dom/client';
import {unstable_HistoryRouter as HistoryRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { createBrowserHistory } from 'history'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Register from './Pages/Register'
export const customNavigate = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={customNavigate}>

      <Routes>
        <Route path="" element={<HomeTemplate />}>
          
          <Route index element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

