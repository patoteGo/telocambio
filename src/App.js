import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './middleware/Routes'
import { AppProvider } from './Context/AppContext.jsx'
import './sass/_fonts.sass'
import Contacto from './views/Contacto'
function App() { 
  return (
    <AppProvider>
    <div className="App">
      <Routes/>
    </div>
    </AppProvider>
  );
}

export default App;
