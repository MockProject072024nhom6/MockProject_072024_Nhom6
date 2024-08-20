package com.revolver.springsecurity.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/customer")
@PreAuthorize("hasRole('ADMIN') or hasRole('CUSTOMER')")
public class CustomerController {

            @GetMapping
            public String get(){
                return "GET:: CUSTOMER";
            }
            @PostMapping("/create")
            public String post(){
                return "POST:: CUSTOMER";
            }
            @PutMapping("/update")
            public String put(){
                return "PUT:: CUSTOMER";
            }
            @DeleteMapping("/delete")
            public String delete(){
                return "DELETE:: CUSTOMER";
            }
}
