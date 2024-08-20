package com.revolver.springsecurity.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/management")
@PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER')")
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
