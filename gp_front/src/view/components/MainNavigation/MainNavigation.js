import React, {useContext} from 'react';
import Css from "./MainNavigation.module.css";
import BlockNav from "./BlockNav";
import {useNavigate} from "react-router-dom";
import MainNavigationService from "../../../service/MainNavigationService";
import Context from "../../../store/Context";

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