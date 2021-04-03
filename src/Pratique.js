import React, { useState, useEffect, useRef } from 'react';

import buscarToque from './toques';

/*import './Pratique.css';*/

export default function Pratique({ 
    menu, 
    praticando, 
    setPraticando,
    intervalo,
    sequencial })
{
    const [imgSrc, setImgSrc] = useState('');
    const [imgAlt, setImgAlt] = useState('');
    const [variacao, setVariacao] = useState('');
    const [onomatopeia, setOnomatopeia] = useState('');
    const [variacoes, setVariacoes] = useState([]);

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



    

    return (
        <div className="Container Row">
            {menu && <div className="Container Row ItemPos">
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