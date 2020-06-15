import React from 'react';
import './FooterBoxStyle.css'

function footerbox({fecha}) {
    return (
       <div className="footerbox">
        <div className="row" id="footerlist">
          <div className="col">
            <p> Politicas de privacidad </p>
            <p> Terminos y condiciones </p>
            <p> Trabaja con nostros </p>
            <p> Ayuda </p>
          </div>
          <div className="col-6">
            <p> Paga con Webpay </p>
            <p> Paga con Paypal </p>
            <p> Paga con khipu </p>
            <p> Master Card </p>
          </div>
          <div className="col">
            <p> Quienes somos </p>
            <p> Contactanos </p>
            <p> Recomendaciones </p>
            <p> Todos los derechos reservados &copy; {fecha} </p>
          </div>
        </div>
      </div>
    
    );
}

export default footerbox;
