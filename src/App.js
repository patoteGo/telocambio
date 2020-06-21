import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './middleware/Routes'
import { UserProvider } from './Context/UserContext'
import './sass/_fonts.sass'
function App() {
  return (
    <UserProvider>
    <div className="App">
      <Routes/>
    </div>
    </UserProvider>
  );
}

export default App;
