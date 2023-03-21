package pers.nokbita.gp_back.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.util.Date;

public class StaffInfo {

  @TableId(type = IdType.AUTO)
  private Integer id;
  private String staffId;
  private String name;
  private String photo;
  private String sex;
  private Date birthTime;
  private String identifyNum;
  private String education;
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


  public String getSex() {
    return sex;
  }

  public void setSex(String sex) {
    this.sex = sex;
  }


  public Date getBirthTime() {
    return birthTime;
  }

  public void setBirthTime(Date birthTime) {
    this.birthTime = birthTime;
  }


  public String getIdentifyNum() {
    return identifyNum;
  }

  public void setIdentifyNum(String identifyNum) {
    this.identifyNum = identifyNum;
  }


  public String getEducation() {
    return education;
  }

  public void setEducation(String education) {
    this.education = education;
  }


  public Date getUpdateAt() {
    return updateAt;
  }

  public void setUpdateAt(Date updateAt) {
    this.updateAt = updateAt;
  }

  @Override
  public String toString() {
    return "StaffInfo{" +
            "id=" + id +
            ", staffId='" + staffId + '\'' +
            ", name='" + name + '\'' +
            ", photo='" + photo + '\'' +
            ", sex='" + sex + '\'' +
            ", birthTime=" + birthTime +
            ", identifyNum='" + identifyNum + '\'' +
            ", education='" + education + '\'' +
            ", updateAt=" + updateAt +
            '}';
  }
}
