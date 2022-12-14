import React from 'react';
import BMW8 from '../3D_model/BMW8/Bmw8';
import MercedesEQE from '../3D_model/Mercedes_EQE/MercedesEQE';
import Porsche911 from '../3D_model/Porsche_911_Carrera/Porsche911';
import PorscheTaycan from '../3D_model/Porsche_Taycan/Porschetaycan';

export const baseVehicules =  
[
    {
        id: 2,
        voiture: <BMW8/>
    },
    {
        id: 3,
        voiture: <PorscheTaycan/>
    },
    {
        id: 5,
        voiture: <Porsche911/>
    },
    {
        id: 12,
        voiture: <MercedesEQE/>
    }
]
