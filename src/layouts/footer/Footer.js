import React from 'react';
import FooterBox2 from './FooterBox2';
import PrivacyPolicies from './PrivacyPolicies';
import TermsConditions from './TermsConditions';
import WorkWithUs from './WorkWithUs';
import Help from './Help';
import Contact from './Contact';

function Footer() {

  //obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <div className="Footer">
      <FooterBox2
      fecha={fecha}
      />

      <PrivacyPolicies/>
      <TermsConditions />
      <WorkWithUs />
      <Help />
      <Contact />

      
    </div>
  );
}

export default Footer;