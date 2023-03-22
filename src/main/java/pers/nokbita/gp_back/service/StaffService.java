package pers.nokbita.gp_back.service;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pers.nokbita.gp_back.entity.*;
import pers.nokbita.gp_back.entity.vo.Result;
import pers.nokbita.gp_back.entity.vo.StaffListOV;
import pers.nokbita.gp_back.entity.vo.StaffSignOV;
import pers.nokbita.gp_back.mapper.*;
import pers.nokbita.gp_back.tools.StringConst;
import pers.nokbita.gp_back.tools.TokenUtil;
import pers.nokbita.gp_back.tools.Utils;

import javax.servlet.http.HttpServletRequest;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.UUID;

@Service
public class StaffService {

    @Autowired
    private MetaMapper metaMapper;
    @Autowired
    private StaffSignMapper staffSignMapper;
    @Autowired
    private StaffAccountMapper staffAccountMapper;
    @Autowired
    private StaffContactMapper staffContactMapper;
    @Autowired
    private StaffInfoMapper staffInfoMapper;
    @Autowired
    private StaffWorkMapper staffWorkMapper;

    public Result getStaffList(HashMap<String, String> pagination) {
        Result result = new Result();
        ArrayList<StaffListOV> staffListOVS = new ArrayList<>();

        // 获取参数
        int pageNum = Integer.parseInt(pagination.get("pageNum"));
        int pageSize = Integer.parseInt(pagination.get("pageSize"));
        String key = pagination.get("key");
        String value = pagination.get("value");
        if (StringConst.STAFF_ID.equals(key)) {
            key = "staff_id";
        }

        // 总行数
        long totalRow = 0;

        // 分页查询
        int start = (pageNum - 1) * pageSize;
        ArrayList<StaffInfo> staffInfos = new ArrayList<>();
        ArrayList<StaffWork> staffWorks = new ArrayList<>();
        ArrayList<StaffContact> staffContacts = new ArrayList<>();
        if (value == null || value.trim().equals("")) {
            System.out.println("无关键字");
            System.out.println(key);
            System.out.println(value);
            System.out.println(start);
            staffInfos = staffInfoMapper.pagination(start, pageSize);
            staffWorks = staffWorkMapper.pagination(start, pageSize);
            staffContacts = staffContactMapper.pagination(start, pageSize);
            totalRow = staffSignMapper.selectCount(null);
        } else {
            System.out.println("有关键字");
            System.out.println(key);
            System.out.println(value);
            System.out.println(start);
            switch (key) {
                case "staff_id" -> {
                    StaffInfo staffInfo = staffInfoMapper.paginationByStaffId(start, pageSize, value);
                    StaffWork staffWork = staffWorkMapper.paginationByStaffId(start, pageSize, value);
                    StaffContact staffContact = staffContactMapper.paginationByStaffId(start, pageSize, value);
                    staffInfos.add(staffInfo);
                    staffWorks.add(staffWork);
                    staffContacts.add(staffContact);
                    totalRow = 1;
                }
                case "name" -> {
                    staffInfos = staffInfoMapper.paginationByName(start, pageSize, value);
                    for (StaffInfo staffInfo : staffInfos) {
                        String staffId = staffInfo.getStaffId();
                        StaffWork staffWork = staffWorkMapper.paginationByStaffId(start, pageSize, staffId);
                        StaffContact staffContact = staffContactMapper.paginationByStaffId(start, pageSize, staffId);
                        staffWorks.add(staffWork);
                        staffContacts.add(staffContact);
                    }
                    QueryWrapper<StaffInfo> staffInfoQueryWrapper = new QueryWrapper<>();
                    staffInfoQueryWrapper.eq("name", value);
                    totalRow = staffInfoMapper.selectList(staffInfoQueryWrapper).size();
                }
                case "email" -> {
                    StaffContact staffContact = staffContactMapper.paginationByEmail(start, pageSize, value);
                    String staffId = null;
                    if (staffContact != null) {
                        staffId = staffContact.getStaffId();
                    }
                    StaffWork staffWork = staffWorkMapper.paginationByStaffId(start, pageSize, staffId);
                    StaffInfo staffInfo = staffInfoMapper.paginationByStaffId(start, pageSize, staffId);
                    staffContacts.add(staffContact);
                    staffWorks.add(staffWork);
                    staffInfos.add(staffInfo);
                    totalRow = 1;
                }
                case "phone" -> {
                    StaffContact staffContact = staffContactMapper.paginationByPhone(start, pageSize, value);
                    String staffId = null;
                    if (staffContact != null) {
                        staffId = staffContact.getStaffId();
                    }
                    StaffWork staffWork = staffWorkMapper.paginationByStaffId(start, pageSize, staffId);
                    StaffInfo staffInfo = staffInfoMapper.paginationByStaffId(start, pageSize, staffId);
                    staffContacts.add(staffContact);
                    staffWorks.add(staffWork);
                    staffInfos.add(staffInfo);
                    totalRow = 1;
                }
                case "post" -> {
                    staffWorks = staffWorkMapper.paginationByPost(start, pageSize, value);
                    for (StaffWork staffWork : staffWorks) {
                        String staffId = staffWork.getStaffId();
                        StaffInfo staffInfo = staffInfoMapper.paginationByStaffId(start, pageSize, staffId);
                        StaffContact staffContact = staffContactMapper.paginationByStaffId(start, pageSize, staffId);
                        staffInfos.add(staffInfo);
                        staffContacts.add(staffContact);
                    }
                    QueryWrapper<StaffWork> staffWorkQueryWrapper = new QueryWrapper<>();
                    staffWorkQueryWrapper.eq("post", value);
                    totalRow = staffWorkMapper.selectList(staffWorkQueryWrapper).size();
                }
            }

        }

        if (staffInfos.size() == 0 || staffInfos.get(0) == null) {
            return result.failed().message("关键词与值不匹配");
        }
        // 封装
        for (int i = 0; i < staffInfos.size(); i++) {
            StaffInfo staffInfo = staffInfos.get(i);
            StaffWork staffWork = staffWorks.get(i);
            StaffContact staffContact = staffContacts.get(i);
            if (staffInfo.getStaffId().equals(staffWork.getStaffId())
                    && staffWork.getStaffId().equals(staffContact.getStaffId())) {
                StaffListOV staffListOV = new StaffListOV();
                staffListOV.setStaffId(staffInfo.getStaffId());
                staffListOV.setName(staffInfo.getName());
                staffListOV.setPost(staffWork.getPost());
                staffListOV.setDepartment(staffWork.getDepartment());
                staffListOV.setPhone(staffContact.getPhone());
                staffListOV.setEmail(staffContact.getEmail());
                staffListOVS.add(staffListOV);
            }
        }

        long totalPages = 0;
        if (totalRow % pageSize != 0) {
            totalPages = totalRow / pageSize + 1;
        } else {
            totalPages = totalRow / pageSize;
        }

        HashMap<String, Object> map = new HashMap<>();
        map.put("pageNum", pageNum);
        map.put("pageSize", pageSize);
        map.put("totalPages", totalPages);
        if (totalRow == 0) {
            result.succeed().message("无数据")
                    .details("pagination", map)
                    .data("staffs", staffListOVS);
        } else {
            result.succeed().message("员工列表获取成功")
                    .details("pagination", map)
                    .data("staffs", staffListOVS);
        }
        return result;
    }

