import SignInService from "../service/SignInService";

const SignInHandler = {



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