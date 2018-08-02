package com.jsixg.workflow.controller;

import com.jsixg.workflow.utils.Parametermap;
import org.flowable.engine.IdentityService;
import org.flowable.idm.api.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class IndexController extends BaseController{

    @Autowired
    IdentityService identityService;
    @RequestMapping(value="/")
    public String toLogin() {
        return "login";
    }
    @RequestMapping(value="index")
    public String index() {
        return "index";
    }
    @RequestMapping(value="/uploadToView")
    public Object uploadToView() {
        return "page/process/editcontentpage.html";
    }

    @RequestMapping(value="/login")
    @ResponseBody
    public Object login() {
        Parametermap parametermap = getParametermap();
        Object username = parametermap.get("username");
        Object password = parametermap.get("password");
        Map<String, String> map=new HashMap<>();
        User user = identityService.createUserQuery().userId(username.toString()).singleResult();
        if (user!=null) {
            String dbpassword = user.getPassword();
            if (password!=null && password.equals(dbpassword)) {
                map.put("status", "success");
            }else {
                map.put("status", "fail");
            }
        }
        return map;
    }

    @RequestMapping(value="/logout")
    public String logout() {
        return "login";
    }
}
