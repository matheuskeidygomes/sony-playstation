import React from "react";
import './index.css';

export default function Layout(props) {

    return <>

        <div class="p-5 gradient min-h-screen">

            {props.children}

        </div>
    
    </>

}