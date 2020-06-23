import React from 'react';
import Card from './../../shared/Card'
import Jumbotron from './components/Jumbotron'
import { Link } from "react-router-dom";
import Login from './../../modals/Login'
function Main() {
  return (
    <div className="Homepage-main">
      <Login/>
      <Jumbotron/>
      <div className="container">
      <div className="row mb-4">
        <div className="col-md-4 col-sm-6 mt-4">
        <Card/> 
        </div>
        <div className="col-md-4 col-sm-6 mt-4">
        <Card/> 
        </div>
        <div className="col-md-4 col-sm-6 mt-4">
        <Card/> 
        </div>
      
      </div>
      <div className="row">
        <div className="col offset-md-9 mb-4">
          <Link to="/publicaciones" className="btn btn-primary size-large">Ver todas las publicaciones</Link>
        </div>
        
      </div>
      </div>
      
      

      {/* <Card hijo="Anita" name="card1" img="https://picsum.photos/200/300?random=1"/>
      <Card hijo="Guillermo" name="card2" img="https://picsum.photos/200/300?random=2"/>
      <Card hijo="Pato" name="card3" img="https://picsum.photos/200/300?random=3"/> */}
    </div>
  );
}

export default Main;