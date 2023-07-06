import logo from './logo.svg';
// import './App.css';
import './test1.css';
import React, { useEffect, useState } from 'react';

import ListofUsers from './Components/ListofUsers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleUser from './Components/SingleUser'
function App() {
return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<ListofUsers/>}></Route>
    <Route path="/Singleuser" element={<SingleUser/>}></Route>
  </Routes>
</BrowserRouter>
      );

}

export default App;
