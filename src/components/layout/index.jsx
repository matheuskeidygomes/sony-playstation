import React from "react";
import './index.css';

export default function Layout(props) {

    return <>

        <div className="gradient min-h-screen">

            {props.children}

        </div>
    
    </>

}