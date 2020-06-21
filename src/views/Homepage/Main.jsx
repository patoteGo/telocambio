import React from 'react';
import Card from './components/Card2'
function Main() {
  return (
    <div className="Homepage-main">
      <div className="container">
      <div className="row mb-4">
        <div className="col-4 mt-4">
        <Card/> 
        </div>
        <div className="col-4 mt-4">
        <Card/> 
        </div>
        <div className="col-4 mt-4">
        <Card/> 
        </div>
        <div className="col-4 mt-4">
        <Card/> 
        </div>
        <div className="col-4 mt-4">
        <Card/> 
        </div>
        <div className="col-4 mt-4">
        <Card/> 
        </div>
      </div>
      <div className="row">
        <div className="col offset-10 mb-4">
          <div className="btn btn-primary size-large">Cargar mas productos</div>
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