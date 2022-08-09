import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function GridVehicules() {
  return (
    <>
        <section className='section-vehicules'>
            <h1 className='titre-vehicules'>Anniversaire</h1>
            <Swiper slidesPerView={3} spaceBetween={20}>
              <SwiperSlide>
                <div className='carte-vehicule'>
                  <div className='case-voiture-render'></div>
                  <div className='nom-voiture'>BMW M8</div>
                </div>
              </SwiperSlide>
            </Swiper>
        </section>
    </>
  )
}

export default GridVehicules