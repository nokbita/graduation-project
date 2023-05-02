import FetchTools from "../service/tools/FetchTools";

const AllDepartmentController = {


    findAllDepartmentsRequester : () => {
        const body = {};
        return FetchTools.post1("/department/all", body);
    },
    deleteDepartmentByDptId(dptId) {
        const body = {dptId: dptId};
        return FetchTools.post1("/department/delete-by-dpt_id", body);
    },
    findAllStaff() {
        const body = {};
        return FetchTools.post1("/staff/allStaff", body);
    },
    allotDpt(staffId, dptId) {
        const body = {staffId: staffId, dptId: dptId};
        return FetchTools.post1("/department/allotDpt", body);
    }
}

export default AllDepartmentController;