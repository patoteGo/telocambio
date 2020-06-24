import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cardgallery() {
    return (
        <div className="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg"></div>

        <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                   
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img ="d-block w-100" src="..." alt="First slide">
                            </div>
                            <div className="carousel-item">
                                <img ="d-block w-100" src="..." alt="Second slide">
                            </div>
                                <div className="carousel-item">
                                 <img ="d-block w-100" src="..." alt="Third slide">
                            </div>
                        </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}  






export default Cardgallery;