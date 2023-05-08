package pers.nokbita.gp_back.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.util.Date;

public class Checking {

  @TableId(type = IdType.AUTO)
  private int id;
  private String checkCode;
  private String staffId;
  private String type;
  private Date startTime;
  private Date endTime;
  private String isCheck;
  private Date updateAt;


  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }


  public String getCheckCode() {
    return checkCode;
  }

  public void setCheckCode(String checkCode) {
    this.checkCode = checkCode;
  }


  public String getStaffId() {
    return staffId;
  }

  public void setStaffId(String staffId) {
    this.staffId = staffId;
  }


  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }


  public Date getStartTime() {
    return startTime;
  }

  public void setStartTime(Date startTime) {
    this.startTime = startTime;
  }


  public Date getEndTime() {
    return endTime;
  }

  public void setEndTime(Date endTime) {
    this.endTime = endTime;
  }


  public String getIsCheck() {
    return isCheck;
  }

  public void setIsCheck(String isCheck) {
    this.isCheck = isCheck;
  }


  public Date getUpdateAt() {
    return updateAt;
  }

  public void setUpdateAt(Date updateAt) {
    this.updateAt = updateAt;
  }

}
