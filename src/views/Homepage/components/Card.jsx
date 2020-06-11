import React from 'react';

function Card() {
  return (
    <div className="card" >
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBcyk8gCoEl_YGpt-lAV23d6cvD3MUsQ6TGGKK-D3JuyXxnxnu&usqp=CAU" className="card-img-top" alt="..."></img>
      </div>
      <div className="card-body" style={{ background: "#757173", borderRadius: "20px" }}>
        <h5 className="card-title"style={{color:"#7E0B38"}}>Juguera</h5>
        <p className="card-text"style={{color:"white"}}>Juguera en buen estado, cambio o vendo por no uso.</p>
      </div>


      <div className="row" style={{ background: "#19A26C", borderRadius: "20px" }}>
        <div className="col">
          <div className=" text-right" style={{ width: "18rem" }}>
            <div className="card-body" >
              <h5 className="card-title" style={{color:"#7E0B38"}}>Aqui puedes contactarte por tu producto!</h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary" style={{ background: "#34309D", position:"bottom" }}>Contacto</a>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="text-right" style={{ width: "18rem" }}>
            <div className="card-body" >
              <h5 className="card-title"style={{color:"#7E0B38"}}>Preferencias</h5>
              <p className="card-text" style={{color:"white"}}>A cambio de esta juguera pido una batidora o utensilios de cocina.</p>
              <a href="#" className="btn btn-primary" style={{ background: "#34309D" }}>Ofrecer</a>
            </div>
          </div>
        </div>

      </div>

    </div >

  )
}

export default Card;