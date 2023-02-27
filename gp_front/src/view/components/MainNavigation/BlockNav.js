import React, {useState} from 'react';
import Css from "./BlockNav.module.css";
import MainLink from "./MainLink";
import SubLink from "./SubLink";
import BlockNavHandler from "../../../handler/BlockNavHandler";
import PropTypes from "prop-types";

const BlockNav = ({blockNavProps:{mainLink, subLinks}}) => {
    const [isExpand, setExpand] = useState(false);
    // 记录点击的子链接是哪个，用于更改该链接的颜色
    const [clickedNum, setClickedNum] = useState(-1);
    const clickMainLinkHandler = BlockNavHandler.clickMainLink(setExpand, setClickedNum, subLinks[0].link);
    const clickSubLinkHandler = BlockNavHandler.clickSubLink(setClickedNum);

    return (
        <div className={Css.blockNav}>
            <div onClick={clickMainLinkHandler} className={Css.mainLinkBox}>
                <MainLink
                    linkName={mainLink.linkName}
                    frontIcon={mainLink.frontIcon}
                    isExpand={isExpand} />
            </div>
            {
                isExpand ?
                    <ul>
                        {
                            subLinks.map((subLink, index) => (
                                <li
                                    key={index}
                                    onClick={() => {clickSubLinkHandler(index, subLink.link)}}
                                    className={clickedNum === index ? Css.subLinkColor : null}
                                >
                                    <SubLink linkName={subLink.linkName} />
                                </li>
                            ))
                        }
                    </ul>
                    : null
            }

        </div>

    );
};

BlockNav.propTypes = {
    blockNavProps: PropTypes.shape({
        mainLink: PropTypes.shape({
            frontIcon: PropTypes.object,
            link: PropTypes.func,
            linkName: PropTypes.string
        }),

        subLinks: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.func,
                linkName: PropTypes.string
            })
        )
    })

}


export default BlockNav;