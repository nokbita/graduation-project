import React from 'react';
import Header from "./components/header";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import InputWithRightLabel from "./components/UI/InputWithRightLabel";


const HomePage = () => {
    return (
        <>
            <Header />
            <MainNavigation />
            <InputWithRightLabel />
        </>
    );
};

export default HomePage;