package pers.nokbita.gp_back.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.sql.Timestamp;
import java.util.Date;

public class RoleRelation {

  @TableId(type = IdType.AUTO)
  private int id;
  private String roleRCode;
  private String staffId;
  private String roleId;
  private Date updateAt;


  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }


  public String getRoleRCode() {
    return roleRCode;
  }

  public void setRoleRCode(String roleRCode) {
    this.roleRCode = roleRCode;
  }


  public String getStaffId() {
    return staffId;
  }

  public void setStaffId(String staffId) {
    this.staffId = staffId;
  }


  public String getRoleId() {
    return roleId;
  }

  public void setRoleId(String roleId) {
    this.roleId = roleId;
  }


  public Date getUpdateAt() {
    return updateAt;
  }

  public void setUpdateAt(Timestamp updateAt) {
    this.updateAt = updateAt;
  }

}
