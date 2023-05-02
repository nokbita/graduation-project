import {faUser, faNetworkWired, faAddressCard, faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import MainNavigationRequest from "./request/MainNavigationRequest";
import MainNavigationController from "../controller/MainNavigationController";

const MainNavigationService = {

    /**
     * 生成 staffMgt 的属性，返回对象。
     * @param navigate
     * @returns {{subLinks: [{link: link, linkName: string}, {link: link, linkName: string}], mainLink: {link: mainLink.link, frontIcon: IconDefinition, linkName: string}}}
     */
    staffMgt: (navigate) => {

        const toStaff = () => {
            MainNavigationRequest.toStaff(navigate);
        }

        return {
            mainLink: {
                frontIcon: faUser,
                link: () => {
                    toStaff(navigate);
                },
                linkName: "人员管理"
            },
            subLinks: [
                {
                    link: () => {
                        toStaff(navigate);
                    },
                    linkName: "所有人员"
                },
                {
                    link: () => {
                        // toUser(navigate);
                    },
                    linkName: "入职管理"
                },
                {
                    link: () => {
                        // toUser(navigate);
                    },
                    linkName: "转正管理"
                },
                {
                    link: () => {
                        // toUser(navigate);
                    },
                    linkName: "离职管理"
                }
            ]
        }
    },

    departmentMgt(navigate) {
        const toDepartment = () => {
            MainNavigationController.departmentNavigator(navigate);
        }

        return {
            mainLink: {
                frontIcon: faNetworkWired,
                link: () => {
                    toDepartment(navigate);
                },
                linkName: "组织管理"
            },
            subLinks: [
                {
                    link: () => {
                        toDepartment(navigate);
                    },
                    linkName: "所有部门"
                },
                {
                    link: () => {
                        MainNavigationController.allotDptNavigator(navigate);
                    },
                    linkName: "部门分配"
                }
            ]
        }
    },

    roleMgt(navigate) {
        const toStaff = () => {
            MainNavigationRequest.toStaff(navigate);
        }
        // const toUser = () => {
        //     MainNavigationRequest.toUser(navigate);
        // }

        return {
            mainLink: {
                frontIcon: faAddressCard,
                link: () => {},
                linkName: "角色管理"
            },
            subLinks: [
                {
                    link: () => {
                        toStaff(navigate);
                    },
                    linkName: "所有角色"
                },
                {
                    link: () => {
                        // toUser(navigate);
                    },
                    linkName: "角色分配"
                }
            ]
        }
    },
    clockingInMgt(navigate) {
        const toStaff = () => {
            MainNavigationRequest.toStaff(navigate);
        }
        // const toUser = () => {
        //     MainNavigationRequest.toUser(navigate);
        // }

        return {
            mainLink: {
                frontIcon: faCalendarDays,
                link: () => {},
                linkName: "考勤管理"
            },
            subLinks: [
                {
                    link: () => {
                        toStaff(navigate);
                    },
                    linkName: "所有记录"
                },
                {
                    link: () => {
                        // toUser(navigate);
                    },
                    linkName: "审批中心"
                },
                {
                    link: () => {
                        // toUser(navigate);
                    },
                    linkName: "打卡"
                },
                {
                    link: () => {
                        // toUser(navigate);
                    },
                    linkName: "加班"
                },
                {
                    link: () => {
                        // toUser(navigate);
                    },
                    linkName: "请假"
                }
            ]
        }
    }
}

export default MainNavigationService;