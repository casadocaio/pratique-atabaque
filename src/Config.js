import React from 'react';

import { Button, Input, Switch } from 'antd';

import Metronomo from './Metronomo';

import toTitleCase from './Functions';

export default function Config ({ 
    menu, 
    praticando, 
    setPraticando, 
    intervalo,
    setIntervalo,
    sequencial,
    setSequencial })
{

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

    return( 
        <div className="configContainer">
            <div className="controleConfig">
                <div className="tituloConfig">
                    <p className="">{toTitleCase(menu)}</p>
                </div>
                <div className="comecarConfig">
                    <Button 
                        type="primary" 
                        size={'large'} 
                        shape="round"
                        style={{ 
                            background: praticando ? '#FF0000' : '', 
                            border: praticando ? '#FF0000' : '' }}
                        onClick={() => handleClick()}
                    >
                            {praticando ? 'Parar' : 'Começar'}
                    </Button>  
                </div>
            </div>
            <div className="metronomo">
                <Metronomo praticando={praticando} />
            </div>
            <div className="intervalo">
                <p>Intervalo entre variação: <Input 
                                                    placeholder = "Intervalo" 
                                                    value = {intervalo}
                                                    style={{ width: '40px' }}
                                                    onChange = {event => handleChangeIntervalo(event)}
                                                />
                </p>
            </div>
            <div className="modoExibicao">
                    <p> Modo de exibição: 
                    <Switch
                        checked={sequencial}
                        checkedChildren="Sequencial"
                        unCheckedChildren="Aleatório"
                        onClick={() => handleChangeSequencia()}
                        />
                    </p>
            </div>
        </div>)
}