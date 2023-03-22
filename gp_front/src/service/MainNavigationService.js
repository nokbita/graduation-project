import {faUser} from "@fortawesome/free-solid-svg-icons";
import MainNavigationRequest from "./request/MainNavigationRequest";

const MainNavigationService = {

    /**
     * 生成 BlockNav 组件的属性，返回对象。
     * @param navigate
     * @returns {{subLinks: [{link: link, linkName: string}, {link: link, linkName: string}], mainLink: {link: mainLink.link, frontIcon: IconDefinition, linkName: string}}}
     */
    blockNavProps: (navigate) => {

        const toStaff = () => {
            MainNavigationRequest.toStaff(navigate);
        }
        const toUser = () => {
            MainNavigationRequest.toUser(navigate);
        }

        return {
            mainLink: {
                frontIcon: faUser,
                link: () => {},
                linkName: "账户管理"
            },
            subLinks: [
                {
                    link: () => {
                        toStaff(navigate);
                    },
                    linkName: "员工管理"
                },
                // {
                //     link: () => {
                //         toUser(navigate);
                //     },
                //     linkName: "用户管理"
                // }
            ]
        }
    },

}

export default MainNavigationService;