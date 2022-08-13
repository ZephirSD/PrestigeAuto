import React, { useEffect, useState } from 'react';
import Header from './Header';
import Recherche from './part/Recherche';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import GridVehicules from './part/GridVehicules';


function Accueil() {
  const [dataVehicules, setDataVehicules] = useState([]);
  const fetchVehicules = async () => {
    const api = await fetch("http://localhost:5000/api/vehicules");
    const reponse = await api.json();
    setDataVehicules(reponse);
  };
  useEffect(()=>{
    fetchVehicules();
  },[])
  return (
    <>
      <main className='main-accueil'>
        <Header/>
        <Recherche dataVehicules={dataVehicules}/>
        <section className='section-location-image'>
          <div className='flex-location'>
            <button className='location-boutton'>Prenez un(e) taxi / location <FontAwesomeIcon icon={faArrowRightLong} className='fleche-droite'/></button>
          </div>
        </section>
        <GridVehicules dataVehicules={dataVehicules}/>
      </main>
    </>
  )
}

export default Accueil