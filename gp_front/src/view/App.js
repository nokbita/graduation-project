import React, { useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import AppService from "../service/AppService";
import {Path} from "../service/tools/StringConst";

import AccountStaffPage from "./pages/AccountStaffPage";



const App = () => {



    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        AppService.signedInCheckHandler(location, navigate);
    }, [location.pathname]);


    return (
        <Routes>
            <Route path={Path.ROOT} element={<HomePage />} >
                <Route path={Path.ACCOUNT_STAFF} element={<AccountStaffPage />} />
                <Route path={Path.ACCOUNT_STAFF + "/:pageNum"} element={<AccountStaffPage />} />
            </Route>
            <Route path={"/sign-in"} element={<SignInPage />} />
            <Route path={"/sign-up"} element={<SignUpPage />} />
        </Routes>
    );
};

export default App;