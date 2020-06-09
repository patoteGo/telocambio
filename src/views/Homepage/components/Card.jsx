import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Card() {
  return(
   <div content>
    <div className="card" style={{width: "18rem"}}>  
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBcyk8gCoEl_YGpt-lAV23d6cvD3MUsQ6TGGKK-D3JuyXxnxnu&usqp=CAU" className="card-img-top" alt="..."></img>
    </div>
    <div className="card-body">
      <h5 className="card-title">Juguera</h5>
      <p className="card-text">Juguera en buen estado, cambio o vendo por no uso.</p>
    </div>
   </div>
  )
}

export default Card;