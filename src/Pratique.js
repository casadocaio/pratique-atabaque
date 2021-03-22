import React, { useState, useEffect, useRef } from 'react';

import { Button, Input, Switch  } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import Metronomo from './Metronomo';
import toTitleCase from './Functions';
import buscarToque from './toques';

import './Pratique.css';

export default function Pratique({ menu }){
    const [praticando, setPraticando] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [imgAlt, setImgAlt] = useState('');
    const [variacao, setVariacao] = useState('');
    const [onomatopeia, setOnomatopeia] = useState('');
    const [variacoes, setVariacoes] = useState([]);
    const [intervalo, setIntervalo] = useState(5);
    const [sequencial, setSequencial] = useState(true);

    let relogio = useRef();
    let cont = 0;
    let max = 0;

    useEffect(() => { 
        let toque = buscarToque(menu);
        setVariacoes(toque.variacoes);
        setPraticando(false);
        clearTimeout(relogio.current);
        setImgSrc('');
        setImgAlt('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menu]);

    useEffect(() => { 
        let base =[];
        if(variacoes){
            base = variacoes.filter(variacao => variacao.nome === "Base");
            if(base[0]){
                setImgSrc(window.location.href + base[0].imagem);
                setImgAlt(base[0].nome);
                setVariacao(base[0].nome);
                setOnomatopeia(base[0].onomatopeia);
            }
        } else {
            setImgSrc('');
            setImgAlt('');
            setVariacao('');
            setOnomatopeia('');
        }
    }, [variacoes]);

    useEffect(() => { 
        if (praticando === false){
            clearTimeout(relogio.current);
        }
        if (praticando){
            let tempo = 1000 * intervalo;
            relogio.current = setTimeout(schedule (), tempo);
            return () => clearTimeout(relogio.current);
        }   
        return () => clearTimeout(relogio.current)  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [praticando, sequencial, intervalo]);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    
    function schedule(){
        //console.log('schedule pratique', praticando);
        if (praticando === true){
            let tempo = 1000 * intervalo;
            relogio.current = setTimeout(schedule, tempo);
            max = variacoes.length - 1;
            setImgSrc(variacoes[cont].imagem);
            setImgAlt(variacoes[cont].nome);
            setVariacao(variacoes[cont].nome);
            setOnomatopeia(variacoes[cont].onomatopeia);
            if(sequencial){
                cont = cont >= max ? 0 : cont + 1;
            } else {
                cont = getRndInteger(0, max);
            }
        } else {
            clearTimeout(relogio.current);
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
            {menu && <div className="Container Row ItemPos">
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
            </div>} 
            <div className="onomatopeia Item">
            {variacao && <div>
                    <p>Variação: {variacao}</p>
                    <p>Onomatopéia: {onomatopeia}</p>
                </div>}
            </div>
            <div>
            {imgSrc && <img className="Item imagem" src={imgSrc} alt={imgAlt}/>}
            </div>
        </div>
    )
}