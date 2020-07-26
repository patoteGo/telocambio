import React from 'react';
import Header from './../../layouts/Header.jsx'
import Main from './Main'
import Footer from './../../layouts/footer/Footer2.jsx'

function Index() {
  return (
    <div className="Homepage-index">
      <Header interior={false} title=""/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Index;
