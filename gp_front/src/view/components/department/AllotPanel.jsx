import React, {useEffect, useState} from 'react';
import BackgroundWhite from "../UI/BackgroundWhite";
import Css from "./AllotPanel.module.css";
import Backdrop from "../UI/Backdrop";
import Button from "../UI/Button";

const AllotPanel = (props) => {

    return (
        <Backdrop>
            <BackgroundWhite className={Css.AllotPanel}>
                <h2>分配部门</h2>
                <table>
                    <thead>
                    <tr>
                        <th>序号</th>
                        <th>部门编号</th>
                        <th>部门名称</th>
                        <th>部门描述</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.departmentList.length === 0
                            ? <tr><td colSpan={"5"}>无数据</td></tr>
                            : props.departmentList.map((trValue, index) => (
                                <tr key={trValue.dptId} className={Css.row}>
                                    <td className={Css.serial}>{index}</td>
                                    <td className={Css.dptId}>{trValue.dptId}</td>
                                    <td className={Css.name}>{trValue.name}</td>
                                    <td className={Css.description}>{trValue.description}</td>
                                    <td className={Css.operate}>
                                        <span className={Css.allot} onClick={() => props.allotHandler(trValue.dptId)}>分配</span>
                                    </td>
                                </tr>))
                    }
                    </tbody>
                </table>
                <Button className={Css.cancel} btnName={"取消"} onClickHandler={() => props.setShowAllotPanel(false)} />
            </BackgroundWhite>
        </Backdrop>
    );
};

export default AllotPanel;