import React, { useState} from "react";
import Css from "./SignIn.module.css";
import InputWithLabel from "../UI/InputWithLabel";
import Button from "../UI/Button";
import BackgroundWhite from "../UI/BackgroundWhite";
import {Link, useNavigate} from "react-router-dom";
import SignInHandler from "../../../handler/SignInHandler";
import SignInService from "../../../service/SignInService";


const SignIn = () => {

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [tip, setTip] = useState("");
    const navigate = useNavigate();

    // input值双向绑定
    const accountChangeListener = SignInHandler.inputChangeListener(account, setAccount);
    const passwordChangeListener = SignInHandler.inputChangeListener(password, setPassword);
    // 登录
    const signInHandler = SignInService.signInHandler(account, password, setTip, navigate);

    return (
        <div className={Css.backdrop}>
            <BackgroundWhite>
                <div className={Css.signInComp}>
                    <div className={Css.titleBox}>
                        <h2 className={Css.title}>登录</h2>
                    </div>
                    <div className={Css.inputBox}>
                        <InputWithLabel listener={accountChangeListener} label="账号" type="text" id="account"/>
                    </div>
                    <div className={Css.inputBox}>
                        <InputWithLabel listener={passwordChangeListener} label="密码" type="password" id="signIn_password"
                                        placeholder="8~12位"/>
                    </div>
                    <div className={Css.tipBox}>
                        <p className={Css.tip}>{tip}</p>
                    </div>
                    <div className={Css.btnBox} onClick={signInHandler}>
                        <Button btnName="登录"/>
                    </div>
                    <div className={Css.footerBox}>
                        <p>还没有账户？<Link to="/sign-up">注册</Link></p>
                    </div>
                </div>
            </BackgroundWhite>
        </div>

    );
};

export default SignIn;