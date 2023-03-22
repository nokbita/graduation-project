import React, {useEffect, useRef, useState} from 'react';
import Css from "./AccountStaffPage.module.css";
import SearchWithButton from "../components/UI/SearchWithButton";
import Button from "../components/UI/Button";
import Table from "../components/Table/Table";
import BackgroundWhite from "../components/UI/BackgroundWhite";
import AccountStaffPageService from "../../service/AccountStaffPageService";
import {useNavigate, useParams} from "react-router-dom";
import TableService from "../../service/TableService";
import {Path} from "../../service/tools/StringConst";
import DialogContext from "../../store/DialogContext";

const AccountStaffPage = () => {
    let {pageNum} = useParams();
    if (!pageNum) {
        pageNum = +1;
    }
    pageNum = Number(pageNum);
    const pageSize = 5;

    const selectField = useRef();
    const [inputValue, setInputValue] = useState("");
    const doubleBind = (e) => {
        setInputValue(e.target.value);
    }
    const clean = () => {
        setInputValue("");
        setUpdateList(true);
    }
    const searchInputProp = {
        inputValue: inputValue,
        doubleBind: doubleBind,
        clean: clean
    }
    // 指定 staffProfile 的按钮类型。
    const [isUpdate, setUpdate] = useState(false);
    const totalPagesState = useState(1);
    const [totalPages, setTotalPages] = totalPagesState;
    const staffListState = useState([]);
    const [staffList, setStaffList] = staffListState;
    const navigate = useNavigate();
    const searchBtn = AccountStaffPageService.searchHandler(setStaffList, pageNum, pageSize, setTotalPages);

    const [updateList, setUpdateList] = useState(false);
    const showStaffProfileState = useState(false);
    const [isShowStaffProfile, setShowStaffProfile] = showStaffProfileState;
    const addBtn = AccountStaffPageService.addHandler(setShowStaffProfile, setUpdate);


    const paginationState = useState([]);
    const [pagination, setPagination] = paginationState;
    useEffect(() =>{
        TableService.getStaffListHandler(pageNum, pageSize, setTotalPages, setStaffList, inputValue, selectField.current);
    },[pageNum, updateList]);

    useEffect(() =>{
        TableService.getPagination(1, pageNum, totalPages, setPagination);
    },[totalPages]);



    const dialog = {
        title: "删除对话框",
        description: "确认删除吗？该操作不可逆！",
        cancelName: "取消",
        confirmName: "确认",
        cancel: (setShowDialog) => {
            setShowDialog(false);
        },
        confirm: (setShowDialog, emailByDialog) => {
            AccountStaffPageService.deleteHandler(emailByDialog);
            setShowDialog(false);
            setUpdateList(true);
        }
    }

    return (
        <DialogContext.Provider value={dialog}>
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
                        <SearchWithButton searchInputProp={searchInputProp}
                                          inputCss={Css.inputCss}
                                          onClick={() => {
                                              navigate(Path.ROOT + Path.ACCOUNT_STAFF + "/1");
                                              searchBtn(inputValue, selectField.current)
                                          }}/>
                    </div>
                    <div className={Css.addBtn}>
                        <Button btnName={"新增"} onClickHandler={addBtn} />
                    </div>
                </div>
                <div className={Css.table}>
                    <Table
                        setShowStaffProfile={setShowStaffProfile}
                        staffListState={staffListState}
                        pageNum={pageNum}
                        pageSize={pageSize}
                        totalPagesState={totalPagesState}
                        paginationState={paginationState}
                        setUpdateList={setUpdateList}

                        showStaffProfileState={showStaffProfileState}
                        isUpdate={isUpdate}
                        setUpdate={setUpdate}
                    />
                </div>
            </BackgroundWhite>
        </DialogContext.Provider>
    );
};

export default AccountStaffPage;