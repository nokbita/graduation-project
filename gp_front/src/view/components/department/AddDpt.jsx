import React, {useState} from 'react';
import InputWithRightLabel from "../UI/InputWithRightLabel";
import Button from "../UI/Button";
import Backdrop from "../UI/Backdrop";
import BackgroundWhite from "../UI/BackgroundWhite";
import Css from "./AddDpt.module.css";

const AddDpt = (props) => {


    return (
        <Backdrop>
            <BackgroundWhite className={Css.addDpt}>
                <h2>添加部门</h2>
                <InputWithRightLabel props={props.nameProps} />
                <InputWithRightLabel props={props.descriptionProps} />

                <div className={Css.btnBox}>
                    <Button onClickHandler={props.cancelBtn} btnName={"取消"} />
                    <Button onClickHandler={props.addBtn} btnName={"新增"} />
                </div>
            </BackgroundWhite>
        </Backdrop>
    );
};

export default AddDpt;