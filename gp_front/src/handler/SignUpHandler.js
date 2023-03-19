import SignUpService from "../service/SignUpService";

const SignUpHandler = {

    /**
     * 监听input值的改变。
     * 该函数返回一个对象，用于向子组件传递state与onchange函数，实现input的双向绑定。
     * @param state
     * @param setState
     * @returns {{changeListener: (function(*): *), value}} 对象
     */
    inputChangeListener: (state, setState) => {
        return {
            value: state,
            changeListener: (e) => setState(e.target.value)
        }
    },
    /**
     * 点击同意/拒绝协议
     * @param setAgree
     * @returns {(function(): void)|*} 函数
     */
    agreementsToggleHandler(setAgree) {
        return () => {
            setAgree((pervState) => !pervState);
        };
    },
    /**
     * 点击注册
     * @param agree
     * @param regCode
     * @param email
     * @param password
     * @param setTip
     * @param navigate
     * @returns {(function(): void)|*} 函数
     */
    signUpHandler(agree, regCode, email, password, setTip, navigate) {
        return () => {
            // 验证是否勾选用户协议
            if (!SignUpService.verifyAgreements(agree, setTip)) return;

            // 开始注册
            SignUpService.signUp(regCode,email,password).then((result) =>{
                // 注册失败，提示错误信息
                if (result.meta.status !== 2000) {
                    setTip(result.meta.message);
                    return;
                }
                // 注册成功...
                console.log("注册成功...",result);
                SignUpService.signUpSucceed(navigate, result.meta.details.jwt);
            });
        }
    }
}

export default SignUpHandler;