import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
  return (
    <div className="card" >
 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBcyk8gCoEl_YGpt-lAV23d6cvD3MUsQ6TGGKK-D3JuyXxnxnu&usqp=CAU" className="card-img-top" alt="..."></img>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Ver más...</button>

      <div className="card-body">
        <h5 className="card-title" >Juguera</h5>
        <p className="card-text" >Juguera en buen estado, cambio o vendo por no uso.</p>

        <div className="row" >
          <div className="col-6">
            <div className=" text-right" >
              <h5 className="card-title" >Aqui puedes contactarte por tu producto!</h5>
              <p className="card-text"></p>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Envia un mensaje a /.../ </button>
            </div>
          </div>


          <div className="col-6">
            <div className="text-right" >
              <h5 className="card-title" style={{ color: "#7E0B38" }}>Preferencias</h5>
              <p className="card-text" style={{ color: "white" }}>A cambio de esta juguera pido una batidora o utensilios de cocina.</p>
              <a href="#" className="btn btn-primary" npm run start>Ofrecer</a>
            </div>
          </div>
        </div>

      </div>
    </div >

  )
}

export default Card;