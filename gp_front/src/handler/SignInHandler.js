import SignInService from "../service/SignInService";

const SignInHandler = {


    /**
     * 登录
     * @param account
     * @param password
     * @param setTip
     * @returns {(function(): void)|*} 函数
     */
    signInHandler: (account, password, setTip) => {
        return () => {
            SignInService.signIn(account, password).then((result) => {
                // 登陆失败
                if (result.meta.status !== 2000) {
                    setTip(result.meta.message);
                    return;
                }
                // 登陆成功...
            });
        };
    },

    /**
     * 监听input值的改变
     * 该函数返回一个对象，用于向子组件传递state与onchange函数，实现input的双向绑定。
     * @param state
     * @param setState
     * @returns {{changeListener: (function(*): *), value}} 对象
     */
    inputChangeListener: (state, setState) => {
        return {
            value: state,
            changeListener: (e) => setState(e.target.value)
        };
    }
}

export default SignInHandler;