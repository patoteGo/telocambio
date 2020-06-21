import React from 'react'
import './loader.sass'
export default function Loader({active}) {
    return (
        <div className={`Loader ${active}`}>
            <div className="inner">
            <div class="multi-ripple">
                <div></div>
                <div></div>
            </div>
            </div>
        </div>
    )
}
