import React from "react";

function MenuCarte({ boolConnect }) {
  return (
    <>
      <div className="flex_carte_menu">
        {boolConnect === false ? (
          <>
            <h2 className="lien_menu_carte">Inscription</h2>
            <h2 className="lien_menu_carte">Connexion</h2>
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
