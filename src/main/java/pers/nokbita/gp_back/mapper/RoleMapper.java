package pers.nokbita.gp_back.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import pers.nokbita.gp_back.entity.Department;
import pers.nokbita.gp_back.entity.Role;

@Mapper
public interface RoleMapper extends BaseMapper<Role> {

}
