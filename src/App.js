import React, { /*useEffect,*/ useState } from 'react';
/*import './Menu.css';*/
import Config from './Config';
import Menu from './Menu';
import Pratique from './Pratique';

function App() {
  const [menu, setMenu] = useState('');
  const [praticando, setPraticando] = useState(false);
  const [intervalo, setIntervalo] = useState(5);
  const [sequencial, setSequencial] = useState(true);

  //useEffect(() => { setMenu('barravento') }, []);

  return (
    <div className="App appcontainer">
      <div className="Menu">
        <Menu menu={menu} setMenu={setMenu} />
      </div>
      <div className="Config configcontainer">
        {menu && <Config 
                    menu={menu} 
                    praticando={praticando} 
                    setPraticando={setPraticando} 
                    intervalo={intervalo} 
                    setIntervalo={setIntervalo} 
                    sequencial={sequencial} 
                    setSequencial={setSequencial} 
                  />
        }
      </div>
      <div className="Pratique pratiquecontainer">
        {menu && <Pratique 
                    menu={menu} 
                    praticando={praticando} 
                    setPraticando={setPraticando}
                    intervalo={intervalo} 
                    setIntervalo={setIntervalo}
                    sequencial={sequencial} 
                  />
        }
      </div>
    </div>
  );
}

export default App;
