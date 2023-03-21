package pers.nokbita.gp_back.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pers.nokbita.gp_back.entity.*;
import pers.nokbita.gp_back.entity.vo.Result;
import pers.nokbita.gp_back.entity.vo.StaffListOV;
import pers.nokbita.gp_back.entity.vo.StaffSignOV;
import pers.nokbita.gp_back.service.StaffService;
import pers.nokbita.gp_back.tools.StringConst;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

@RestController
@RequestMapping("/staff")
@CrossOrigin
public class StaffController {

    @Autowired
    private StaffService staffService;


    @PostMapping("/sign-in")
    public Result signIn(@RequestBody StaffSign staffSign) {
        return staffService.signIn(staffSign);
    }

    @PostMapping("/sign-up")
    public Result signUp(@RequestBody StaffSignOV staffSignOV) {
        return staffService.signUp(staffSignOV);
    }

    /**
     * 前端应该在每个路由页面都调用此方法，用以验证登录状态
     * @param token
     * @return
     */
    @PostMapping("/sign-status")
    public Result checkSignStatus(@RequestBody HashMap<String, String> token) {
        return staffService.checkSignStatus(token.get(StringConst.STAFF_SIGN_UP));
    }

    @PostMapping("/sign-info")
    public Result getStaffSign(@RequestBody HashMap<String, String> token) {
        return staffService.getStaffSign(token.get(StringConst.STAFF_SIGN_UP));
    }

    @PostMapping("/profile")
    public Result getProfile(@RequestBody HashMap<String, String> token) {
        return staffService.getProfile(token.get(StringConst.STAFF_SIGN_UP));
    }

    @PostMapping("/profileByStaffEmail")
    public Result getProfileByStaffEmail(@RequestBody HashMap<String, String> staffEmail) {
        return staffService.getProfileByStaffEmail(staffEmail.get("staffEmail"));
    }

    @PostMapping("/profileByStaffId")
    public Result getProfileByStaffId(@RequestBody HashMap<String, String> staffId) {
        return staffService.getProfileByStaffId(staffId.get("staffId"));
    }

    @PostMapping("/update")
    public Result update(@RequestBody Staff staff, HttpServletRequest request) {
        return staffService.update(staff, request);
    }

    @PostMapping("/add")
    public Result add(@RequestBody Staff staff, HttpServletRequest request) {
        return staffService.add(staff, request);
    }


    @PostMapping("/upload/photo-base64")
    public Result uploadPhotoByBase64(@RequestBody HashMap<String, String> photoByBase64, HttpServletRequest request) {
        return staffService.uploadPhotoByBase64(photoByBase64, request);

    }

    @PostMapping("/list")
    public Result getStaffList(@RequestBody HashMap<String,String> pagination) {
        System.out.println(pagination);
        return staffService.getStaffList(pagination);
    }

}
