import React from 'react';
import Css from "./GpContent.module.css";
import {Outlet} from "react-router-dom"

const GpContent = () => {
    return (
        <div className={Css.gpContent}>
            <Outlet/>
        </div>
    );
};

export default GpContent;