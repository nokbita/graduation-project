package pers.nokbita.gp_back.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import pers.nokbita.gp_back.entity.StaffWork;

import java.util.ArrayList;

@Mapper
public interface StaffWorkMapper extends BaseMapper<StaffWork> {

    @Select("select * from staff_work order by id desc limit #{start}, #{pageSize}")
    ArrayList<StaffWork> pagination(int start, int pageSize);

    @Select("select * from staff_work where staff_id=#{value} order by id desc limit #{start}, #{pageSize}")
    StaffWork paginationByStaffId(int start, int pageSize, String value);

    @Select("select * from staff_work where post=#{value} order by id desc limit #{start}, #{pageSize}")
    ArrayList<StaffWork> paginationByPost(int start, int pageSize, String value);
}
