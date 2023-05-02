import React, {useContext, useEffect, useState} from 'react';
import Header from "../components/Header/header";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import GpContent from "../components/GpContent/GpContent";
import Footer from "../components/Footer/Footer";
import Css from "./HomePage.module.css";

const HomePage = () => {

    return (
            <div className={Css.homePage}>
                <div className={Css.header}>
                    <Header />
                </div>
                <div className={Css.content}>
                    <div className={Css.left}>
                        <MainNavigation />
                    </div>
                    <div className={Css.right}>
                        <div className={Css.gpContent}>
                            <GpContent />
                        </div>
                    </div>
                </div>
                <div className={Css.footer}>
                    <Footer />
                </div>
            </div>

    );
};

export default HomePage;