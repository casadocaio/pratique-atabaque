const barravento = {
    "nome": "Barravento",
    "variacoes": [
        {
            "nome": "Base",
            "onomatopeia": "TA-1 TA-2/ TUM-3 TUM-4/",
            "imagem": "imgs/barravento_base.png"
        },
        {
            "nome": "Encerramento",
            "onomatopeia": "TRA-1/ TA-2 TA-3/ TUM-4 TUM-5 TA-6/",
            "imagem": "imgs/barravento_encerramento.png"
        },
        {
            "nome": "Variação 1",
            "onomatopeia": "TA-1 TA-2 TUM-3 TUM-4 TUM-5",
            "imagem": "imgs/barravento_v1.png"
        },
        {
            "nome": "Variação 2",
            "onomatopeia": "TA-1 TA-2 TA-3 TUM-4 TUM-5",
            "imagem": "imgs/barravento_v2.png"
        },
        {
            "nome": "Variação 3",
            "onomatopeia": "TA-1 TA-2 TA-3 TUM-4 TUM-5 TUM-6",
            "imagem": "imgs/barravento_v3.png"
        },
        {
            "nome": "Variação 4",
            "onomatopeia": "TA-1 TAK-2 TA-6 TUM-4/",
            "imagem": "imgs/barravento_v4.png"
        },
        {
            "nome": "Variação 5",
            "onomatopeia": "TA-1 // TA-2 TUM-3/",
            "imagem": "imgs/barravento_v5.png"
        },
    ]
}

const ijexa = {
    "nome": "Ijexá",
    "variacoes": [
        {
            "nome": "Base",
            "onomatopeia": "TA-1 TA-2 TUMM-3 TA-4",
            "imagem": "imgs/ijexa_base.png"
        },
        {
            "nome": "Encerramento",
            "onomatopeia": "TA-1/ TA-2/ TUM-3 TUM-4 TA-5/",
            "imagem": "imgs/ijexa_encerramento.png"
        },
        {
            "nome": "Variação 1",
            "onomatopeia": "TA-1 TA-2/ TUM-3 TUM-4 TA-5/",
            "imagem": "imgs/ijexa_v1.png"
        },
        {
            "nome": "Variação 2",
            "onomatopeia": "TA-1 TA-2 TUM-3 TUMM-4 TA-5/",
            "imagem": "imgs/ijexa_v2.png"
        },
        {
            "nome": "Variação 3",
            "onomatopeia": "TA-1 TA-2 TRUM-3 TA-4/",
            "imagem": "imgs/ijexa_v3.png"
        },
        {
            "nome": "Variação 4",
            "onomatopeia": "TA-1 TA-2 TRUM-3 TA-4/ TRUM-1 TA-2/ TRUM-1 TA-2/",
            "imagem": "imgs/ijexa_v4.png"
        },
        {
            "nome": "Variação 5",
            "onomatopeia": "TA-1 TA-2 TRUM-3 TA-4 TA-1 TA-2 TA-3 TUM-4 TUM-5 TA-6/",
            "imagem": "imgs/ijexa_v5.png"
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