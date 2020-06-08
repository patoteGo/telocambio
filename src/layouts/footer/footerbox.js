import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function footerbox() {
    return (
    <div className="containerBox">

        <div className="firstBox">
            <span> Terminos y condiciones </span>
            <span> Politicas de privacidad </span>
            <span> Trabaja con nosotros </span>
            <span> Ayuda </span>
            <span> Contacto </span>
        </div>

        <div className="secondBox">
            <span>Convenios</span>
            <span> Medios de pago </span>
            <span> Paga con Webpay </span>
            <span> Paga con Paypal </span>
        </div>

        <div className="thirdBox">
            <span> Visitanos </span>
            <span> @telocambio </span>
            <span> @telocambio </span>
            <span> @telocambio </span>
        </div>
        
    </div>
    );
}

export default footerbox;
