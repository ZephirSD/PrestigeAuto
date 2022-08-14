import React from 'react';
import Header from './Header';
import Recherche from './part/Recherche';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import GridVehicules from './part/GridVehicules';


function Accueil({dataVehicules, dataCategories}) {
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
        <GridVehicules dataVehicules={dataVehicules} dataCategories={dataCategories}/>
      </main>
    </>
  )
}

export default Accueil