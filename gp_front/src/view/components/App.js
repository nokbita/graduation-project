import React from 'react';
import {Route, Routes} from "react-router-dom";
import SignInPage from "../SignInPage";
import SignUpPage from "../SignUpPage";
import HomePage from "../HomePage";



const App = () => {
    return (
        <>









            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/sign_in"} element={<SignInPage />} />
                <Route path={"/sign_up"} element={<SignUpPage />} />
            </Routes>
        </>

    );
};

export default App;