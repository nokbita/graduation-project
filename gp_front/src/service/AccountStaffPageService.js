import AccountStaffPageController from "../controller/AccountStaffPageController";
import Tools from "./tools/Tools";
import TableController from "../controller/TableController";

const AccountStaffPageService = {

    searchHandler(setStaffList, pageNum, pageSize, setTotalPages) {
        return (inputValue, selectField) => {
            const selectValue = selectField.options[selectField.selectedIndex].value;
            AccountStaffPageController.searchBySelectRequester(pageNum, pageSize, selectValue, inputValue).then((result) => {
                if (result?.meta.status === 2000) {
                    Tools.printSucceedLog(result);
                    setStaffList(result.data.staffs);
                    setTotalPages(result.meta.details.pagination.totalPages);
                    return;
                }
                setStaffList([]);
                Tools.printFailedLog(result);
            });
        };
    },
    addHandler(setShowStaffProfile, setUpdate) {
        return () => {
            setUpdate(false);
            setShowStaffProfile(true);
        };
    }
}

export default AccountStaffPageService;