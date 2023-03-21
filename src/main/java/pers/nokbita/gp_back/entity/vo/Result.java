package pers.nokbita.gp_back.entity.vo;

import pers.nokbita.gp_back.tools.Status;

import java.util.HashMap;

public class Result<DataValue, DetailsValue>{
    private class Meta<V2> {
        private int status;
        private String message;
        private HashMap<String, V2> details;

        public Meta() {
            this.details = new HashMap<>();
        }

        public int getStatus() {
            return status;
        }

        public void setStatus(int status) {
            this.status = status;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public HashMap<String, V2> getDetails() {
            return details;
        }

        public void setDetails(HashMap<String, V2> details) {
            this.details = details;
        }

        @Override
        public String toString() {
            return "Meta{" +
                    "status=" + status +
                    ", message='" + message + '\'' +
                    ", details=" + details +
                    '}';
        }
    }
    private HashMap<String, DataValue> data;
    private Meta<DetailsValue> meta;

    public Result() {
        this.data = new HashMap<>();
        this.meta = new Meta<>();
    }

    public HashMap<String, DataValue> getData() {
        return data;
    }

    public void setData(HashMap<String, DataValue> data) {
        this.data = data;
    }

    public Meta<DetailsValue> getMeta() {
        return meta;
    }

    public void setMeta(Meta<DetailsValue> meta) {
        this.meta = meta;
    }

    @Override
    public String toString() {
        return "Result{" +
                "data=" + data +
                ", meta=" + meta +
                '}';
    }

    public Result succeed() {
        this.meta.setStatus(Status.SUCCEED);
        this.meta.setMessage("成功");
        return this;
    }

    public Result failed() {
        this.meta.setStatus(Status.FAILED);
        this.meta.setMessage("失败");
        return this;
    }

    public Result status(int status) {
        this.meta.setStatus(status);
        return this;
    }

    public Result message(String message) {
       this.meta.setMessage(message);
        return this;
    }

    public Result details(String key, DetailsValue value) {
        this.meta.getDetails().put(key, value);
        return this;
    }

    public Result details(HashMap<String, DetailsValue> data) {
        this.meta.getDetails().putAll(data);
        return this;
    }

    public Result data(String key, DataValue value) {
        this.data.put(key, value);
        return this;
    }

    public Result data(HashMap<String, DataValue> data) {
        this.data.putAll(data);
        return this;
    }

}
