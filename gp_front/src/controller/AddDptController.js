import FetchTools from "../service/tools/FetchTools";

const AddDptController = {

    addDptRequester(name, description) {
        const body = {
            name: name,
            description: description
        }
        return FetchTools.post1("/department/add", body);
    }
}

export default AddDptController;