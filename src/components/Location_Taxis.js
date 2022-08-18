import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Location from "./part/Location";
import Taxi from "./part/Taxi";

function LocationTaxis({dataVehicules}) {
  const location = useLocation();
  let locationPath = location.pathname.replace("/", "");
  const [switchPath, setSwitchPath] = useState("");
  const bouttonSwitch = () => {
    setSwitchPath(locationPath);
  };
  useEffect(() => {
    bouttonSwitch();
  });
  return (
    <>
      <main className="main_location">
        <Header />
        <div className="case_switch">
          <div className="switch_anime">
            <AnimatePresence exitBeforeEnter initial={"location"}>
              <motion.div
                animate={switchPath === "location" ? { x: 0 } : { x: 200 }}
                className="indicateur"
              ></motion.div>
            </AnimatePresence>
          </div>
          <div className="boutton_location" onClick={bouttonSwitch}>
            <Link
              to={"/location"}
              style={
                switchPath === "location"
                  ? { color: "white" }
                  : { color: "var(--couleur-texte)" }
              }
              className="lien_switch"
            >
              location
            </Link>
          </div>
          <div className="boutton_taxi" onClick={bouttonSwitch}>
            <Link
              to={"/taxi"}
              style={
                switchPath === "taxi"
                  ? { color: "white" }
                  : { color: "var(--couleur-texte)" }
              }
              className="lien_switch"
            >
              taxi
            </Link>
          </div>
        </div>
        <>
          {switchPath === "location" ? (
            <Location dataVehicules={dataVehicules}/>
          ) : switchPath === "taxi" ? (
            <Taxi/>
          ) : (
            <></>
          )}
        </>
      </main>
    </>
  );
}

export default LocationTaxis;
