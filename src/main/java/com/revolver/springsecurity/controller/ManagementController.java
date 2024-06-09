package com.revolver.springsecurity.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/management")
public class ManagementController {
    @GetMapping
    public String get(){
        return "GET:: Management";
    }
    @PostMapping
    public String post(){
        return "POST:: Management";
    }
    @PutMapping
    public String put(){
        return "PUT:: Management";
    }
    @DeleteMapping
    public String delete(){
        return "DELETE:: Management";
    }
}
