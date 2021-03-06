import React from 'react';
import Header from './../layouts/Header.jsx';
import Footer from './../layouts/footer/Footer2'
import './QuienesSomos.sass'

export default function Contacto() {
    return (
        <div>
            <Header interior={true} title="Quienes somos" />
                <div className="QuienesSomos my-3">
                    <div className="container">
                        <div className="row quienesomos">
                            <div className="col-sm">
                                <p className="text-green">Telocambio nace de la necesidad de generar más canales de intercambio que no dependan del dinero, para que las personas puedan adquirir productos que les son útiles sin desembolsar ni un peso, esto se lleva a cabo ofreciendo cosas que ya no se ocupan o simplemente podrían ir al abandono, se les da otra vida siendo reutilizadas por otra persona.
                                El intercambio o trueque es un acto de resistencia al uso obligatorio del dinero como medio para obtener productos o servicios. Con el trueque podemos nosotros mismos dar valor a las cosas, según nuestras expectativas rigiéndonos también por calidad, cantidad, tiempo de uso, etc.</p>
                            </div>
                            <div className="col-sm align-items-center">
                                <img src="https://images.pexels.com/photos/1217327/pexels-photo-1217327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-fluid" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            <Footer />

        </div >

    )
}