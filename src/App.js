import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Services from "./components/Services";
import Workout from "./components/Workout";
import Glass from "./components/Glass";
import Bmi from "./components/Bmi";
import Trainer from "./components/Trainer";
import Shop from "./components/Shop";

function App() {
  return (
    <>

<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fitness' element={<FitnessNav />} />
        <Route path='/weightloss' element={<WeightNav />} />
        <Route path='/healthyeating' element={<EatingNav />} />
        <Route path='/healthymind' element={<HealthyNav />} />
        <Route path='/wellness' element={<WellnessNav />} />
        <Route path='/behindscenes' element={<BehindNav />} />
        <Route path='/healthyeating' element={<HealthyNav />} />
        <Route path='/engineering' element={<EngineeringNav />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/email' element={<Email/>} />
      </Routes>

    <Bmi/>
    <Trainer/>
    <Shop/>
    <Glass/>
    <Workout/>
    <Home/>
    <Services/>
    </>
  );
}

export default App;
