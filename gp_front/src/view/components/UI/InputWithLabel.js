import React from 'react';
import Css from "./InputWithLabel.module.css";

const InputWithLabel = (props) => {

    return (
        <div>
            <label className={Css.label} htmlFor={props.id}>{props.label}</label>
            <input
                className={Css.input}
                id={props.id}
                type={props.type}
                value={props.listener.value}
                onChange={props.listener.changeListener}
                placeholder={props.placeholder}/>
        </div>
    );
};

InputWithLabel.defaultProps = {
    listener: {
        value: ""
    }
}

export default InputWithLabel;