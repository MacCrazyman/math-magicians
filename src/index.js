import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Quote from './Quote';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="math-magicians/" element={<Nav/>} >
      <Route index element={<Home/>}/>
      <Route path='çalculator' element={<App/>} />
      <Route path='quotes' element={<Quote/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
