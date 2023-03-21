package pers.nokbita.gp_back.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.util.Date;

public class StaffSign {

  @TableId(type = IdType.AUTO)
  private Integer id;
  private String staffId;
  private String name;
  private String photo;
  private String phone;
  private String email;
  private String password;
  private Date signInAt;
  private Date signOutAt;
  private String status;
  private Date updateAt;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public String getStaffId() {
    return staffId;
  }

  public void setStaffId(String staffId) {
    this.staffId = staffId;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public String getPhoto() {
    return photo;
  }

  public void setPhoto(String photo) {
    this.photo = photo;
  }


  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
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


  public Date getSignInAt() {
    return signInAt;
  }

  public void setSignInAt(Date signInAt) {
    this.signInAt = signInAt;
  }


  public Date getSignOutAt() {
    return signOutAt;
  }

  public void setSignOutAt(Date signOutAt) {
    this.signOutAt = signOutAt;
  }


  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }


  public Date getUpdateAt() {
    return updateAt;
  }

  public void setUpdateAt(Date updateAt) {
    this.updateAt = updateAt;
  }

  @Override
  public String toString() {
    return "StaffSign{" +
            "id=" + id +
            ", staffId='" + staffId + '\'' +
            ", name='" + name + '\'' +
            ", photo='" + photo + '\'' +
            ", phone='" + phone + '\'' +
            ", email='" + email + '\'' +
            ", password='" + password + '\'' +
            ", signInAt=" + signInAt +
            ", signOutAt=" + signOutAt +
            ", status='" + status + '\'' +
            ", updateAt=" + updateAt +
            '}';
  }
}
