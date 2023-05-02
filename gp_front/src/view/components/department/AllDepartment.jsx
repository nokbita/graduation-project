import React, {useEffect, useState} from 'react';
import Dialog from "../UI/Dialog";
import Css from "./AllDepartment.module.css";
import Button from "../UI/Button";
import AllDepartmentService from "../../../service/AllDepartmentService";
import AddDpt from "./AddDpt";
import AddDptService from "../../../service/AddDptService";

const AllDepartment = (props) => {




    // 获取列表
    const [departmentList, setDepartmentList] = useState([]);
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        AllDepartmentService.findAllDepartments(setDepartmentList);
    }, [toggle]);


    // 删除某一行
    const [isShowDialog, setShowDialog] = useState(false);
    const [dptId, setDptId] = useState("");
    const fakeDeleteHandler = AllDepartmentService.fakeDeleteHandler(setShowDialog, setDptId);
    const dialog = {
        title: "删除对话框",
        description: "确认删除吗？该操作不可逆！",
        cancelName: "取消",
        confirmName: "确认",
        cancel: () => {
            setShowDialog(false);
        },
        confirm: () => {
            console.log("确定删除log")
            AllDepartmentService.deleteHandler(dptId, setToggle);
            setShowDialog(false);
        }
    }

    // 添加
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isShowAddDialog, setShowAddDialog] = useState(false);
    const fakeAddHandler = AllDepartmentService.fakeAddHandler(setShowAddDialog, setName, setDescription);
    const nameProps = AddDptService.generateDptNameInput(name, setName);
    const descriptionProps = AddDptService.generateDptDescriptionInput(description, setDescription);
    const addBtn = AddDptService.addHandler(name, description, setToggle, setShowAddDialog);
    const cancelBtn = AddDptService.cancelHandler(setShowAddDialog);

    return (
        <div className={Css.background}>
            {
                isShowDialog
                    ? <Dialog
                        title={dialog.title}
                        description={dialog.description}
                        cancel={dialog.cancel}
                        confirm={dialog.confirm}
                    />
                    : null
            }
            {
                isShowAddDialog ?
                    <AddDpt
                        nameProps={nameProps}
                        descriptionProps={descriptionProps}
                        addBtn={addBtn}
                        cancelBtn={cancelBtn}
                    />
                    :null
            }

            <div className={Css.tableBox}>
                <div className={Css.addBtn}>
                    <Button btnName={"新增"} onClickHandler={fakeAddHandler} />
                </div>

                {/* 表格 */}
                <div className={Css.table}>
                    {/* 头部 */}
                    <div className={Css.header}>
                        <ul className={Css.row}>
                            <li className={Css.serial}>序号</li>
                            <li className={Css.dptId}>部门编号</li>
                            <li className={Css.name}>部门名称</li>
                            <li className={Css.description}>描述</li>
                            <li className={Css.operate}>操作</li>
                        </ul>
                    </div>
                    {/* 身体 */}
                    <div className={Css.body}>
                        {
                            departmentList.length === 0
                                ? "无数据"
                                : departmentList.map((trValue, index) => (
                                    <ul key={trValue.dptId} className={Css.row}>
                                        <li className={Css.serial}>{index}</li>
                                        <li className={Css.dptId}>{trValue.dptId}</li>
                                        <li className={Css.name}>{trValue.name}</li>
                                        <li className={Css.description}>{trValue.description}</li>
                                        <li className={Css.operate}>
                                            <span className={Css.delete} onClick={() => fakeDeleteHandler(trValue.dptId)}>删除</span>
                                        </li>
                                    </ul>
                                ))
                        }
                    </div>
                </div>

            </div> {/*tableBox*/}

        </div>
    );
};

export default AllDepartment;