    /**
     * 登录
     * @param staffSign
     * @return
     */
    public Result signIn(StaffSign staffSign) {
        Result result = new Result();

        String email = staffSign.getEmail();
        String password = staffSign.getPassword();
        StaffSign staff = this.findStaffSignByEmail(email);
        boolean isPassword = this.verifyPassword(staff, password);

        if (staff == null) {
            result.failed().message("邮箱错误");
        } else if (!isPassword) {
            result.failed().message("密码错误");
        } else {

            staff.setPassword("");
            String token = TokenUtil.generateToken(staff.getEmail());
            result.succeed()
                    .data(StringConst.STAFF_SIGN, staff)
                    .details("jwt", token);
        }
        return result;
    }

    private boolean verifyPassword(StaffSign staff, String password) {
        if (staff == null) return false;
        return staff.getPassword().equals(password);
    }

    private StaffSign findStaffSignById(String staffId) {
        if (staffId == null) return null;
        QueryWrapper<StaffSign> wrapper = new QueryWrapper<>();
        wrapper.eq("staff_id", staffId);
        return staffSignMapper.selectOne(wrapper);
    }

    private StaffSign findStaffSignByEmail(String email) {
        if (email == null) return null;
        QueryWrapper<StaffSign> wrapper = new QueryWrapper<>();
        wrapper.eq("email", email);
        return staffSignMapper.selectOne(wrapper);
    }

