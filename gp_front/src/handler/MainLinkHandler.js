const MainLinkHandler = {


    /**
     * 切换展开/收起
     * @param setExpand
     * @returns {(function(): void)|*} 函数
     */
    toggleExpand(setExpand) {
        return () => {
            setExpand(prevState => !prevState);
        };
    }
}

export default MainLinkHandler;