import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function CardChild({ hijo }){
    return (
        <div className="Homepage-main">
          CARDCHILD { hijo }
          {/* <CardNieto hijo={hijo} precio={[9,78,76,43]}/> */}
        </div>
      );
}

export default CardChild