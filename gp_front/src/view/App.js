import React from 'react';
import {Route, Routes} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import EditStaffProfile from "./components/StaffProfile/EditStaffProfile";
import BreadcrumbContext from "../store/BreadcrumbContext";

const App = () => {
    const breadcrumbs = new Array();
    breadcrumbs.push({
        linkName: "主页",
        onClickHandler: () => {},
        isLast: true
    });

    return (
        <BreadcrumbContext.Provider value={{breadcrumbs}}>
            <Routes>
                <Route path={"/"} element={<HomePage />} >
                    <Route path={"/profile"} element={<EditStaffProfile />} />
                </Route>
                <Route path={"/sign_in"} element={<SignInPage />} />
                <Route path={"/sign_up"} element={<SignUpPage />} />
            </Routes>
        </BreadcrumbContext.Provider>

    );
};

export default App;