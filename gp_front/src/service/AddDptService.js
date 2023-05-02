import AddDptController from "../controller/AddDptController";
import Tools from "./tools/Tools";

const AddDptService = {

    generateDptNameInput(name, setName) {
        return {
            id: "dptName",
            label: "部门名称",
            inputValue: name,
            onChangeListener: (e) => {setName(e.target.value)},
        };
    },
    generateDptDescriptionInput(description, setDescription) {
        return {
            id: "dptDescription",
            label: "部门描述",
            inputValue: description,
            onChangeListener: (e) => {setDescription(e.target.value)},
        };
    },
    addHandler(name, description, setToggle, setShowAddDialog) {
        return () => {
            AddDptController.addDptRequester(name, description).then((result) => {
                if (result?.meta.status === 2000) {
                    Tools.printSucceedLog(result);
                    setToggle((old) => !old);
                    setShowAddDialog(false);
                    return;
                }

                Tools.printFailedLog(result);
            });
        };
    },
    cancelHandler(setShowAddDialog) {
        return () => setShowAddDialog(false);
    }
}

export default AddDptService;