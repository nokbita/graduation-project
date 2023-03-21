package pers.nokbita.gp_back.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import pers.nokbita.gp_back.entity.StaffContact;

import java.util.ArrayList;

@Mapper
public interface StaffContactMapper extends BaseMapper<StaffContact> {

    @Select("select * from staff_contact order by id desc limit #{start}, #{pageSize}")
    ArrayList<StaffContact> pagination(int start, int pageSize);

    @Select("select * from staff_contact where staff_id=#{value} order by id desc limit #{start}, #{pageSize}")
    StaffContact paginationByStaffId(int start, int pageSize, String value);

    @Select("select * from staff_contact where email=#{value} order by id desc limit #{start}, #{pageSize}")
    StaffContact paginationByEmail(int start, int pageSize, String value);

    @Select("select * from staff_contact where phone=#{value} order by id desc limit #{start}, 1")
    StaffContact paginationByPhone(int start, int pageSize, String value);

}
