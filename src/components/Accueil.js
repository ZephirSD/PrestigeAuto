import React from 'react';
import Header from './Header';
import Recherche from './part/Recherche';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import GridVehicules from './part/GridVehicules';
import { Link } from 'react-router-dom';


function Accueil({dataVehicules, dataCategories}) {
  return (
    <>
      <main className='main-accueil'>
        <Header/>
        <Recherche dataVehicules={dataVehicules}/>
        <section className='section-location-image'>
          <div className='flex-location'>
            <Link to={'/location'} style={{textDecoration: 'none'}}>            
              <button className='location-boutton'>Prenez un(e) taxi / location <FontAwesomeIcon icon={faArrowRightLong} className='fleche-droite'/></button>
            </Link>
          </div>
        </section>
        <GridVehicules dataVehicules={dataVehicules} dataCategories={dataCategories}/>
      </main>
    </>
  )
}

export default Accueil