import TableController from "../controller/TableController";
import Tools from "./tools/Tools";
import {Path} from "./tools/StringConst";
import {tab} from "@testing-library/user-event/dist/tab";
import Css from "../view/components/Table/Table.module.css";
import React from "react";
import {Link} from "react-router-dom";

const TableService = {

    getStaffListHandler(pageNum, pageSize, setTotalPages, setStaffList) {
        TableController.getStaffListRequester(pageNum, pageSize).then(result => {
            if (result?.meta.status === 2000) {
                Tools.printSucceedLog(result);
                setStaffList(result.data.staffs.reverse());
                setTotalPages(result.meta.details.pagination.totalPages);
                return;
            }
            Tools.printFailedLog(result);
        });
    },
    previousPageHandler(pageNum, totalPages, navigate) {
        const previous = () => {
            if (pageNum === 1) {
                return;
            }
            pageNum -= 1;
            TableController.paginationNavigator(pageNum, navigate);
        }
        return previous;
    },
    nextPageHandler(pageNum, totalPages, navigate) {
        const next = () => {
            if (pageNum === totalPages) {
                return;
            }
            pageNum += 1;
            TableController.paginationNavigator(pageNum, navigate);
        }
        return next;
    },
    moreHandler(setStaffPhone, setStaffEmail, setShowStaffProfile) {
        return (staffPhone, email) => {
            setShowStaffProfile(true);
            setStaffPhone(staffPhone);
            setStaffEmail(email);
        };
    },
    deleteHandler() {
        return undefined;
    },
    getPagination(totalPages, setPagination) {
        const pagination = [];
        console.log("页码------", totalPages);
        if (totalPages <= 4) {
            for(let i = 0; i < totalPages; i++) {
                pagination.push(i+1);
            }
        } else {
            for(let i = 0; i < 3; i++) {
                pagination.push(i+1);
            }
            pagination.push(totalPages);
        }
        setPagination(pagination);
    },
    clickPaginationHandler(navigate) {
        return (pageNum) =>{
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