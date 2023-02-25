import React from 'react';
import Css from "./MainNavigation.module.css";
import MainLink from "./MainLink";
import SubLink from "./SubLink";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
    return (
        <div className={Css.mainNavigation}>
            <ul>
                <li>
                    <MainLink fontIcon={faUser} />
                </li>
                <li>
                    <SubLink />
                </li>
                <li>
                    <SubLink  />
                </li>
            </ul>
        </div>
    );
};

export default MainNavigation;