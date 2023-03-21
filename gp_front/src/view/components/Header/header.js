import React from 'react';
import Css from "./Header.module.css";
import SearchWithButton from "../UI/SearchWithButton";
import Profile from "../Profile/Profile";

const Header = () => {

    return (
        <div className={Css.header}>
            <div className={Css.titleBox}>
                <h1 className={Css.title}>基于前后端架构分离的员工管理系统的设计与实现</h1>
            </div>
            {/*<div className={Css.searchBox}>*/}
            {/*    <SearchWithButton />*/}
            {/*</div>*/}
            <div className={Css.profileBox}>
                <Profile />
            </div>
        </div>
    );
};

export default Header;