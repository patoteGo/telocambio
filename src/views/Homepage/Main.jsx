import React, { useContext } from 'react';
import Card from './../../shared/Card'
import Jumbotron from './components/Jumbotron'
import { Link } from "react-router-dom";
import Login from './../../modals/Login'
import { AppContext } from './../../Context/AppContext'
function Main() {
  const context = useContext(AppContext);
  // eslint-disable-next-line
  const [user, setUser] = context.user;
  // eslint-disable-next-line
  const [products, setProduct] = context.products;
  
  // setUser(context.user[0]);
  // const handleAuth = async () => {
  //   const res = await context.handleisauth()
  //   return res;
  // }

  return (

      <div className="Homepage-main">
        <Login />
        <Jumbotron />
        <div className="container">
          <div className="row mb-4">
            {
              products.map((product, index) => {
                if(index <= 2){
                return (
                  <div className="col-md-4 col-sm-6 mt-4" key={index}>
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