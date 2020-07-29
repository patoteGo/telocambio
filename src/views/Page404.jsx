import React from 'react'
import Header from './../layouts/Header.jsx';
import Footer from './../layouts/footer/Footer2'
export default function Page404() {
    return (
        <div>
            <Header interior={true} title="No encontramos nada =/" />
                    <div className="container" style={{ height:'45vh'}}>
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <h1 className="text-primary font-title">404</h1>

                        </div>
                    </div>
            <Footer/>
        </div>
    )
}
