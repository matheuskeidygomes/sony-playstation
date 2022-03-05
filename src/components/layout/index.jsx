import React from "react";
import './index.css';

export default function Layout(props) {

    return <>

        <div class="gradient p-5 min-h-screen">

            {props.children}

        </div>
    
    </>

}