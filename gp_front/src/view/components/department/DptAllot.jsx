import React, {useEffect, useState} from 'react';
import Css from "./DptAllot.module.css";
import AllDepartmentService from "../../../service/AllDepartmentService";
import AllotPanel from "./AllotPanel";


const DptAllot = () => {

    // 获取所有staff
    const [staffList, setStaffList] = useState([]);
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        AllDepartmentService.findAllStaff(setStaffList);
    }, [toggle]);

    // 分配部门
    const [isShowAllotPanel, setShowAllotPanel] = useState(false);
    const [staffId, setStaffId] = useState("");
    const [departmentList, setDepartmentList] = useState([]);
    const fakeAllotHandler = AllDepartmentService.fakeAllotHandler(setShowAllotPanel, setStaffId, setDepartmentList);
    // 分配
    const allotHandler = AllDepartmentService.allotHandler(staffId, setToggle, setShowAllotPanel);



    return (
        <div className={Css.background}>

            {
                isShowAllotPanel
                ? <AllotPanel
                    departmentList={departmentList}
                    allotHandler={allotHandler}
                    setShowAllotPanel={setShowAllotPanel}
                    />
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
                            <li className={Css.operate}>操作</li>
                        </ul>
                    </div>
                    {/* 身体 */}
                    <div className={Css.body}>
                        {
                            staffList.map((trValue, index) => (
                                <ul key={trValue.staffId} className={Css.row}>
                                    <li className={Css.serial}>{index}</li>
                                    <li className={Css.staffId}>{trValue.staffId}</li>
                                    <li className={Css.name}>{trValue.name}</li>
                                    <li className={Css.post}>{trValue.post}</li>
                                    <li className={Css.department}>{trValue.department}</li>
                                    <li className={Css.operate}>
                                        <span className={Css.allot} onClick={() => {fakeAllotHandler(trValue.staffId)}}>分配部门</span>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                </div> {/* table */}

            </div> {/* tableBox */}
        </div>
    );
};

export default DptAllot;