import React from 'react'
import Header from './../layouts/Header.jsx'
import Footer from './../layouts/footer/Footer2.jsx'
import { useForm } from 'react-hook-form';
export default function Test() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
     
        <div>
            <Header interior={true} title="SUBIR ARCHIVOS"/>
            <div className="container my-5">
            <div className="row">
                <div className="col-6">
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <form className="upload-form" action="http://127.0.0.1:5000/upload" method="post" enctype="multipart/form-data"> 
                        <input id="input-b1" name="fileinput" type="file" className="file" data-browse-on-zone-click="true" ref={register}/>
                        <input className="btn btn-primary" type="submit" value="submit"/>
                    </form>
                </div>
            </div>
            </div>
               
            <Footer/>
        </div>
    )
}
