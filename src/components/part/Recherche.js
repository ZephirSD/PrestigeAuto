import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Recherche() {
  return (
    <>
      <section className='recherche-case'> 
        <div className='recherche-bar'>
          <input type={'text'} placeholder='Rechercher votre véhicule'/>
          <div className='flex-button'>
            <button type='button' className='button-recherche'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recherche