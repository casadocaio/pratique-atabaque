import React, { useEffect } from 'react';

import { Button, InputNumber, Switch, Tooltip } from 'antd';

import Metronomo from './Metronomo';

import toTitleCase from './Functions';

export default function Config({
    menu,
    praticando,
    setPraticando,
    intervalo,
    setIntervalo,
    sequencial,
    setSequencial }) 
{

    useEffect(() => { 
        switch (menu) {
            case 'congo':
                setIntervalo(20);
                break;
            default:
                setIntervalo(5);
        }
    }, [menu, setIntervalo]);
    
    return (
        <div className="configContainer">
            <div className="controleConfig">
                <div className="tituloConfig">
                    <p className="">{toTitleCase(menu)}</p>
                </div>
                <div className="comecarConfig">
                    <Tooltip placement="right" title="Clique aqui para começar a trocar as variações do toque.">
                        <Button
                            type="primary"
                            size={'large'}
                            shape="round"
                            style={{
                                background: praticando ? '#FF0000' : '',
                                border: praticando ? '#FF0000' : ''
                            }}
                            onClick={() => setPraticando(!praticando)}
                        >
                            {praticando ? 'Parar' : 'Começar'}
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className="metronomo">
                <Metronomo praticando={praticando} />
            </div>
            <div className="intervalo">
                <Tooltip placement="right" title="Tempo de espera até que a próxima variação apareça, ideal 5 segundos. Digite o número ou clique nas setas.">
                    <p>Intervalo entre variação (em segundos):</p>
                    <InputNumber
                        min={3} 
                        max={20}
                        value={intervalo}
                        style={{ width: '60px' }}
                        onChange={setIntervalo}
                    />
                </Tooltip>
            </div>
            <div className="modoExibicao">
                <Tooltip placement="right" title="Modo de como as variações serão alternadas, de forma sequencial ou randomicamente, ou seja, sortidas. Clique para alterar.">
                    <p> Modo de exibição:</p>
                    <Switch
                        checked={sequencial}
                        checkedChildren="Sequencial"
                        unCheckedChildren="Aleatório"
                        onClick={() => setSequencial(!sequencial)}
                    />
                </Tooltip>
            </div>
        </div>)
}