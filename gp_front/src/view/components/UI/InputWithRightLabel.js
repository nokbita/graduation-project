import React from 'react';
import Css from "./InputWithRightLabel.module.css";

const InputWithRightLabel = ({inputWithRightLabelProps:{props, func}}) => {
    return (
        <div className={Css.inputWithRightLabel}>
            <label className={Css.label} htmlFor={props.id}>{props.label}</label>
            <input
                className={Css.input}
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={func.changeHandler}
                placeholder={props.placeholder}/>
        </div>
    );
};

InputWithRightLabel.defaultProps = {
    inputWithRightLabelProps: {
        props: {
            id: "ik",
            label: "员工编号"
        },
        func: () => {}
    }
}

export default InputWithRightLabel;