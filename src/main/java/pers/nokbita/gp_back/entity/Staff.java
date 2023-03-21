package pers.nokbita.gp_back.entity;

public class Staff {
    private String staffPhone;
    private String staffEmail;
    private StaffAccount staffAccount;
    private StaffContact staffContact;
    private StaffInfo staffInfo;
    private StaffSign staffSign;
    private StaffWork staffWork;

    public String getStaffPhone() {
        return staffPhone;
    }

    public void setStaffPhone(String staffPhone) {
        this.staffPhone = staffPhone;
    }

    public String getStaffEmail() {
        return staffEmail;
    }

    public void setStaffEmail(String staffEmail) {
        this.staffEmail = staffEmail;
    }

    public StaffAccount getStaffAccount() {
        return staffAccount;
    }

    public void setStaffAccount(StaffAccount staffAccount) {
        this.staffAccount = staffAccount;
    }

    public StaffContact getStaffContact() {
        return staffContact;
    }

    public void setStaffContact(StaffContact staffContact) {
        this.staffContact = staffContact;
    }

    public StaffInfo getStaffInfo() {
        return staffInfo;
    }

    public void setStaffInfo(StaffInfo staffInfo) {
        this.staffInfo = staffInfo;
    }

    public StaffSign getStaffSign() {
        return staffSign;
    }

    public void setStaffSign(StaffSign staffSign) {
        this.staffSign = staffSign;
    }

    public StaffWork getStaffWork() {
        return staffWork;
    }

    public void setStaffWork(StaffWork staffWork) {
        this.staffWork = staffWork;
    }

    @Override
    public String toString() {
        return "Staff{" +
                "staffAccount=" + staffAccount +
                ", staffContact=" + staffContact +
                ", staffInfo=" + staffInfo +
                ", staffSign=" + staffSign +
                ", staffWork=" + staffWork +
                '}';
    }
}
