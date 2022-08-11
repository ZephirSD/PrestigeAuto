import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MenuCarte from './part/MenuCarte';

function Header() {
  const [switchToggle, setSwitchToggle] = useState(false);
  function toggleMenu(){
    setSwitchToggle(switchToggle => !switchToggle);
  }
  return (
    <>
        <header>
            <div className='logo-case'>
              <div className='logo-img'>logo</div>
            </div>
            <nav>
                <span>Découvrir</span>
                <span>Contact</span>
            </nav>
            <div className='menu_case' onClick={toggleMenu}>
              <div className='menu-button'>
                <div>
                  <FontAwesomeIcon icon={faBars} className='bars-menu'/>
                </div>
                <div>
                  <span className='circle-user'>
                    <FontAwesomeIcon icon={faUser} className='user-icon'/>
                  </span>
                </div>
              </div>
            </div>
        </header>
        {
          switchToggle === true ? (<MenuCarte boolConnect={false}/>) : <></>
        }
    </>
  )
}

export default Header