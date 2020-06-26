import React from 'react';
import './FooterBoxStyle.sass'
import { Link } from "react-router-dom";

function footerbox({fecha}) {
    return (
       <div className="footerbox">
        <div className="row" id="footerlist">
          <div className="col">
          <Link className="text-reset" to="/politicas" ><p> Politicas de privacidad </p></Link>
            <Link className="text-reset" to="/terminos" ><p> Terminos y condiciones </p></Link>
            <Link className="text-reset" to="/trabaja" ><p> Trabaja con nostros </p></Link>
            <Link className="text-reset" to="/ayuda" ><p> Ayuda </p></Link>
          </div>
          <div className="col-6">
          <Link className="text-reset" to="/webpay" ><p> Paga con Webpay </p></Link>
            <Link className="text-reset" to="/paypal" ><p> Paga con Paypal </p></Link>
            <Link className="text-reset" to="/khipu" ><p> Paga con khipu </p></Link>
            <Link className="text-reset" to="/mastercard" ><p> Master Card <i class="fa fa-cc-mastercard"></i> </p></Link>
          </div>
          <div className="col">
          <Link className="text-reset" to="/quienessomos" ><p >Quienes somos</p> </Link> 
            <Link className="text-reset" to="/contacto" ><p >Contactanos</p> </Link> 
            <Link className="text-reset" to="/recomendaciones" ><p >Recomendaciones</p> </Link>  
            <Link className="text-reset" to="/" ><p> Todos los derechos reservados &copy; {fecha} </p></Link>
          </div>
        </div>
      </div>
    
    );
}

export default footerbox;
