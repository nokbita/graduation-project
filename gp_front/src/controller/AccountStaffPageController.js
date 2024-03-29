import FetchTools from "../service/tools/FetchTools";
import {Path} from "../service/tools/StringConst";

const AccountStaffPageController = {


    searchBySelectRequester(pageNum, pageSize, selectValue, inputValue) {
        const body = {
            pageNum: pageNum,
            pageSize: pageSize,
            key: selectValue,
            value: inputValue
        }
        return FetchTools.post1(Path.STAFF_LIST, body);
    },
    deleteStaffRequester(emailByDialog) {
        const body = {
            staffEmail: emailByDialog
        }
        return FetchTools.post1(Path.STAFF_DELETE, body);
    }
}

export default AccountStaffPageController;