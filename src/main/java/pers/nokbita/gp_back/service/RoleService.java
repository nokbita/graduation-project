package pers.nokbita.gp_back.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pers.nokbita.gp_back.entity.Department;
import pers.nokbita.gp_back.entity.Role;
import pers.nokbita.gp_back.entity.StaffAccount;
import pers.nokbita.gp_back.entity.vo.Result;
import pers.nokbita.gp_back.mapper.RoleMapper;
import pers.nokbita.gp_back.mapper.StaffAccountMapper;

import java.util.Date;
import java.util.List;

@Service
public class RoleService {

    @Autowired
    private RoleMapper roleMapper;

    @Autowired
    private StaffAccountMapper staffAccountMapper;


    public Result findAllRoles() {
        Result result = new Result();

        List<Role> roles = roleMapper.selectList(null);
        if (roles == null || roles.size() == 0) {
            result.succeed().message("无数据").data("roles", roles);
        } else {
            result.succeed().data("roles", roles);
        }

        return result;
    }

    public Result deleteRoleByRoleId(String roleId) {
        Result result = new Result();

        if (roleId == null || roleId.trim().equals("")) return result.failed().message("roleId错误");

        QueryWrapper<Role> roleQueryWrapper = new QueryWrapper<>();
        roleQueryWrapper.eq("role_id", roleId);
        int delete = roleMapper.delete(roleQueryWrapper);

        if (delete > 0) {
            result.succeed().message("删除成功");
        } else {
            result.failed().message("删除失败");
        }

        return result;
    }

    public Result addRole(Role role) {
        Result result = new Result();

        if (role == null) return result.failed().message("department null异常");
        if (role.getName() == null || role.getName().trim().equals("")) return null;

        // 生成roleId
        int count = Math.toIntExact(roleMapper.selectCount(null));
        String dptId = "role_" + (count + 1);
        role.setRoleId(dptId);
        // 生成更新时间
        Date now = new Date();
        role.setUpdateAt(now);

        int insert = roleMapper.insert(role);
        result.succeed().message("添加成功");

        return result;
    }

    public Result allot(String staffId, String roleId) {
        Result result = new Result();

        if (roleId == null || roleId.trim().equals("")) return result.failed().message("roleId错误");
        // 查找staffAccount
        QueryWrapper<StaffAccount> staffAccountQueryWrapper = new QueryWrapper<>();
        staffAccountQueryWrapper.eq("staff_id", staffId);
        StaffAccount staffAccount = staffAccountMapper.selectOne(staffAccountQueryWrapper);
        // 查找role
        QueryWrapper<Role> roleQueryWrapper = new QueryWrapper<>();
        roleQueryWrapper.eq("role_id", roleId);
        Role role = roleMapper.selectOne(roleQueryWrapper);
        // 分配
        staffAccount.setLevel(role.getName());
        UpdateWrapper<StaffAccount> staffAccountUpdateWrapper = new UpdateWrapper<>();
        staffAccountUpdateWrapper.eq("staff_id", staffId);
        staffAccountMapper.update(staffAccount, staffAccountUpdateWrapper);

        result.succeed().message("分配成功");
        return result;
    }
}
