import barraBase from './imgs/barravento_base.png';
import barraEncerramento from './imgs/barravento_encerramento.png';
import barraV1 from './imgs/barravento_v1.png';
import barraV2 from './imgs/barravento_v2.png';
import barraV3 from './imgs/barravento_v3.png';
import barraV4 from './imgs/barravento_v4.png';
import barraV5 from './imgs/barravento_v5.png';

import ijexaBase from './imgs/ijexa_base.png';
import ijexaEncerramento from './imgs/ijexa_encerramento.png';
import ijexaV1 from './imgs/ijexa_v1.png';
import ijexaV2 from './imgs/ijexa_v2.png';
import ijexaV3 from './imgs/ijexa_v3.png';
import ijexaV4 from './imgs/ijexa_v4.png';
import ijexaV5 from './imgs/ijexa_v5.png';

const barravento = {
    "nome": "Barravento",
    "variacoes": [
        {
            "nome": "Base",
            "onomatopeia": "TA-1 TA-2/ TUM-3 TUM-4/",
            "imagem": barraBase
        },
        {
            "nome": "Encerramento",
            "onomatopeia": "TRA-1/ TA-2 TA-3/ TUM-4 TUM-5 TA-6/",
            "imagem": barraEncerramento
        },
        {
            "nome": "Variação 1",
            "onomatopeia": "TA-1 TA-2 TUM-3 TUM-4 TUM-5",
            "imagem": barraV1
        },
        {
            "nome": "Variação 2",
            "onomatopeia": "TA-1 TA-2 TA-3 TUM-4 TUM-5",
            "imagem": barraV2
        },
        {
            "nome": "Variação 3",
            "onomatopeia": "TA-1 TA-2 TA-3 TUM-4 TUM-5 TUM-6",
            "imagem": barraV3
        },
        {
            "nome": "Variação 4",
            "onomatopeia": "TA-1 TAK-2 TA-6 TUM-4/",
            "imagem": barraV4
        },
        {
            "nome": "Variação 5",
            "onomatopeia": "TA-1 // TA-2 TUM-3/",
            "imagem": barraV5
        },
    ]
}

const ijexa = {
    "nome": "Ijexá",
    "variacoes": [
        {
            "nome": "Base",
            "onomatopeia": "TA-1 TA-2 TUMM-3 TA-4",
            "imagem": ijexaBase
        },
        {
            "nome": "Encerramento",
            "onomatopeia": "TA-1/ TA-2/ TUM-3 TUM-4 TA-5/",
            "imagem": ijexaEncerramento
        },
        {
            "nome": "Variação 1",
            "onomatopeia": "TA-1 TA-2/ TUM-3 TUM-4 TA-5/",
            "imagem":ijexaV1
        },
        {
            "nome": "Variação 2",
            "onomatopeia": "TA-1 TA-2 TUM-3 TUMM-4 TA-5/",
            "imagem": ijexaV2
        },
        {
            "nome": "Variação 3",
            "onomatopeia": "TA-1 TA-2 TRUM-3 TA-4/",
            "imagem": ijexaV3
        },
        {
            "nome": "Variação 4",
            "onomatopeia": "TA-1 TA-2 TRUM-3 TA-4/ TRUM-1 TA-2/ TRUM-1 TA-2/",
            "imagem": ijexaV4
        },
        {
            "nome": "Variação 5",
            "onomatopeia": "TA-1 TA-2 TRUM-3 TA-4 TA-1 TA-2 TA-3 TUM-4 TUM-5 TA-6/",
            "imagem": ijexaV5
        },
    ]
}

export default function buscarToque(toque){
    let ret = {};

    if(toque === 'barravento'){
        ret = barravento;
    }
    if(toque === 'ijexa'){
        ret = ijexa;
    }

    return ret;
}