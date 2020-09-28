import React from 'react';
import { Router } from 'react-router-dom';
import { Switch, Link, BrowserRouter,} from 'react-router-dom';
import Bloco1 from './componentes/bloco1';
import Bloco2 from './componentes/bloco2';
function App() {
  return (
    <div className="App">
     <BrowserRouter>

      <Link to =""> BLOCO 1 clik</Link>
      
      <Link to =""> BLOCO 2 click</Link>

      <Switch>
       <Router path="/Bloco1" componentes={Bloco1} />
       <Router path="/Bloco2" componentes={Bloco2} />
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
