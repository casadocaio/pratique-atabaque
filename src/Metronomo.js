import React from 'react';

import './Metronomo.css';

export default function Metronomo ({ praticando }){
    return(
        <div className="Metronomo">
            <div className="MetronomoTitulo">
                <p>Metronomo - {praticando.toString()}</p>
            </div>
        </div>
    )
}