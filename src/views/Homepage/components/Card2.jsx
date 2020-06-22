import React from 'react'

export default function Card2() {
    return (
        <div>
            <div className="card promoting-card">

                <div className="card-body d-flex flex-row">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
                    <div>
                        <h4 className="card-title font-weight-bold mb-2">New spicy meals</h4>
                        <div className="card-text"> <div className="badge badge-info mr-1">etiqueta 1</div> <div className="badge badge-info mr-1">etiqueta 2</div></div>
                    </div>
                </div>

                <div className="view overlay">
                    <img className="card-img-top rounded-0" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg" alt="Card cap" />
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>


                <div className="card-body">
                    <div className="collapse-content">
                        <p className="card-text " id="collapseContent">Recently, we added several exotic new dishes to our restaurant menu. They come from countries such as Mexico, Argentina, and Spain. </p>
                        <div className="card-text text-right">lo cambio por: <strong>BLABLABLA</strong></div>
                        <a className="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent" aria-expanded="false" aria-controls="collapseContent">dd</a>
                        
                    </div>
                    <div className="row">
                        <div className="btn ml-auto btn-primary">Detalles</div>
                        <div className="btn ml-2 btn-info">Cambiar por</div>
                    </div>
                </div>
            </div>
        </div>
  
    )
}
