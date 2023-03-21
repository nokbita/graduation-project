package pers.nokbita.gp_back.entity.vo;

public class StaffSignOV {
    private String regCode;
    private String email;
    private String password;

    public StaffSignOV() {
    }

    public StaffSignOV(String regCode, String email, String password) {
        this.regCode = regCode;
        this.email = email;
        this.password = password;
    }

    public String getRegCode() {
        return regCode;
    }

    public void setRegCode(String regCode) {
        this.regCode = regCode;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
