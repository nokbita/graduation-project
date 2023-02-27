import React from 'react';
import Css from "./InputWithRightLabel.module.css";

const InputWithRightLabel = ({props: prop}) => {
    return (
        <div className={Css.inputWithRightLabel}>
            <label className={Css.label} htmlFor={prop.id}>{prop.label}</label>
            <input
                className={Css.input}
                id={prop.id}
                type={prop.inputType}
                value={prop.inputValue}
                onChange={prop.onChangeListener}
                placeholder={prop.placeholder}/>
        </div>
    );
};

InputWithRightLabel.defaultProps = {
    props: {
        id: "1",
        label: "员工编号xx",
        inputType: "text",
        inputValue: "",
        inputPlaceholder: "",
        onChangeListener: () => {}
    }
}

export default InputWithRightLabel;