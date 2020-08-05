import React from 'react'
import './loader.sass'
export default function Loader({active, msg}) {
    return (
        <div className={`Loader ${active}`}>
            <div className="inner">
                <div className="multi-ripple">
                    <div></div>
                    <div></div>
                </div>
                <div className="msg is-primary">
                {msg}
                </div>
            </div>
         
            
        </div>
    )
}
