import React from 'react'
import "./load.scss"

function Load({ load }) {
    const css = `                    body {
        background: #FFF;
        font-family: 'Bangers', cursive;
        padding-top: 20%;
        margin: auto;
        overflow-y: hidden !important;
    }`
    if (load < 100) {
        return (
            <div class="loader-container">
                <style>
                    {css}
                </style>
                <div class="loader book">
                    <figure class="page"></figure>
                    <figure class="page"></figure>
                    <figure class="page"></figure>
                </div>
                <h4>Loading</h4>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Load