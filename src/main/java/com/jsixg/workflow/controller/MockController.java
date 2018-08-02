package com.jsixg.workflow.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mock")
public class MockController {

    @GetMapping("/rest/account")
    public String restAccount() {
        return "{\"id\":\"admin\",\"firstName\":\"Test\",\"lastName\":\"Administrator\",\"email\":\"admin@flowable.org\",\"fullName\":\"Test Administrator\",\"groups\":[],\"privileges\":[\"access-idm\",\"access-rest-api\",\"access-task\",\"access-modeler\",\"access-admin\"]}";
    }
}
