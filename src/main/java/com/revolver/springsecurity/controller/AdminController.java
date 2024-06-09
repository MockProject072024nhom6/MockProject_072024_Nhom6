package com.revolver.springsecurity.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @GetMapping
    @PreAuthorize("hasAuthority('admin:read')")
    public String get(){
        return "GET:: ADMIN";
    }
    @PostMapping
    @PreAuthorize("hasAuthority('admin:create')")
    public String post(){
        return "POST:: ADMIN";
    }
    @PutMapping
    @PreAuthorize("hasAuthority('admin:update')")
    public String put(){
        return "PUT:: ADMIN";
    }
    @DeleteMapping
    @PreAuthorize("hasAuthority('admin:delete')")
    public String delete(){
        return "DELETE:: ADMIN";
    }
}
