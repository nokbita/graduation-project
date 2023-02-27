import React from 'react';
import {Route, Routes} from "react-router-dom";
import SignInPage from "../SignInPage";
import SignUpPage from "../SignUpPage";
import HomePage from "../HomePage";
import InputWithRightLabel from "./UI/InputWithRightLabel";



const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<InputWithRightLabel />} />
                <Route path={"/"} element={<HomePage />} >
                    <Route path={"/account/staff"} element={<HomePage />} />
                    <Route path={"/account/user"} element={<HomePage />} />
                </Route>
                <Route path={"/sign_in"} element={<SignInPage />} />
                <Route path={"/sign_up"} element={<SignUpPage />} />
            </Routes>
        </>

    );
};

export default App;