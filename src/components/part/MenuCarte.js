import React from "react";

function MenuCarte({ boolConnect, switchBool, toggleSwitchIns, toggleSwitchCon }) {
  const boutonConnexion = () => {
    toggleSwitchCon(true);
    switchBool(false);
  }
  const boutonInscription = () => {
    toggleSwitchIns(true);
    switchBool(false);
  }
  return (
    <>
        <div className="flex_carte_menu">
          {boolConnect === false ? (
            <>
              <h2 className="lien_menu_carte" onClick={boutonInscription}>Inscription</h2>
              <h2 className="lien_menu_carte" onClick={boutonConnexion}>Connexion</h2>
            </>
          ) : (
            <>
              <h2 className="lien_menu_carte">Paramètres</h2>
              <h2 className="lien_menu_carte">Favoris</h2>
              <h2 className="lien_menu_carte">Reservations</h2>
            </>
          )}
        </div>
    </>
  );
}

export default MenuCarte;
