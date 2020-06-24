import React, { useContext,  } from 'react'
import Header from './../../layouts/Header.jsx'
import Footer from './../../layouts/footer/Footer2.jsx'
import Card from './../../shared/Card'
import { AppContext } from '../../Context/AppContext'
export default function Products() {
  const context = useContext(AppContext);
  // eslint-disable-next-line
  const [user, setUser] = context.user;
    return (
        <div>
             <Header/>

             <div className="container">
      <div className="row mb-4">
        {/* <div className="col-sm-3 col-md-4  mt-4">
        <Card user={user}/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card user={user}/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card user={user}/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card user={user}/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card user={user}/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card user={user}/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card user={user}/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card user={user}/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card user={user}/> 
        </div> */}
      </div>
      </div>

      <Footer/>
        </div>
    )
}
