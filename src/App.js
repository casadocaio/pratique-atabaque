import React, { useEffect, useState } from 'react';
import './Menu.css';
import Menu from './Menu';
import Pratique from './Pratique';

function App() {
  const [menu, setMenu] = useState('');

  useEffect(() => { setMenu('barravento') }, []);

  return (
    <div className="App">
      <div className="Menu">
        <Menu menu={menu} setMenu={setMenu} />
      </div>
      <div className="Pratique">
        <Pratique menu={menu} />
      </div>
    </div>
  );
}

export default App;
