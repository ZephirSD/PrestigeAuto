import React, { useState } from "react";
import Connexion from './Connexion';

function MenuCarte({ boolConnect, switchBool }) {
  const [switchConnexion, setSwitchConnexion] = useState(false);
  function toggleConnexion(){
    setSwitchConnexion(switchConnexion => !switchConnexion);
    if(switchConnexion === true){
      switchBool = false;
    }
    else{
      switchBool = true;
    }
  }
  return (
    <>
        <div className="flex_carte_menu">
          {boolConnect === false ? (
            <>
              <h2 className="lien_menu_carte">Inscription</h2>
              <h2 className="lien_menu_carte" onClick={toggleConnexion}>Connexion</h2>
            </>
          ) : (
            <>
              <h2 className="lien_menu_carte">Paramètres</h2>
              <h2 className="lien_menu_carte">Favoris</h2>
              <h2 className="lien_menu_carte">Reservations</h2>
            </>
          )}
        </div>
        {
          switchConnexion === true ? (<Connexion/>): <></>
        }
    </>
  );
}

export default MenuCarte;
