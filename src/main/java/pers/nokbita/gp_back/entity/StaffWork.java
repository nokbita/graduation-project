package pers.nokbita.gp_back.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.util.Date;

public class StaffWork {

  @TableId(type = IdType.AUTO)
  private Integer id;
  private String staffId;
  private String post;
  private String department;
  private String supervisor;
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


  public String getPost() {
    return post;
  }

  public void setPost(String post) {
    this.post = post;
  }


  public String getDepartment() {
    return department;
  }

  public void setDepartment(String department) {
    this.department = department;
  }


  public String getSupervisor() {
    return supervisor;
  }

  public void setSupervisor(String supervisor) {
    this.supervisor = supervisor;
  }


  public Date getUpdateAt() {
    return updateAt;
  }

  public void setUpdateAt(Date updateAt) {
    this.updateAt = updateAt;
  }

  @Override
  public String toString() {
    return "StaffWork{" +
            "id=" + id +
            ", staffId='" + staffId + '\'' +
            ", post='" + post + '\'' +
            ", department='" + department + '\'' +
            ", supervisor='" + supervisor + '\'' +
            ", updateAt=" + updateAt +
            '}';
  }
}
