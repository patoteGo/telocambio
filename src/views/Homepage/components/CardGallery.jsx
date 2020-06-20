import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardGallery() {
    return (
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg"></button>

        <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    ...
                </div>
            </div>
        </div>
    )
}  






export default CardGallery;