    @Transactional
    public Result signUp(StaffSignOV staffSignOV) {
        Result result = new Result();

        String regCode = staffSignOV.getRegCode();
        String email = staffSignOV.getEmail();
        String password = staffSignOV.getPassword();

        if (regCode == null || regCode.equals("")) {
            result.failed().message("注册码不能为空");
            return result;
        } else if (email == null || email.equals("")) {
            result.failed().message("邮箱不能为空");
            return result;
        } else if (password == null || password.equals("")) {
            result.failed().message("密码不能为空");
            return result;
        }

        Meta meta = metaMapper.selectOne(null);
        String staffId = "gp" + (meta.getStaffNum() + 1);
        Date now = new Date();
        // 封装 Meta
        Meta meta1 = new Meta();
        meta1.setId(1);
        meta1.setStaffNum(meta.getStaffNum() + 1);
        // 封装 StaffAccount
        StaffAccount staffAccount = new StaffAccount();
        staffAccount.setStaffId(staffId);
        staffAccount.setRegTime(now);
        staffAccount.setRegCode(regCode);
        staffAccount.setStatus("1");
        staffAccount.setUpdateAt(now);
        // 封装 StaffContact
        StaffContact staffContact = new StaffContact();
        staffContact.setStaffId(staffId);
        staffContact.setEmail(email);
        staffContact.setUpdateAt(now);
        // 封装 StaffInfo
        StaffInfo staffInfo = new StaffInfo();
        staffInfo.setStaffId(staffId);
        staffInfo.setUpdateAt(now);
        // 封装 StaffSign
        StaffSign staffSign = new StaffSign();
        staffSign.setStaffId(staffId);
        staffSign.setEmail(email);
        staffSign.setPassword(password);
        staffSign.setStatus("1");
        staffSign.setUpdateAt(now);
        // 封装 StaffWork
        StaffWork staffWork = new StaffWork();
        staffWork.setStaffId(staffId);
        staffWork.setUpdateAt(now);

        // 持久化到数据库
//        int i = metaMapper.updateById(meta1);
//        int insert = staffAccountMapper.insert(staffAccount);
//        int insert1 = staffContactMapper.insert(staffContact);
//        int insert2 = staffInfoMapper.insert(staffInfo);
//        int insert3 = staffSignMapper.insert(staffSign);
//        int insert4 = staffWorkMapper.insert(staffWork);

        staffSignOV.setPassword("");
        String token = TokenUtil.generateToken(staffSign.getEmail());
        result.succeed()
                .data(StringConst.STAFF_SIGN, staffSignOV)
                .details("jwt", token);
        return result;
    }

    /**
     * 是否在登录状态
     * 本方法将检查：
     * 1. 过期时间
     * 2. 账号邮箱的有效性
     * @param token
     * @return
     */
    private boolean isSignedIn(String token) {
        if (token == null) return false;
        Claims payload = TokenUtil.getClaimsByToken(token);
        Date now = new Date();

        Date expiration = payload.getExpiration();
        String email = payload.getSubject();
        StaffSign staffSign = this.findStaffSignByEmail(email);
        return now.compareTo(expiration) <= -1 && staffSign != null;
    }

    /**
     * 检查登录状态
     * 不携带 data
     * @param token
     * @return
     */
    public Result checkSignStatus(String token) {
        Result result = new Result<>();
        if (!this.isSignedIn(token)) return result.failed().message("登录状态失效，请重新登陆");
        return result.succeed().message("登录状态有效");
    }

    /**
     * 获取 staff 的 profile
     * @param token
     * @return
     */
    public Result getProfile(String token) {
        Result result = new Result();

        Claims payload = TokenUtil.getClaimsByToken(token);
        String email = payload.getSubject();
        return this.getProfileByStaffEmail(email);
    }

