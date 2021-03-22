import React from 'react';

import './Menu.css';

export default function Menu ({ menu, setMenu }){   
    return( 
        <nav className="menu">
            <ul>
                <li><div className={menu === 'angola'? "menuItemSelected" : "menuItem"} onClick={() => setMenu('angola')} >Angola</div></li>
                <li><div className={menu === 'barravento'? "menuItemSelected" : "menuItem"} onClick={() => setMenu('barravento')}>Barra Vento</div></li>
                <li><div className={menu === 'congo'? "menuItemSelected" : "menuItem"} onClick={() => setMenu('congo')}>Congo</div></li>
                <li><div className={menu === 'ijexa'? "menuItemSelected" : "menuItem"} onClick={() => setMenu('ijexa')}>Ijexá</div></li>
                <li><div className={menu === 'nago'? "menuItemSelected" : "menuItem"} onClick={() => setMenu('nago')}>Nagô</div></li>
            </ul>
        </nav>)
}