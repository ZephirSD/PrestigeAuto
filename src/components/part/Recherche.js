import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Recherche({ dataVehicules }) {
  const [valueSearch, setValueSearch] = useState("");
  const changeValue = (event) => {
    let value = event.target.value;
    if (value === "") {
      setValueSearch("");
    } else {
      setValueSearch(value);
    }
  };
  return (
    <>
      <section className="recherche-case">
        <div className="recherche-bar">
          <input
            type={"text"}
            placeholder="Rechercher votre véhicule"
            onChange={changeValue}
            name="searchVehicule"
          />
          <div className="flex-button">
            <button type="button" className="button-recherche">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </button>
          </div>
        </div>
      </section>
      {valueSearch !== "" ? (
        <>
          <div className="grid_recherche">
            {dataVehicules
              .filter((val) =>
                val.nom_vehicules
                  .toLowerCase()
                  .includes(valueSearch.toLowerCase())
              )
              .map((val, index) => (
                <>
                  <div className="flex_liste_recherche">
                    <div className="liste_recherche">
                      <span key={index}>{val.nom_vehicules}</span>
                      <span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="chevron_recherche"
                        />
                      </span>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Recherche;