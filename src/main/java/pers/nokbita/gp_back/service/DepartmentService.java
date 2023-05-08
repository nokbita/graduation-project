package pers.nokbita.gp_back.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pers.nokbita.gp_back.entity.Department;
import pers.nokbita.gp_back.entity.StaffWork;
import pers.nokbita.gp_back.entity.vo.Result;
import pers.nokbita.gp_back.mapper.DepartmentMapper;
import pers.nokbita.gp_back.mapper.StaffWorkMapper;

import java.util.Date;
import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentMapper departmentMapper;
    @Autowired
    private StaffWorkMapper staffWorkMapper;

    /**
     * 查找所有部门
     * @return
     */
    public Result findAllDepartments() {
        Result result = new Result();

        List<Department> departments = departmentMapper.selectList(null);
        if (departments == null || departments.size() == 0) {
            result.succeed().message("无数据").data("departments", departments);
        } else {
            result.succeed().data("departments", departments);
        }

        return result;
    }

    public Result deleteDepartmentByDptId(String dptId) {
        Result result = new Result();

        if (dptId == null || dptId.trim().equals("")) return result.failed().message("dptId错误");

        QueryWrapper<Department> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("dpt_id", dptId);
        int delete = departmentMapper.delete(queryWrapper);

        if (delete > 0) {
            result.succeed().message("删除成功");
        } else {
            result.failed().message("删除失败");
        }

        return result;
    }

    public Result addDepartment(Department department) {
        Result result = new Result();

        if (department == null) return result.failed().message("department null异常");
        if (department.getName() == null || department.getName().trim().equals("")) return null;

        // 生成dptID
        int count = Math.toIntExact(departmentMapper.selectCount(null));
        String dptId = "dpt_" + (count + 1);
        department.setDptId(dptId);
        // 生成更新时间
        Date now = new Date();
        department.setUpdateAt(now);

        int insert = departmentMapper.insert(department);
        result.succeed().message("添加成功");
        return result;
    }


    public Result allotDDpt(String staffId, String dptId) {
        Result result = new Result();

        // 查找staffWork
        QueryWrapper<StaffWork> staffWorkQueryWrapper = new QueryWrapper<>();
        staffWorkQueryWrapper.eq("staff_id", staffId);
        StaffWork staffWork = staffWorkMapper.selectOne(staffWorkQueryWrapper);
        // 查找department
        QueryWrapper<Department> departmentQueryWrapper = new QueryWrapper<>();
        departmentQueryWrapper.eq("dpt_id", dptId);
        Department department = departmentMapper.selectOne(departmentQueryWrapper);
        // 分配
        staffWork.setDepartment(department.getName());
        UpdateWrapper<StaffWork> staffWorkUpdateWrapper = new UpdateWrapper<>();
        staffWorkUpdateWrapper.eq("staff_id", staffId);
        staffWorkMapper.update(staffWork, staffWorkUpdateWrapper);

        result.succeed().message("分配成功");
        return result;
    }
}
