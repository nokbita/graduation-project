import React from 'react';
import Css from "./SearchWithButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const SearchWithButton = () => {
    return (
        <div className={Css.searchWithButton}>
            <div className={Css.inputBox}>
                <input className={Css.input} type="text" />
                <FontAwesomeIcon icon={faTimesCircle} className={Css.clearIcon}/>
            </div>
            <button className={Css.button}>
                <FontAwesomeIcon icon={faSearch} className={Css.searchIcon} />
            </button>
        </div>
    );
};

export default SearchWithButton;