    public Result getProfileByStaffId(String staffId) {
        Result result = new Result();
        StaffWork staffWork = this.findStaffWorkByStaffId(staffId);
        StaffInfo staffInfo = this.findStaffInfoByStaffId(staffId);
        StaffContact staffContactByEmail = this.findStaffContactByStaffId(staffId);
        // 封装
        HashMap<String, Object> map = new HashMap<>();
        map.put(StringConst.STAFF_WORK, staffWork);
        map.put(StringConst.STAFF_INFO, staffInfo);
        map.put(StringConst.STAFF_CONTACT, staffContactByEmail);

        return result.succeed().message("staffProfile 获取成功").data(StringConst.STAFF, map);
    }

    public Result getProfileByStaffEmail(String staffEmail) {
        Result result = new Result();

        if (staffEmail == null) return null;
        StaffSign staffSign = this.findStaffSignByEmail(staffEmail);
        StaffWork staffWork = this.findStaffWorkByStaffId(staffSign.getStaffId());
        StaffInfo staffInfo = this.findStaffInfoByStaffId(staffSign.getStaffId());
        StaffContact staffContactByEmail = this.findStaffContactByStaffId(staffSign.getStaffId());
        // 封装
        HashMap<String, Object> map = new HashMap<>();
        map.put(StringConst.STAFF_WORK, staffWork);
        map.put(StringConst.STAFF_INFO, staffInfo);
        map.put(StringConst.STAFF_CONTACT, staffContactByEmail);

        return result.succeed().message("staffProfile 获取成功").data(StringConst.STAFF, map);
    }



    private StaffContact findStaffContactByStaffId(String staffId) {
        if (staffId == null) return null;
        QueryWrapper<StaffContact> wrapper = new QueryWrapper<>();
        wrapper.eq("staff_id", staffId);
        return staffContactMapper.selectOne(wrapper);
    }

    private StaffInfo findStaffInfoByStaffId(String staffId) {
        if (staffId == null) return null;
        QueryWrapper<StaffInfo> wrapper = new QueryWrapper<>();
        wrapper.eq("staff_id", staffId);
        return staffInfoMapper.selectOne(wrapper);
    }

    private StaffWork findStaffWorkByStaffId(String staffId) {
        if (staffId == null) return null;
        QueryWrapper<StaffWork> wrapper = new QueryWrapper<>();
        wrapper.eq("staff_id", staffId);
        return staffWorkMapper.selectOne(wrapper);
    }

    /**
     * 获取 staffSign
     * @param token
     * @return
     */
    public Result getStaffSign(String token) {
        Result result = new Result();
        Claims payload = TokenUtil.getClaimsByToken(token);
        String email = payload.getSubject();

        StaffSign staffSignByEmail = this.findStaffSignByEmail(email);
        staffSignByEmail.setPassword("");
        return result.succeed().message("获取StaffSign成功").data(StringConst.STAFF_SIGN, staffSignByEmail);
    }

    @Transactional
    public Result update(Staff staff, HttpServletRequest request) {
        Result result = new Result();

        // 装配
        String staffPhone = staff.getStaffPhone();
        String staffEmail = staff.getStaffEmail();
        StaffWork staffWork = staff.getStaffWork();
        StaffInfo staffInfo = staff.getStaffInfo();
        StaffContact staffContact = staff.getStaffContact();
        StaffSign staffSign = staff.getStaffSign();
        StaffAccount staffAccount = staff.getStaffAccount();

        // 照片在数据库中只存储路径
        String staffId = staffAccount.getStaffId();
        if (staffInfo.getPhoto() != null && !staffInfo.getPhoto().contains("http")) {
            String photoPath = this.base64ToImg(staffInfo.getPhoto(), staffId, request);
            staffInfo.setPhoto(photoPath);
            staffSign.setPhoto(photoPath);
        }

        // 更新条件
        UpdateWrapper<StaffAccount> staffAccountUpdateWrapper = new UpdateWrapper<>();
        UpdateWrapper<StaffWork> staffWorkUpdateWrapper = new UpdateWrapper<>();
        UpdateWrapper<StaffInfo> staffInfoUpdateWrapper = new UpdateWrapper<>();
        UpdateWrapper<StaffContact> staffContactUpdateWrapper = new UpdateWrapper<>();
        UpdateWrapper<StaffSign> staffSignUpdateWrapper = new UpdateWrapper<>();
        staffAccountUpdateWrapper.eq("staff_id", staffId);
        staffWorkUpdateWrapper.eq("staff_id", staffId);
        staffInfoUpdateWrapper.eq("staff_id", staffId);
        staffContactUpdateWrapper.eq("staff_id", staffId);
        staffSignUpdateWrapper.eq("staff_id", staffId);

        // 更新
        staffAccountMapper.update(staffAccount, staffAccountUpdateWrapper);
        staffWorkMapper.update(staffWork, staffWorkUpdateWrapper);
        staffInfoMapper.update(staffInfo, staffInfoUpdateWrapper);
        staffContactMapper.update(staffContact, staffContactUpdateWrapper);
        staffSignMapper.update(staffSign, staffSignUpdateWrapper);

        if (staffSign.getPassword() != null && !staffSign.getPassword().equals("")) {
            result.succeed().message("更新成功").details("isPasswordChanged", true);
        } else {
            result.succeed().message("更新成功").details("isPasswordChanged", false);
        }

        return result;
    }

