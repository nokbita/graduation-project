import FetchTools from "../service/tools/FetchTools";
import StringConst, {Path} from "../service/tools/StringConst";

const TableController = {

    getStaffListRequester(pageNum, pageSize) {
        const body = {
            pageNum: pageNum,
            pageSize: pageSize
        }
        return FetchTools.post1(Path.STAFF_LIST, body);
    },
    paginationNavigator(pageNum, navigate) {
        navigate(Path.ROOT + Path.ACCOUNT_STAFF + "/" + pageNum);
    },

}

export default TableController;