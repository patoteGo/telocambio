import React from 'react';
import Card from './components/Card'
import CardGallery from './components/CardGallery'

function Main() {
  return (
    <div className="Main">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Card />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;