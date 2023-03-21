package pers.nokbita.gp_back.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import pers.nokbita.gp_back.entity.StaffContact;
import pers.nokbita.gp_back.entity.StaffInfo;

import java.lang.reflect.Array;
import java.util.ArrayList;

@Mapper
public interface StaffInfoMapper extends BaseMapper<StaffInfo> {

    @Select("select * from staff_info order by id desc limit #{start}, #{pageSize}")
    ArrayList<StaffInfo> pagination(int start, int pageSize);

    @Select("select * from staff_info where staff_id=#{value} order by id desc limit #{start}, #{pageSize}")
    StaffInfo paginationByStaffId(int start, int pageSize, String value);

    @Select("select * from staff_info where name=#{value} order by id desc limit #{start}, #{pageSize}")
    ArrayList<StaffInfo> paginationByName(int start, int pageSize, String value);
}
