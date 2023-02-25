import React, {useState} from 'react';
import Css from "./SignUp.module.css";
import InputWithLabel from "../UI/InputWithLabel";
import Button from "../UI/Button";
import BackdropWhite from "../UI/BackdropWhite";
import {Link} from "react-router-dom";
import SignUpHandler from "../../../handler/SignUpHandler";

const SignUp = () => {

    // input状态、监听改变
    const [regCode, setRegCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tip, setTip] = useState("");
    const [agree, setAgree] = useState(false);


    // input值双向绑定
    const regCodeListener = SignUpHandler.inputChangeListener(regCode, setRegCode);
    const emailListener = SignUpHandler.inputChangeListener(email, setEmail);
    const passwordListener = SignUpHandler.inputChangeListener(regCode, setRegCode);
    // 点击事件，是否同意协议
    const agreementsHandler = SignUpHandler.agreementsToggleHandler(setAgree);
    // 注册
    const signUpHandler = SignUpHandler.signUpHandler(agree, regCode, email, password, setTip);


    return (
        <div className={Css.backdrop}>
            <BackdropWhite>
                <div className={Css.signInComp}>
                    <div className={Css.titleBox}>
                        <h2 className={Css.title}>注册</h2>
                    </div>
                    <div className={Css.inputBox}>
                        <InputWithLabel listener={regCodeListener} label="注册码" type="text" id="regCode" />
                    </div>
                    <div className={Css.inputBox}>
                        <InputWithLabel listener={emailListener} label="邮箱" type="text" id="email" />
                    </div>
                    <div className={Css.inputBox}>
                        <InputWithLabel listener={passwordListener} label="密码" type="password" id="signUp_password" placeholder="8~12位，包括数字、字母和符号" />
                    </div>
                    <div className={Css.tipBox}>
                        <p className={Css.tip}>{tip}</p>
                    </div>
                    <div className={Css.btnBox} onClick={signUpHandler}>
                        <Button btnName="注册" />
                    </div>
                    <div className={Css.agreementsBox}>
                        <input className={Css.checkbox} type="checkbox" value={agree} onClick={agreementsHandler} />&nbsp;&nbsp;
                        <span>已阅读并同意</span>&nbsp;&nbsp;<a href="#">用户协议</a>&nbsp;&nbsp;<a href="#">保密协议</a>
                    </div>
                    <div className={Css.footerBox}>
                        <p>已有帐户？<Link to="/sign_in">登录</Link></p>
                    </div>
                </div>
            </BackdropWhite>
        </div>
    );
};

export default SignUp;