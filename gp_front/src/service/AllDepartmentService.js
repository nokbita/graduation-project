import AllDepartmentController from "../controller/AllDepartmentController";
import Tools from "./tools/Tools";

const AllDepartmentService = {

    findAllDepartments(setDepartmentList) {
        AllDepartmentController.findAllDepartmentsRequester().then((result) => {
            if (result?.meta.status === 2000) {
                Tools.printSucceedLog(result);
                if (result.data) {
                    setDepartmentList(result.data?.departments);
                }

                return;
            }

            Tools.printFailedLog(result);
        });
    },

    deleteHandler(dptId, setToggle) {
        AllDepartmentController.deleteDepartmentByDptId(dptId).then((result) => {
            if (result?.meta.status === 2000) {
                Tools.printSucceedLog(result);
                setToggle((old) => !old);
                return;
            }

            Tools.printFailedLog(result);
        });
    },
    fakeDeleteHandler(setShowDialog, setDptId) {
        return (dptId) => {
            setShowDialog(true);
            setDptId(dptId);
        };
    },
    fakeAddHandler(setShowAddDialog, setName, setDescription) {
        return () => {
            setShowAddDialog(true);
            setName("");
            setDescription("");
        };
    },


    findAllStaff: (setStaffList) => {
        AllDepartmentController.findAllStaff().then((result) => {
            if (result?.meta.status === 2000) {
                Tools.printSucceedLog(result);

                setStaffList(result.data.staffs);
                return;
            }

            Tools.printFailedLog(result);
        });
    },
    fakeAllotHandler(setShowAllotPanel, setStaffId, setDepartmentList) {
        return staffId => {
            setShowAllotPanel(true);
            setStaffId(staffId);
            AllDepartmentService.findAllDepartments(setDepartmentList);
        }


    },
    allotHandler(staffId, setToggle, setShowAllotPanel) {
        return (dptId) => {
            AllDepartmentController.allotDpt(staffId, dptId).then((result) => {
                if (result?.meta.status === 2000) {
                    Tools.printSucceedLog(result);
                    setToggle((old) => !old);
                    setShowAllotPanel(false);
                    return;
                }

                Tools.printFailedLog(result);
            });
        };
    }
}

export default AllDepartmentService;