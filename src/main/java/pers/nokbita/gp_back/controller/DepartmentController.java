package pers.nokbita.gp_back.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pers.nokbita.gp_back.entity.Department;
import pers.nokbita.gp_back.entity.vo.Result;
import pers.nokbita.gp_back.service.DepartmentService;

import java.util.HashMap;

@RestController
@RequestMapping("/department")
@CrossOrigin
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;


    @PostMapping("/all")
    public Result findAllDepartments() {
        return departmentService.findAllDepartments();
    }

    @PostMapping("/delete-by-dpt_id")
    public Result deleteDepartmentByDptId(@RequestBody HashMap<String, String> map) {
        return departmentService.deleteDepartmentByDptId(map.get("dptId"));
    }

    @PostMapping("/add")
    public Result addDepartment(@RequestBody Department department) {
        return departmentService.addDepartment(department);
    }

    @PostMapping("/allotDpt")
    public Result allotDpt(@RequestBody HashMap<String, String> map) {
        return departmentService.allotDDpt(map.get("staffId"), map.get("dptId"));
    }
}
