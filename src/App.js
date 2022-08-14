import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import VehiculesPages from './components/VehiculesPages';
import  './style/style.scss';

function App() {
  const [dataVehicules, setDataVehicules] = useState([]);
  const fetchVehicules = async () => {
    const api = await fetch("http://localhost:5000/api/vehicules");
    const reponse = await api.json();
    setDataVehicules(reponse);
  };
  useEffect(() => {
    fetchVehicules();
  },[])
  return (
    <>
      <Routes>
          <Route path='/' element={<Accueil dataVehicules={dataVehicules}/>}/>
          <Route path='/vehicules/:id_voiture' element={<VehiculesPages dataVehicules={dataVehicules}/>}/>
      </Routes>
    </>
  )
}

export default App