import React from 'react';
import Backdrop from "./Backdrop";
import Button from "./Button";
import css from "./Dialog.module.css"
import BackgroundWhite from "./BackgroundWhite";


const Dialog = (props) => {
    return (
        <Backdrop>
            <BackgroundWhite className={css.dialog}>
                <h2 className={css.title}>{props.title}</h2>
                <div className={css.description}>{props.description}</div>
                <div className={css.btnBox}>
                    <Button onClickHandler={props.cancel} btnName={props.cancelName} className={css.cancel} />
                    <Button onClickHandler={props.confirm} btnName={props.confirmName} className={css.confirm} />
                </div>
            </BackgroundWhite>
        </Backdrop>
    );
};

Dialog.defaultProps = {
    title: "对话框",
    description: "确认xxx吗？该操作不可逆！",
    cancelName: "取消",
    confirmName: "确认",
    cancel: () => {},
    confirm: () => {}
}

export default Dialog;