import React from 'react'
import Header from './../../layouts/Header.jsx'
import Footer from './../../layouts/footer/Footer2.jsx'
import Card from './../../shared/Card'
export default function Products() {
    return (
        <div>
             <Header/>

             <div className="container">
      <div className="row mb-4">
        <div className="col-sm-3 col-md-4  mt-4">
        <Card/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card/> 
        </div>
        <div className="col-sm-3 col-md-4  mt-4">
        <Card/> 
        </div>
      </div>
      </div>

      <Footer/>
        </div>
    )
}
