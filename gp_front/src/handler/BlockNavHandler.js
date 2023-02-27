const BlockNavHandler = {


    clickMainLink: (setExpand, setNum, subLink) => {
        return () => {
            setExpand(prevState => !prevState);
            setNum(0);
            subLink();
        }

    },

    clickSubLink: (setClickedNum) => {
        return (index, subLink) => {
            setClickedNum(index);
            subLink();
        }
    }

}

export default BlockNavHandler;