    @Transactional
    public Result add(Staff staff, HttpServletRequest request) {
        Result result = new Result();

        // 装配
        StaffWork staffWork = staff.getStaffWork();
        StaffInfo staffInfo = staff.getStaffInfo();
        StaffContact staffContact = staff.getStaffContact();
        StaffSign staffSign = staff.getStaffSign();
        StaffAccount staffAccount = staff.getStaffAccount();
        // 生成staffId
        Meta meta = metaMapper.selectOne(null);
        String staffId = "gp" + (meta.getStaffNum() + 1);
        Date now = new Date();
        // 封装 Meta
        Meta meta1 = new Meta();
        meta1.setId(1);
        meta1.setStaffNum(meta.getStaffNum() + 1);
        // 封装 StaffAccount
        staffAccount.setStaffId(staffId);
        staffAccount.setRegTime(now);
        staffAccount.setRegCode("");
        staffAccount.setStatus("1");
        staffAccount.setUpdateAt(now);
        // 封装 StaffContact
        staffContact.setStaffId(staffId);
        staffContact.setUpdateAt(now);
        // 封装 StaffInfo
        staffInfo.setStaffId(staffId);
        staffInfo.setUpdateAt(now);
        // 封装 StaffSign
        staffSign.setStaffId(staffId);
        staffSign.setStatus("1");
        staffSign.setUpdateAt(now);
        // 封装 StaffWork
        staffWork.setStaffId(staffId);
        staffWork.setUpdateAt(now);

        // 照片在数据库中只存储路径
        if (staffInfo.getPhoto() != null) {
            String photoPath = this.base64ToImg(staffInfo.getPhoto(), staffId, request);
            staffInfo.setPhoto(photoPath);
            staffSign.setPhoto(photoPath);
        }

        // 持久化到数据库
        int i = metaMapper.updateById(meta1);
        int insert = staffAccountMapper.insert(staffAccount);
        int insert1 = staffContactMapper.insert(staffContact);
        int insert2 = staffInfoMapper.insert(staffInfo);
        int insert3 = staffSignMapper.insert(staffSign);
        int insert4 = staffWorkMapper.insert(staffWork);

        result.succeed().message("添加成功");
        return result;
    }

    private String base64ToImg(String dataURL, String staffId, HttpServletRequest request) {

        // 获取 dataURL的类型和字符串数据
        String base64FileType = Utils.getBase64FileType(dataURL);
        String base64Data = Utils.getBase64Data(dataURL);

        // 当前项目的服务器运行目录。 在开发阶段一直变化，在实际部署阶段就不会变化了。
        String staffPhotoPath = request.getServletContext().getRealPath(StringConst.PATH_UPLOAD_STAFF_PHOTO);
        // 创建目录
        Utils.mkdirs(staffPhotoPath);
        // 生成文件名
        String imgName = staffId + "_photo_" + UUID.randomUUID() + "." + base64FileType;
        String imgPath = staffPhotoPath + imgName;
        // 将base64字符串数据转换为二进制数组
        byte[] base64Bytes = Utils.base64ToBytes(base64Data);
        String imgServerPath = null;
        try {
            System.out.println(imgPath);
            // 将文件输出到指定目录
            OutputStream out = new FileOutputStream(imgPath);
            out.write(base64Bytes);
            out.flush();
            out.close();
            // 设置照片路径
            imgServerPath = StringConst.PATH_SERVER_ROOT + StringConst.PATH_UPLOAD_STAFF_PHOTO + imgName;
        } catch (IOException e) {
            e.printStackTrace();
        }

        return imgServerPath;
    }

