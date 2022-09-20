import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import Services from "./components/Services";
import Workout from "./components/Workout";
import Glass from "./components/Glass";
import Bmi from "./components/Bmi";
import Trainer from "./components/Trainer";
import Shop from "./components/Shop";
import Register from "./components/Register";

function App() {
  return (
    <>

    <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/bmi' element={<Bmi />} />
        <Route path='/trainer' element={<Trainer />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/glass' element={<Glass />} />
        <Route path='/workout' element={<Workout />} />
        <Route path='/services' element={<Services />} />
    </Routes>
    </>
  );
}

export default App;
