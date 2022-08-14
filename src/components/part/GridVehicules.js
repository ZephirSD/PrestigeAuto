import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { baseVehicules } from "../assets/bases_donnees/baseVehicules";
import { Canvas } from "@react-three/fiber";
import Loader3D from "./Loader3D";
import { Link } from 'react-router-dom';

function GridVehicules({ dataVehicules, dataCategories }) {
  return (
    <>
      <section className="section-vehicules">
        {dataCategories.map((categorie, index) => (
          <>
            <h1 className="titre-vehicules">{categorie.nom_categorie}</h1>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              style={{ marginBottom: "60px" }}
            >
              {dataVehicules.map((voiture) =>
                voiture.table_categorie.map((categoVehi) =>
                  categoVehi === categorie.id_categorie ? (
                    <>
                      <SwiperSlide>
                        <>
                          <div className="carte-vehicule">
                            <Link to={`/vehicules/${voiture._id}`}>                            
                              <div
                                className="case-voiture-render"
                              >
                                <Canvas>
                                  <ambientLight intensity={10} />
                                  <Suspense fallback={<Loader3D/>}>
                                  {
                                    baseVehicules.map((base) => (
                                      <>
                                        {voiture.id_vehicules === base.id ? (
                                          base.voiture
                                        ) : (
                                          <></>
                                        )}
                                      </>
                                    ))
                                  }
                                  </Suspense>
                                </Canvas>
                              </div>
                            </Link>
                            <div className="nom-voiture">
                              {voiture.nom_vehicules}
                            </div>
                          </div>
                        </>
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
