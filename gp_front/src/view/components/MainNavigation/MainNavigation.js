import React from 'react';
import Css from "./MainNavigation.module.css";
import BlockNav from "./BlockNav";
import {useNavigate} from "react-router-dom";
import MainNavigationService from "../../../service/MainNavigationService";

const MainNavigation = () => {

    const navigate = useNavigate();
    const blockNavProps = MainNavigationService.blockNavProps(navigate);

    return (
        <div className={Css.mainNavigation}>
           <BlockNav blockNavProps={blockNavProps} />
           {/*<BlockNav  />*/}
        </div>
    );
};

export default MainNavigation;