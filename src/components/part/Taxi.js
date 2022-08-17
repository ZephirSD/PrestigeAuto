import {
  faCreditCard,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import * as rdrLocales from "react-date-range/dist/locale";

// import { usePlacesWidget } from "react-google-autocomplete";

function Taxi() {
  const dateInitial = new Date();
  const [valueHor, setValueHor] = useState(
    `${
      dateInitial.getHours() < 10
        ? `0${dateInitial.getHours()}`
        : `${dateInitial.getHours()}`
    }:${
      dateInitial.getMinutes() < 10
        ? `0${dateInitial.getMinutes()}`
        : `${dateInitial.getMinutes()}`
    }`
  );
  const [changeDate, setChangeDate] = useState(new Date());
  const [dateValue, setDateValue] = useState({
    jour: dateInitial.getDate(),
    mois: dateInitial.getMonth() + 1,
    année: dateInitial.getFullYear(),
  });
  const funcDateValue = () => {
    setDateValue({
      jour: changeDate.getDate(),
      mois: changeDate.getMonth() + 1,
      année: changeDate.getFullYear(),
    });
  };
  useEffect(() => {
    funcDateValue();
  });
  return (
    <>
      <div className="grid_taxi_case">
        <div className="case_map_taxi">
          <div className="case_input_taxi">
            <input
              type={"search"}
              className="input_map"
              placeholder="Lieu de départ"
            ></input>
            <input
              type={"search"}
              className="input_map"
              placeholder="Lieu d'arrivée"
            ></input>
            <button type="button" className="boutton_map">
              <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
            </button>
          </div>
          <div className="map_taxi"></div>
        </div>
        <div className="case_info_taxi">
          <div className="case_calendrier_loctax">
            <Calendar
              onChange={(item) => setChangeDate(item)}
              locale={rdrLocales.fr}
              date={changeDate}
              color={["#BB6F9C"]}
              className="calendar_div"
            />
            <div className="horaire_div">
              <h2 className="titre_horaire">
                Horaire
              </h2>
              <div>
                <input
                  type={"time"}
                  onChange={(ev) => setValueHor(ev.target.value)}
                  value={valueHor}
                  className="input_hora"
                ></input>
              </div>
            </div>
          </div>
          <div className="case_montant_loctax">
            <div className="title_montant">Montant</div>
            <div className="int_montant">
              <div className="montant">
              </div>
              <div
                className="jour_reserve"
                style={
                  changeDate === undefined
                    ? { display: "none" }
                    : { display: "flex" }
                }
              >
                {`Pour le ${
                  dateValue.jour < 10
                    ? `0${dateValue.jour.toString()}`
                    : dateValue.jour.toString()
                }/${
                  dateValue.mois < 10
                    ? `0${dateValue.mois.toString()}`
                    : dateValue.mois.toString()
                }/${dateValue.année.toString()}`}
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

export default Taxi;
