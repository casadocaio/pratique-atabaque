import React, { useEffect, useRef, useState } from 'react';
import { Slider } from 'antd';

import './Metronomo.css';

export default function Metronomo ({ praticando }){
    const [bpms, setBpms] = useState(100);
    const [passo, setPasso] = useState(0);

    let oscilador = useRef();

    useEffect(() => { 
        if (praticando === false){
            clearTimeout(oscilador.current);
            setPasso(0);
        }
        if (praticando){
            setPasso(1);
        }   
        return () => clearTimeout(oscilador.current)  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [praticando]);

    function schedule(){
        //console.log('schedule metro', praticando);
        if (praticando === true){
            let tempo = 1000 / (bpms/60);
            oscilador.current = setTimeout(schedule, tempo);
            if(passo < 1 || passo > 1){
                setPasso(1);
            } else {
                setPasso(passo + 1);
            }
        } else {
            clearTimeout(oscilador.current);
            setPasso(0);
        }
    }

    useEffect(() => { 
        if (passo > 0){
            let tempo = 1000 / (bpms/60);
            oscilador.current = setTimeout(schedule, tempo);
        } else {
            clearTimeout(oscilador.current);
            setPasso(0);
        }
        return () => clearTimeout(oscilador.current) ;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [passo]);

    function onChange(value){
        setBpms(value);
    };

    function classeCSS(item){
        let classe = " cinzaClaro";

        if(passo === 0){
            classe = " cinzaClaro";
        } else if (passo === 1){
            classe = item === 1 ? " cinzaClaro" : " cinza";
        } else if (passo === 2){
            classe =  item === 1 ? " cinza" : " cinzaClaro";
        }

        return classe;
    }

    return(
        <div className="Metronomo">
            <div className="MetronomoTitulo">
                <p>Metronomo</p>
            </div>
            <div className={"Item circulo" + classeCSS(1)} >
            </div>
            <div className={"Item circulo" + classeCSS(2)} >
            </div>
            <div className="bmp Item">
                BPM: {bpms}
            </div>
            <div className="slider Item">
                <Slider 
                    defaultValue={bpms}
                    min={50}
                    max={200}
                   /* marks={{ 50: {
                        style: {
                          color: '#327832',
                        },
                        label:  50,
                      }, 200: {
                        style: {
                          color: '#327832',
                        },
                        label:  200,
                      }, }} */
                    onChange={value => onChange(value)}
                />
            </div>
        </div>
    )
}