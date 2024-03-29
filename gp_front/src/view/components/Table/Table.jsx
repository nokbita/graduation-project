import React, {useContext, useEffect, useRef, useState} from 'react';
import Css from "./Table.module.css";
import Button from "../UI/Button";
import TableService from "../../../service/TableService";
import {useNavigate} from "react-router-dom";
import Backdrop from "../UI/Backdrop";
import StaffProfile from "../StaffProfile/StaffProfile";
import Dialog from "../UI/Dialog";
import DialogContext from "../../../store/DialogContext";

const Table = (props) => {

    const pageNum = props.pageNum;
    const pageSize = props.pageSize;
    const [totalPages, setTotalPages] = props.totalPagesState;
    const [staffList, setStaffList] = props.staffListState;
    const [pagination, setPagination] = props.paginationState;
    const navigate = useNavigate();
    const [isShowStaffProfile, setShowStaffProfile] = props.showStaffProfileState;
    const [staffEmail, setStaffEmail] = useState("");
    const [staffPhone, setStaffPhone] = useState("");
    const goPageInput = useRef(null);

    const previousPageHandler = TableService.previousPageHandler(pageNum, totalPages, navigate, pagination,  setPagination);
    const nextPageHandler = TableService.nextPageHandler(pageNum, totalPages, navigate, pagination,  setPagination);
    const clickPaginationHandler = TableService.clickPaginationHandler(navigate);
    const goPageHandler = TableService.goPageHandler(totalPages, navigate);
    const moreHandler = TableService.moreHandler(setStaffPhone, setStaffEmail, setShowStaffProfile, props.setUpdate);

    const showDialogState = useState(false);
    const [isShowDialog, setShowDialog] = showDialogState;
    const [emailByDialog, setEmailByDialog] = useState("");
    const deleteHandler = TableService.deleteHandler(setShowDialog, setEmailByDialog);
    const dialogContext = useContext(DialogContext);


    return (
        <div className={Css.background}>
            {
                isShowDialog
                    ? <Dialog
                        title={dialogContext.title}
                        description={dialogContext.description}
                        cancel={() => dialogContext.cancel(setShowDialog)}
                        confirm={() => dialogContext.confirm(setShowDialog, emailByDialog)}
                    />
                    : null
            }
        {
            isShowStaffProfile
                ? <Backdrop>
                    <div className={Css.staffProfile}>
                        <StaffProfile
                            staffPhone={staffPhone}
                            staffEmail={staffEmail}
                            isSetting={false}
                            isUpdate={props.isUpdate}
                            setUpdateList={props.setUpdateList}
                            setShowStaffProfile={setShowStaffProfile}
                        />
                    </div>
                    </Backdrop>
                : null
        }

        <div className={Css.tableBox}>
            {/* 表格 */}
            <div className={Css.table}>
                {/* 头部 */}
                <div className={Css.header}>
                    <ul className={Css.row}>
                        <li className={Css.serial}>序号</li>
                        <li className={Css.staffId}>员工编号</li>
                        <li className={Css.name}>姓名</li>
                        <li className={Css.post}>岗位名称</li>
                        <li className={Css.department}>所在部门</li>
                        <li className={Css.phone}>手机</li>
                        <li className={Css.email}>邮箱</li>
                        <li className={Css.operate}>操作</li>
                    </ul>
                </div>
                {/* 身体 */}
                <div className={Css.body}>
                    {
                        staffList.map((trValue, index) => (
                            <ul key={trValue.staffId} className={Css.row}>
                                <li className={Css.serial}>
                                    {index + 1 + pageSize*(pageNum-1)}
                                </li>
                                <li className={Css.staffId}>{trValue.staffId}</li>
                                <li className={Css.name}>{trValue.name}</li>
                                <li className={Css.post}>{trValue.post}</li>
                                <li className={Css.department}>{trValue.department}</li>
                                <li className={Css.phone}>{trValue.phone}</li>
                                <li className={Css.email}>{trValue.email}</li>
                                <li className={Css.operate}>
                                    <span className={Css.more} onClick={() => {moreHandler(trValue.phone, trValue.email)}}>更多</span>
                                    <span className={Css.delete} onClick={() => {deleteHandler(trValue.email)}}>删除</span>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>

            {/* 底部导航 */}
            {
                staffList.length !== 0
                ? <div className={Css.pagination}>
                    <div className={Css.total}>总页数：{totalPages}</div>
                    <div className={Css.paginationBox}>
                        <div className={Css.previousBox}>
                            {
                                pageNum === 1
                                    ? <Button btnName={"上一页"} className={Css.previousPageDisabled} />
                                    : <Button btnName={"上一页"} className={Css.previousPage} onClickHandler={previousPageHandler} />
                            }
                        </div>
                        <ul className={Css.row}>
                            {
                                pagination.map((page, index) => (
                                    <li
                                        key={page}
                                        className={page === pageNum ? Css.paginationActive : null}
                                        onClick={() => (clickPaginationHandler(page,totalPages, setPagination))}
                                    >{page}</li>
                                ))
                            }
                        </ul>
                        <div className={Css.nextBox}>
                            {
                                pageNum === totalPages
                                    ? <Button btnName={"下一页"} className={Css.nextPageDisabled} />
                                    : <Button btnName={"下一页"} className={Css.nextPage} onClickHandler={nextPageHandler} />
                            }
                        </div>
                        <div className={Css.goPageBox}>
                            <input ref={goPageInput} type="text" placeholder={"页码"} className={Css.goPageInput}/>
                            <Button btnName={"跳转"}
                                    className={Css.goPageBtn}
                                    onClickHandler={() => (goPageHandler(goPageInput.current.value))} />
                        </div>
                    </div>
                </div>
                : <div>无数据</div>
            }
        </div>
    </div>
    );
};

const TABLE_DATA = {
    tbody: [
        {
            staffId: "a0001",
            name: "Tom",
            post: "Java 开发",
            department: "研发部",
            phone: "12345678912",
            email: "123@qq.com"
        },
        {
            staffId: "a0002",
            name: "Tom",
            post: "Java 开发",
            department: "研发部",
            phone: "12345678912",
            email: "123@qq.com"
        }
    ]
};

Table.defaultProps = {
    tbody: TABLE_DATA.tbody,
    pageNum: 1,
    pageSize: 10,
    totalPageNum: 50,

}

export default Table;