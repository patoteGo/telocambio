import React, { useContext,useEffect,useState } from 'react';
import Card from './../../shared/Card'
import { Link } from "react-router-dom";
import Login from './../../modals/Login'
import { AppContext } from './../../Context/AppContext'
import Loader from './../../Helpers/Loader'
function Main() {
  const context = useContext(AppContext);
  // eslint-disable-next-line
  const [user, setUser] = context.user;
  // eslint-disable-next-line
  const [products, setProduct] = context.products;
  const [loader, setLoader] = useState("active");
  
  useEffect(() => {
    if(products.length > 0) setLoader('');
    console.log(products);
  }, [products])

  return (

      <div className="Homepage-main">
        <Loader active={loader} msg="calentando motores..."/>
        <Login />
        <div className="container">
          <div className="row mb-4">
            {
              // eslint-disable-next-line
              products.map((product, index) => {
                if(index <= 2){
                return (
                  <div className="col-md-4 col-sm-12 mt-4" key={index}>
                    <Card user={user} product={product} />
                  </div>      
                  
                )
                }
              })
            }
          </div>
          <div className="row">
            <div className="col offset-md-9 mb-4">
              <Link to="/publicaciones" className="btn btn-primary size-large">Ver todas las publicaciones</Link>
            </div>

          </div>
        </div>
      </div>
  
  );
}

export default Main;