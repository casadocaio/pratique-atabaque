import React, { Fragment, useState, useEffect } from 'react';

import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import Metronomo from './Metronomo';
import toTitleCase from './Functions';
import atabaque  from './assets/atabaque-removebg-preview.png';
import base from './assets/atabaque_quadrado_base.png';
import encerramento from './assets/atabaque_quadrado_encerramento.png';

import './Pratique.css';

export default function Pratique({ menu }){
    const [praticando, setPraticando] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    let relogio = {};
    let cont = 0;

    useEffect(() => { 
        setImgSrc(base);
    }, [menu]);

    useEffect(() => { 
        if (praticando === false){
            clearTimeout(relogio);
        }
        if (praticando){
            relogio = setTimeout(schedule (), 3000);
            return () => clearTimeout(relogio);
        }   
        return () => clearTimeout(relogio)  
    }, [praticando]);

    function schedule(){
        if (praticando === true){
            relogio = setTimeout(schedule, 3000);
            switch (cont) {
                case 0:
                    setImgSrc(base);
                    break;
                case 1:
                    setImgSrc(encerramento);
                    break;
                default:
                    setImgSrc(base);
                    break;
              }
              cont = cont > 1 ? 0 : cont + 1;
        } else {
            clearTimeout(relogio);
        }
    }

    function handleClick(){
        if(praticando){
            setPraticando(false);
        } else {
            setPraticando(true);
        }
    }

    return (
        <div className="Container Column">
            <div className="Titulo Item">{toTitleCase(menu)}</div>
            <div className="Container Row ItemPos">
                <div className="Item 2">
                    <Metronomo praticando={praticando} />
                </div>
                <div className="BotaoControle Item">
                    <Button 
                        type="primary" 
                        shape="circle" 
                        icon={<PlayCircleOutlined />} 
                        size={'large'} 
                        style={{ 
                            width: '128px', 
                            height: '128px', 
                            background: praticando ? '#FF0000' : '#50BE50', 
                            border: praticando ? '#FF0000' : '#50BE50' }}
                        onClick={() => handleClick()}
                    >
                            {praticando ? 'Parar' : 'Começar'}
                    </Button>
                </div>
            </div>
            <div>
                <img className="Item" src={imgSrc} />
            </div>
        </div>
    )
}