    public void updateStaffSign(StaffSign staffSign) {
        UpdateWrapper<StaffSign> staffSignUpdateWrapper = new UpdateWrapper<>();
        staffSignUpdateWrapper.eq("staff_id", staffSign.getStaffId());
        staffSignMapper.update(staffSign,staffSignUpdateWrapper);
    }

    public void updateStaffInfo(StaffInfo staffInfo) {
        UpdateWrapper<StaffInfo> staffInfoUpdateWrapper = new UpdateWrapper<>();
        staffInfoUpdateWrapper.eq("staff_id",staffInfo.getStaffId());
        staffInfoMapper.update(staffInfo,staffInfoUpdateWrapper);
    }

    @Transactional
    public void updateStaffPhoto(StaffSign staffSign, StaffInfo staffInfo) {
        this.updateStaffSign(staffSign);
        this.updateStaffInfo(staffInfo);
    }


    public Result uploadPhotoByBase64(HashMap<String, String> photoByBase64, HttpServletRequest request) {
        Result result = new Result();
        String token = photoByBase64.get(StringConst.STAFF_SIGN_UP);
        String dataURL = photoByBase64.get("dataURL");

        // 获取staffId
        String email = TokenUtil.getClaimsByToken(token).getSubject();
        StaffSign staffSign = this.findStaffSignByEmail(email);
        String staffId = staffSign.getStaffId();
        StaffInfo staffInfo = this.findStaffInfoByStaffId(staffId);

        String photoPath = this.base64ToImg(dataURL, staffId, request);
        // 设置照片路径，并更新到数据库
        staffSign.setPhoto(photoPath);
        staffInfo.setPhoto(photoPath);
        this.updateStaffPhoto(staffSign, staffInfo);

        result.succeed().message("照片更换成功").data(StringConst.STAFF_PHOTO, photoPath);
        return result;
    }


    @Transactional
    public Result deleteStaff(String staffEmail) {
        Result result = new Result();

        QueryWrapper<StaffSign> staffSignQueryWrapper = new QueryWrapper<>();
        staffSignQueryWrapper.eq("email", staffEmail);
        StaffSign staffSign = staffSignMapper.selectOne(staffSignQueryWrapper);
        String staffId = staffSign.getStaffId();

        // 更新meta
        Meta meta = metaMapper.selectOne(null);
        meta.setStaffNum(meta.getStaffNum() - 1);
        metaMapper.update(meta, null);

        UpdateWrapper<StaffAccount> staffAccountUpdateWrapper = new UpdateWrapper<>();
        UpdateWrapper<StaffContact> staffContactUpdateWrapper = new UpdateWrapper<>();
        UpdateWrapper<StaffInfo> staffInfoUpdateWrapper = new UpdateWrapper<>();
        UpdateWrapper<StaffSign> staffSignUpdateWrapper = new UpdateWrapper<>();
        UpdateWrapper<StaffWork> staffWorkUpdateWrapper = new UpdateWrapper<>();

        staffAccountUpdateWrapper.eq("staff_id", staffId);
        staffWorkUpdateWrapper.eq("staff_id", staffId);
        staffInfoUpdateWrapper.eq("staff_id", staffId);
        staffContactUpdateWrapper.eq("staff_id", staffId);
        staffSignUpdateWrapper.eq("staff_id", staffId);

        int i = staffAccountMapper.delete(staffAccountUpdateWrapper);
        int i1 = staffContactMapper.delete(staffContactUpdateWrapper);
        int i2 = staffInfoMapper.delete(staffInfoUpdateWrapper);
        int i3 = staffSignMapper.delete(staffSignUpdateWrapper);
        int i5 = staffWorkMapper.delete(staffWorkUpdateWrapper);

        result.succeed().message("删除成功");

        return result;
    }
}
