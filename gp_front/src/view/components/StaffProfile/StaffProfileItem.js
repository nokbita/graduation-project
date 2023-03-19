import React from 'react';
import Css from "./StaffProfileItem.module.css";
import InputWithRightLabel from "../UI/InputWithRightLabel";

const StaffProfileItem = ({props: prop}) => {
    return (
        <div className={Css.staffProfileItem}>
            <h2 className={Css.itemName}>{prop.itemName}</h2>
            <div className={Css.bigItemBox}>
                {
                    prop.itemInfos.map((inputProp) => (
                        <div key={inputProp.id} className={Css.itemBox}>
                            <InputWithRightLabel props={inputProp}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

StaffProfileItem.defaultProps = {
    props: {
        itemName: "名称xxx",
        itemInfos: [
            {
                id: "1",
                label: "labelxxx",
                inputType: "text",
                inputValue: "",
                inputPlaceholder: "",
                onChangeListener: () => {
                }
            }
        ]
    }
}

export default StaffProfileItem;