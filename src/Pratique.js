import React, { useState, useEffect } from 'react';

import { Button, Input, Switch  } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import Metronome from '@kevinorriss/react-metronome'

import Metronomo from './Metronomo';
import toTitleCase from './Functions';
import buscarToque from './toques';

import './Pratique.css';

export default function Pratique({ menu }){
    const [praticando, setPraticando] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [variacao, setVariacao] = useState('');
    const [onomatopeia, setOnomatopeia] = useState('');
    const [variacoes, setVariacoes] = useState([]);
    const [intervalo, setIntervalo] = useState(5);
    const [sequencial, setSequencial] = useState(true);

    let relogio = {};
    let cont = 0;
    let max = 0;

    function montarImg(caminho){
        return caminho;
    }

    useEffect(() => { 
        let toque = buscarToque(menu);
        setVariacoes(toque.variacoes);
        setPraticando(false);
        clearTimeout(relogio);
    }, [menu]);

    useEffect(() => { 
        let base =[];
        if(variacoes){
            base = variacoes.filter(variacao => variacao.nome === "Base");
            if(base[0]){
                setImgSrc(window.location.href + base[0].imagem);
                setVariacao(base[0].nome);
                setOnomatopeia(base[0].onomatopeia);
            }
        }
    }, [variacoes]);

    useEffect(() => { 
        if (praticando === false){
            clearTimeout(relogio);
        }
        if (praticando){
            let tempo = 1000 * intervalo;
            relogio = setTimeout(schedule (), tempo);
            return () => clearTimeout(relogio);
        }   
        return () => clearTimeout(relogio)  
    }, [praticando]);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    
    function schedule(){
        let newImg;
        if (praticando === true){
            let tempo = 1000 * intervalo;
            relogio = setTimeout(schedule, tempo);
            max = variacoes.length - 1;
            setImgSrc(variacoes[cont].imagem);
            setVariacao(variacoes[cont].nome);
            setOnomatopeia(variacoes[cont].onomatopeia);
            if(sequencial){
                cont = cont >= max ? 0 : cont + 1;
            } else {
                cont = getRndInteger(0, max);
            }
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

    function handleChangeIntervalo(event){
        /*console.log('handle', event.nativeEvent.data);*/
        setIntervalo(event.nativeEvent.data);
    };

    function handleChangeSequencia(){
        setSequencial(!sequencial);
    };

    return (
        <div className="Container Row">
            <div className="Titulo Item">{toTitleCase(menu)}</div>
            <div className="Container Row ItemPos">
                <div className="Item 2">
                    <Metronomo praticando={praticando} />
                </div>
                <div className="BotaoControle Item">
                    <p>Intervalo entre variação: <Input 
                                                    placeholder = "Intervalo" 
                                                    value = {intervalo}
                                                    style={{ width: '40px' }}
                                                    onChange = {event => handleChangeIntervalo(event)}
                                                />
                    </p>
                    <p>
                    <Switch
                        checked={sequencial}
                        checkedChildren="Sequencial"
                        unCheckedChildren="Aleatório"
                        onClick={() => handleChangeSequencia()}
                        />
                    </p>
                </div>
                <div className="BotaoControle Item">
                    <Button 
                        type="primary" 
                        icon={<PlayCircleOutlined />} 
                        size={'large'} 
                        style={{ 
                            background: praticando ? '#FF0000' : '#50BE50', 
                            border: praticando ? '#FF0000' : '#50BE50' }}
                        onClick={() => handleClick()}
                    >
                            {praticando ? 'Parar' : 'Começar'}
                    </Button>   
                </div>
            </div>
            <div className="onomatopeia Item">
                <p>Variação: {variacao}</p>
                <p>Onomatopéia: {onomatopeia}</p>
            </div>
            <div>
                <img className="Item imagem" src={imgSrc} />
            </div>
        </div>
    )
}