import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function GridVehicules() {
  const [dataVehicules, setDataVehicules] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const fetchVehicules = async () => {
    const api = await fetch("http://localhost:5000/api/vehicules");
    const reponse = await api.json();
    setDataVehicules(reponse);
  };
  const fetchCategories = async () => {
    const api = await fetch("http://localhost:5000/api/categories");
    const reponse = await api.json();
    setDataCategories(reponse);
  };
  useEffect(() => {
    fetchVehicules();
    fetchCategories();
  }, []);
  return (
    <>
      <section className="section-vehicules">
        {dataCategories.map((categorie, index) => (
          <>
            <h1 className="titre-vehicules">{categorie.nom_categorie}</h1>
            <Swiper slidesPerView={3} spaceBetween={20} style={{marginBottom: '60px'}}>
              {dataVehicules.map((voiture, index) =>
                voiture.table_categorie.map((categoVehi) =>
                  categoVehi === categorie.id_categorie ? (
                    <>
                      <SwiperSlide>
                        <div className="carte-vehicule">
                          <div className="case-voiture-render"></div>
                          <div className="nom-voiture">
                            {voiture.nom_vehicules}
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  ) : (
                    <></>
                  )
                )
              )}
            </Swiper>
          </>
        ))}
      </section>
    </>
  );
}

export default GridVehicules;
