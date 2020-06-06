import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card'
function Main() {
  return (
    <div className="Homepage-main">
      MAIN
  <hola>hola</hola>

      <Card hijo="Anita" name="card1" img="https://picsum.photos/200/300?random=1"/>
      <Card hijo="Guillermo" name="card2" img="https://picsum.photos/200/300?random=2"/>
      <Card hijo="Pato" name="card3" img="https://picsum.photos/200/300?random=3"/>
    </div>
  );
}

export default Main;