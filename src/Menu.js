import React from 'react';

import logo from './imgs/logo_espaco.png';

/*import './Menu.css';*/

export default function Menu ({ menu, setMenu }){   
    return( 
        <div className="menuContainer">
            <img className="imglogo menuItem" src={logo} alt='Pratique - Espaço do Ogã' />
            <p className="texto menuItem">Pratique seu toque.</p>
            <nav className="menuNav">
                <ul>
                    <li><div className={menu === 'angola'? "menuItemSelected" : "menuItem"}  >Angola</div></li>
                    <li><div className={menu === 'barravento'? "menuItemSelected" : "menuItem"} onClick={() => setMenu('barravento')}>Barra Vento</div></li>
                    <li><div className={menu === 'congo'? "menuItemSelected" : "menuItem"} >Congo</div></li>
                    <li><div className={menu === 'ijexa'? "menuItemSelected" : "menuItem"} onClick={() => setMenu('ijexa')}>Ijexá</div></li>
                    <li><div className={menu === 'nago'? "menuItemSelected" : "menuItem"} >Nagô</div></li>
                </ul>
            </nav>
        </div>)
}