import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardChild from './CardChild.jsx';
function Card({name, img, hijo}) {
  return (
    <div className="Homepage-main">
      {name}
      <img src={img} alt=""/>
      <CardChild hijo={hijo}/>
    </div>
  );
}

// function Card(props) {
//   return (
//     <div className="Homepage-main">
//       {props.name}
//       <img src={props.img} alt=""/>
      
//     </div>
//   );
// }

export default Card;