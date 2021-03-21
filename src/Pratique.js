import React, { Fragment, useState, useEffect } from 'react';

import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import Metronome from '@kevinorriss/react-metronome'

import Metronomo from './Metronomo';
import toTitleCase from './Functions';
import buscarToque from './toques';

import './Pratique.css';

export default function Pratique({ menu }){
    const [praticando, setPraticando] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [variacoes, setVariacoes] = useState([]);

    let relogio = {};
    let cont = 0;

    function montarImg(caminho){
        return caminho;
    }

    useEffect(() => { 
        let toque = buscarToque(menu);
        setVariacoes(toque.variacoes);
    }, [menu]);

    useEffect(() => { 
        let base =[];
        if(variacoes){
            base = variacoes.filter(variacao => variacao.nome === "Base");
            if(base[0]){
                setImgSrc(window.location.href + base[0].imagem);
                console.log(window.location.pathname);
                console.log(window.location.href);
                console.log('base', window.location.href + base[0].imagem);
            }
        }
    }, [variacoes]);

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
        let newImg;
        if (praticando === true){
            relogio = setTimeout(schedule, 3000);
            switch (cont) {
                case 0:
                    setImgSrc(newImg);
                    break;
                case 1:
                    setImgSrc(newImg);
                    break;
                default:
                    setImgSrc(newImg);
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
                <img className="Item" src="/imgs/barravento_base.png" />
            </div>
        </div>
    )
}