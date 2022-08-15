import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useState, Suspense } from "react";
import { baseVehicules } from "../assets/bases_donnees/baseVehicules";
import Loader3D from "./Loader3D";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import * as rdrLocales from 'react-date-range/dist/locale';

function Location({ dataVehicules }) {
  const [valueSelect, setValueSelect] = useState();
  const [changeValue, setChangeValue] = useState();
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  const [shiftDay, setShiftDay] = useState(1);
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
  const changeValueVehicules = (event) => {
    const optionValue = parseInt(event.target.value);
    setValueSelect(optionValue);
  };
  useEffect(() => {
    setChangeValue(valueSelect);
  }, [valueSelect]);
  useEffect(()=>{
    ecartDate();
    calculateDay();
  })
  return (
    <>
      <div className="grid_location_case">
        <div className="case_select_vehicules">
          <div className="select_vehicules">
            <select className="choix_vehicules" onChange={changeValueVehicules}>
              <option value={"voiture"}>Selectionner votre vehicule</option>
              {dataVehicules.map((voiture, index) => (
                <>
                  <option value={voiture.id_vehicules} key={index}>
                    {voiture.nom_vehicules}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className="case_voiture_location">
            <Canvas style={{ width: "100%", height: "100%" }}>
              <ambientLight intensity={10} />
              <OrbitControls />
              <Suspense fallback={<Loader3D />}>
                {baseVehicules.map((base) => (
                  <>{valueSelect === base.id ? base.voiture : <></>}</>
                ))}
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="case_info_location">
          <div className="case_calendrier_loctax">
          <DateRange
              onChange={(item) => setStateDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={stateDate}
              rangeColors={['#BB6F9C']}
              locale={rdrLocales.fr}
              />
          </div>
          <div className="case_montant_loctax">
            <div className="title_montant">Montant</div>
            <div className="int_montant">
              <div className="montant" style={shiftDay === 0 ? {fontSize: '28px'} : {fontSize: '20px'} }>
                {dataVehicules.map((voiture2) =>
                  changeValue === voiture2.id_vehicules ? (
                    shiftDay > 1 ? `${voiture2.prix_unitaire * shiftDay}€` : `${voiture2.prix_unitaire}€`
                  ) : (
                    <></>
                  )
                )}
              </div>
              <div className="jour_reserve" style={shiftDay === 0 ? {display: 'none'} : {display: 'flex'}}>
                {`Pour ${shiftDay} jour${shiftDay > 1 ? 's' : ''}`}
              </div>
            </div>
            <div className="icon_montant">
              <FontAwesomeIcon icon={faCreditCard} className="credit_cart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
