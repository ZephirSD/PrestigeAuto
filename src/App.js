import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import VehiculesPages from './components/VehiculesPages';
import  './style/style.scss';

function App() {
  const [dataVehicules, setDataVehicules] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const fetchVehicules = async () => {
    const api = await fetch("http://localhost:5000/api/vehicules");
    const reponse = await api.json();
    setDataVehicules(reponse);
  };
  const fetchCategories = async () => {
    const api = await fetch("http://localhost:5000/api/categories");
    const reponse = await api.json();
    setDataCategories(reponse);
  };
  useEffect(() => {
    fetchVehicules();
    fetchCategories();
  },[])
  return (
    <>
      <Routes>
          <Route path='/' element={<Accueil dataVehicules={dataVehicules} dataCategories={dataCategories}/>}/>
          <Route path='/vehicules/:id_voiture' element={<VehiculesPages dataVehicules={dataVehicules} dataCategories={dataCategories}/>}/>
      </Routes>
    </>
  )
}

export default App