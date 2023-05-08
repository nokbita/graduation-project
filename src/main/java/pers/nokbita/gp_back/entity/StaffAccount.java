package pers.nokbita.gp_back.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.util.Date;

public class StaffAccount {

  @TableId(type = IdType.AUTO)
  private Integer id;
  private String staffId;
  private Date regTime;
  private String regCode;
  private Date hireTime;
  private Date resignTime;
  private String level;
  private String status;
  private Date updateAt;

  public String getLevel() {
    return level;
  }

  public void setLevel(String level) {
    this.level = level;
  }

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


  public Date getRegTime() {
    return regTime;
  }

  public void setRegTime(Date regTime) {
    this.regTime = regTime;
  }


  public String getRegCode() {
    return regCode;
  }

  public void setRegCode(String regCode) {
    this.regCode = regCode;
  }


  public Date getHireTime() {
    return hireTime;
  }

  public void setHireTime(Date hireTime) {
    this.hireTime = hireTime;
  }


  public Date getResignTime() {
    return resignTime;
  }

  public void setResignTime(Date resignTime) {
    this.resignTime = resignTime;
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
    return "StaffAccount{" +
            "id=" + id +
            ", staffId='" + staffId + '\'' +
            ", regTime=" + regTime +
            ", regCode='" + regCode + '\'' +
            ", hireTime=" + hireTime +
            ", resignTime=" + resignTime +
            ", status='" + status + '\'' +
            ", updateAt=" + updateAt +
            '}';
  }
}
