import React, {useRef} from 'react';
import Css from "./AccountStaffPage.module.css";
import SearchWithButton from "../components/UI/SearchWithButton";
import Button from "../components/UI/Button";
import Table from "../components/Table/Table";
import BackgroundWhite from "../components/UI/BackgroundWhite";
import AccountStaffPageService from "../../service/AccountStaffPageService";

const AccountStaffPage = () => {
    const selectField = useRef();
    const searchBtn = AccountStaffPageService.searchHandler();
    return (
        <BackgroundWhite className={Css.accountStaffPage}>
            <div className={Css.header}>
                <div className={Css.search}>
                    <select ref={selectField} className={Css.select}>
                        <option value="staffId" >员工编号</option>
                        <option value="name">姓名</option>
                        <option value="email">邮箱</option>
                        <option value="phone">手机</option>
                        <option value="post">岗位</option>
                    </select>
                    <SearchWithButton inputCss={Css.inputCss} onClick={searchBtn}/>
                </div>
                <div className={Css.addBtn}>
                    <Button btnName={"新增"} />
                </div>
            </div>
            <div className={Css.table}>
                <Table />
            </div>
        </BackgroundWhite>
    );
};

export default AccountStaffPage;