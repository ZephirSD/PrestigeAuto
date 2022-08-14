import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { baseVehicules } from "./assets/bases_donnees/baseVehicules";
import { Canvas } from "@react-three/fiber";
import Loader3D from "./part/Loader3D";
import { OrbitControls } from "@react-three/drei";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import * as rdrLocales from 'react-date-range/dist/locale';

function VehiculesPages({ dataVehicules }) {
  const param = useParams();
  const [dataCategories, setDataCategories] = useState([]);
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  const [shiftDay, setShiftDay] = useState(1);
  const fetchCategories = async () => {
    const api = await fetch("http://localhost:5000/api/categories");
    const reponse = await api.json();
    setDataCategories(reponse);
  };
  const [stateDate, setStateDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const ecartDate = () => {
    stateDate.map((dayDate) => (
      setStartDay(dayDate.startDate)
    ))
    stateDate.map((dayDate2) => (
      setEndDay(dayDate2.endDate)
    ))
  }
  const calculateDay = () => {
    const nombreJour = parseInt(Math.ceil(Math.abs(endDay - startDay) / (1000 * 60 * 60 * 24)));
    setShiftDay(nombreJour);
  }
  useEffect(() => {
    fetchCategories();
  },[]);
  useEffect(() => {
    ecartDate();
    calculateDay();
  });
  return (
    <>
      <main className="main_vehicules">
        <Header />
        <div className="grid_vehicules2">
          <div className="grid_vehicules_info">
            {dataVehicules.map((vehicules) =>
              param.id_voiture === vehicules._id ? (
                <>
                  <div className="canvas_vehicules">
                    <Canvas style={{ backgroundColor: "red" }}>
                      <ambientLight intensity={10} />
                      <OrbitControls />
                      <Suspense fallback={<Loader3D />}>
                        {baseVehicules.map((base) => (
                          <>
                            {vehicules.id_vehicules === base.id ? (
                              base.voiture
                            ) : (
                              <></>
                            )}
                          </>
                        ))}
                      </Suspense>
                    </Canvas>
                  </div>
                  <div className="case_categories_vehicules">
                    {dataCategories.map((categorie2) =>
                      vehicules.table_categorie.map((categorie1, index) =>
                        categorie1 === categorie2.id_categorie ? (
                          <>
                            <span
                              key={categorie2.id}
                              className="categorie_vehicules"
                            >
                              {(index ? ", " : "") + categorie2.nom_categorie}
                            </span>
                          </>
                        ) : (
                          <></>
                        )
                      )
                    )}
                  </div>
                  <div className="case_montant_vehicules">
                    <div className="title_montant">Montant</div>
                    <div className="int_montant">
                      <div className="montant" style={shiftDay === 0 ? {fontSize: '28px'} : {fontSize: '20px'} }>
                        {shiftDay === 0 ? `${vehicules.prix_unitaire}€` : `${vehicules.prix_unitaire * shiftDay}€`}
                      </div>
                      <div className="jour_reserve" style={shiftDay === 0 ? {display: 'none'} : {display: 'flex'}}>
                        {`Pour ${shiftDay} jour${shiftDay > 1 ? 's' : ''}`}
                      </div>
                    </div>
                    <div className="icon_montant">
                      <FontAwesomeIcon
                        icon={faCreditCard}
                        className="credit_cart"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )
            )}
          </div>
          <div className="grid_calendrier_vehicules">
            <DateRange
              onChange={(item) => setStateDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={stateDate}
              rangeColors={['#BB6F9C']}
              locale={rdrLocales.fr}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default VehiculesPages;
