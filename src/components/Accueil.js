import React from 'react';
import Header from './Header';
import Recherche from './part/Recherche';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import GridVehicules from './part/GridVehicules';


function Accueil() {
  return (
    <>
      <main className='main-accueil'>
        <Header/>
        <Recherche/>
        <section className='section-location-image'>
          <div className='flex-location'>
            <button className='location-boutton'>Prenez un(e) taxi / location <FontAwesomeIcon icon={faArrowRightLong} className='fleche-droite'/></button>
          </div>
        </section>
        <GridVehicules/>
      </main>
    </>
  )
}

export default Accueil