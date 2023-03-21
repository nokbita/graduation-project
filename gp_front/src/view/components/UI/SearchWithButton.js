import React from 'react';
import Css from "./SearchWithButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const SearchWithButton = (props) => {
    return (
        <div className={Css.searchWithButton}>
            <div className={Css.inputBox}>
                <input className={`${Css.input} ${props.inputCss}`} type="text"
                       value={props.searchInputProp.inputValue}
                       onChange={props.searchInputProp.doubleBind} />
                {
                    props.searchInputProp.inputValue ?
                        <FontAwesomeIcon icon={faTimesCircle} className={Css.clearIcon} onClick={props.searchInputProp.clean}/>
                        : null
                }

            </div>
            <button className={Css.button} onClick={props.onClick}>
                <FontAwesomeIcon icon={faSearch} className={Css.searchIcon} />
            </button>
        </div>
    );
};

SearchWithButton.defaultProps = {
    searchInputProp: {
        inputValue: "",
        doubleBind: () => {},
        clean: () => {}
    },
    onClick: () => {}
}

export default SearchWithButton;