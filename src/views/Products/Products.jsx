import React, { useContext,  } from 'react'
import Header from './../../layouts/Header.jsx'
import Footer from './../../layouts/footer/Footer2.jsx'
import Card from './../../shared/Card'
import Login from './../../modals/Login'
import { AppContext } from '../../Context/AppContext'
export default function Products() {
  const context = useContext(AppContext);
  // eslint-disable-next-line
  const [user, setUser] = context.user;
  // eslint-disable-next-line
  const [products, setProduct] = context.products;
    return (
        <div>
            <Header interior={true} title="Publicaciones"/>
            <Login />

             <div className="container">
            <div className="row mb-4">
            {
                    products.map((product, index) => {
                      return (
                        <div className="col-md-4 col-sm-6 mt-4" key={index}>
                          <Card user={user} product={product} />
                        </div>      
                      )
                    })
                  }
            </div>
            </div>

            <Footer/>
        </div>
    )
}
