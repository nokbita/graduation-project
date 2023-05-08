package pers.nokbita.gp_back.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pers.nokbita.gp_back.entity.Role;
import pers.nokbita.gp_back.entity.vo.Result;
import pers.nokbita.gp_back.service.RoleService;

import java.util.HashMap;

@RestController
@RequestMapping("/role")
@CrossOrigin
public class RoleController {
    
    @Autowired
    private RoleService roleService;

    @PostMapping("/all")
    public Result findAllRoles() {
        return roleService.findAllRoles();
    }

    @PostMapping("/delete-by-role_id")
    public Result deleteRoleByRoleId(@RequestBody HashMap<String, String> map) {
        return roleService.deleteRoleByRoleId(map.get("roleId"));
    }

    @PostMapping("/add")
    public Result addRole(@RequestBody Role role) {
        return roleService.addRole(role);
    }

    @PostMapping("/allot")
    public Result allot(@RequestBody HashMap<String, String> map) {
        return roleService.allot(map.get("staffId"), map.get("roleId"));
    }
}
