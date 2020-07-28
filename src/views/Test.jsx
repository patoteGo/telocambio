import React from 'react'
import Header from './../layouts/Header.jsx'
import Footer from './../layouts/footer/Footer2.jsx'
import { useForm } from 'react-hook-form';
export default function Test() {
    return (
     
        <div>
            <Header interior={true} title="SUBIR ARCHIVOS"/>
            <div className="container my-5">
            <div className="row">
                <div className="col-6">
                    <form action="http://127.0.0.1:5000/file" method="post" enctype="multipart/form-data">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" name="fileinput" className="custom-file-input" id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"/>
                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                        </div>
                        <input type="submit" value="submit"/>
                    </form>
                </div>
            </div>
            </div>
               
            <Footer/>
        </div>
    )
}
