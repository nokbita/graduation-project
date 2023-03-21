package pers.nokbita.gp_back.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

public class Meta {

  @TableId(type = IdType.AUTO)
  private Integer id;
  private int staffNum;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public int getStaffNum() {
    return staffNum;
  }

  public void setStaffNum(int staffNum) {
    this.staffNum = staffNum;
  }

}
