import React from 'react';
import Css from "./MainNavigation.module.css";
import BlockNav from "./BlockNav";
import {useNavigate} from "react-router-dom";
import MainNavigationService from "../../../service/MainNavigationService";

const MainNavigation = () => {
    const navigate = useNavigate();

    const staffMgt = MainNavigationService.staffMgt(navigate);
    const departmentMgt = MainNavigationService.departmentMgt(navigate);
    const roleMgt = MainNavigationService.roleMgt(navigate);
    const clockingInMgt = MainNavigationService.clockingInMgt(navigate);
    return (
        <div className={Css.mainNavigation}>
            <BlockNav blockNavProps={staffMgt} />
            <BlockNav blockNavProps={departmentMgt} />
            <BlockNav blockNavProps={roleMgt} />
            <BlockNav blockNavProps={clockingInMgt} />
        </div>
    );
};

export default MainNavigation;