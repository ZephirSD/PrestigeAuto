import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import MenuCarte from './part/MenuCarte';
import Connexion from './part/Connexion';
import Inscription from './part/Inscription';
import { Link } from 'react-router-dom';

function Header() {
  const [switchToggle, setSwitchToggle] = useState(false);
  const [changeButtonIns, setChangeButtonIns] = useState(false);
  const [changeButtonCon, setChangeButtonCon] = useState(false);
  function toggleMenu(){
    setSwitchToggle(switchToggle => !switchToggle);
  }
  if(switchToggle === true){
    window.scrollTo({top: 0,left:0});
  }
  return (
    <>
        <header>
            <div className='logo-case'>
              <div className='logo-img'><Link to={'/'}>logo</Link></div>
            </div>
            <nav>
                <span>Découvrir</span>
                <span>Contact</span>
            </nav>
            <div className='menu_case'>
              <div className='menu-button' onClick={toggleMenu}>
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
          switchToggle === true ? (<MenuCarte boolConnect={false} switchBool={setSwitchToggle} toggleSwitchIns={setChangeButtonIns} toggleSwitchCon={setChangeButtonCon}/>) : <></>
        }
        {
          changeButtonCon === true ? (<Connexion boolToggle={setChangeButtonCon}/>) : <></>
        }
        {
          changeButtonIns === true ? (<Inscription boolToggle={setChangeButtonIns}/>) : <></>
        }
    </>
  )
}

export default Header