import TableController from "../controller/TableController";
import Tools from "./tools/Tools";
import {Path} from "./tools/StringConst";
import {tab} from "@testing-library/user-event/dist/tab";
import Css from "../view/components/Table/Table.module.css";
import React from "react";
import {Link} from "react-router-dom";

const TableService = {

    getStaffListHandler(pageNum, pageSize, setTotalPages, setStaffList, inputValue, selectField) {
        TableController.getStaffListRequester(pageNum, pageSize, inputValue, selectField).then(result => {
            if (result?.meta.status === 2000) {
                Tools.printSucceedLog(result);
                setStaffList(result.data.staffs);
                setTotalPages(result.meta.details.pagination.totalPages);
                return;
            }
            Tools.printFailedLog(result);
        });
    },
    previousPageHandler(pageNum, totalPages, navigate, pagination, setPagination) {
        const previous = () => {
            if (pageNum === 1) {
                return;
            }
            if (pageNum === pagination[0]) {
                TableService.getPagination(0, pageNum, totalPages, setPagination);
            }
            pageNum -= 1;
            TableController.paginationNavigator(pageNum, navigate);
        }
        return previous;
    },
    nextPageHandler(pageNum, totalPages, navigate, pagination, setPagination) {
        const next = () => {
            if (pageNum === totalPages) {
                return;
            }

            if (pageNum === pagination[pagination.length - 1]) {
                TableService.getPagination(1, pageNum,totalPages, setPagination);
            }

            pageNum += 1;
            TableController.paginationNavigator(pageNum, navigate);
        }
        return next;
    },
    moreHandler(setStaffPhone, setStaffEmail, setShowStaffProfile, setUpdate) {
        return (staffPhone, email) => {
            setUpdate(true);
            setShowStaffProfile(true);
            setStaffPhone(staffPhone);
            setStaffEmail(email);
        };
    },
    deleteHandler() {
        return undefined;
    },
    /**
     *
     * @param direction
     * @param pageNum 当前页码
     * @param totalPages 总页数
     * @param setPagination 分页状态
     */
    getPagination(direction, pageNum, totalPages, setPagination) {
        if (direction === 1) {
            const paginationTemp = [];
            let page = pageNum;
            if (pageNum !== 1) {
                page = pageNum + 1;
            } else {
                page = pageNum;
            }
            for (let i = 0; i < 3; i++) {
                if (page > totalPages) break;
                paginationTemp.push(page);
                page++;
            }
            setPagination(paginationTemp);
            return;
        }
        const paginationTemp = [];
        let page = pageNum - 1;
        for (let i = 0; i < 3; i++) {
            if (page < 1) break;
            paginationTemp.push(page);
            page--;
        }
        setPagination(paginationTemp.reverse());
    },
    clickPaginationHandler(navigate) {
        return (pageNum,totalPages, setPagination) =>{
            // TableService.getPagination(pageNum, totalPages, setPagination);
            TableController.paginationNavigator(pageNum, navigate);
        };
    },
    goPageHandler(totalPages, navigate) {
        return (goPageInputValue) => {
            const pageNum = Number(goPageInputValue);
            if (pageNum && (typeof pageNum) === "number" && pageNum > 0 && pageNum <= totalPages) {
                TableController.paginationNavigator(pageNum, navigate);
            }
        };
    }
}

export default TableService;