import React from 'react';
import Css from "./InputTableCell.module.css";

const InputTableCell = (props) => {
    return (
        <div className={Css.inputTableCell}>
            <input
                type="text"
                value={props.value}
                onChange={props.onChangeHandler}
                disabled={props.isDisabled}
                hidden={props.hidden}
            />
        </div>
    );
};

export default InputTableCell;