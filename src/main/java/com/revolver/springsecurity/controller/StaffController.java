package com.revolver.springsecurity.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/staff")
@PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
public class StaffController {

        @GetMapping
        public String get(){
            return "GET:: STAFF";
        }
        @PostMapping("/create")
        public String post(){
            return "POST:: STAFF";
        }
        @PutMapping("/update")
        public String put(){
            return "PUT:: STAFF";
        }
        @DeleteMapping("/delete")
        public String delete(){
            return "DELETE:: STAFF";
        }
}
