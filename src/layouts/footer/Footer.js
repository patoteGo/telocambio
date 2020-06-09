import React from 'react';
import FooterBox from './FooterBox';
import PrivacyPolicies from './PrivacyPolicies';
import TermsConditions from './TermsConditions';
import WorkWithUs from './WorkWithUs';
import Help from './Help';

function Footer() {

  //obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <div className="Footer">
      <FooterBox
      fecha={fecha}
      />

      <PrivacyPolicies/>
      <TermsConditions />
      <WorkWithUs />
      <Help />
      
    </div>
  );
}

export default Footer;