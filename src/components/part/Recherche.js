import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Recherche({ dataVehicules }) {
  const [valueSearch, setValueSearch] = useState("");
  // const [placeHolder, setPlaceHolder] = useState(false);
  const changeValue = (event) => {
    let value = event.target.value;
    if (value === "") {
      setValueSearch("");
    } else {
      setValueSearch(value);
    }
  };
  const engineSearch = (nom) => {
    console.log(nom);
    // dataVehicules.map((data) => (
    //   data.nom_vehicules === nom ? (setPlaceHolder(true)) : setPlaceHolder(false)
    // ))
  }
  useEffect(() => {
    // console.log(placeHolder);
  });
  return (
    <>
      <section className="recherche-case">
        <div className="recherche-bar">
          <input
            type={"text"}
            placeholder="Rechercher votre véhicule"
            onChange={changeValue}
            name="searchVehicule"
            autoComplete="off"
          />
          <div className="flex-button">
            <button type="button" className="button-recherche" onClick={engineSearch(valueSearch)}>
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
                    .includes(valueSearch.toLowerCase().trim())
              )
              .map((val, index) => (
                <>
                  <Link to={`/vehicules/${val._id}`} style={{textDecoration: 'none'}}>                 
                    <div className="flex_liste_recherche">
                      <div className="liste_recherche">
                        <span key={index} data-index={val.id_vehicules}>
                          {val.nom_vehicules}
                        </span>
                        <span>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="chevron_recherche"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
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