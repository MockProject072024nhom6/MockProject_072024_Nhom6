package com.revolver.springsecurity.controller;

import com.revolver.springsecurity.entities.Feedback;
import com.revolver.springsecurity.entities.User;
import com.revolver.springsecurity.repositories.FeedbackRepository;
import com.revolver.springsecurity.services.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.core.ApplicationContext;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/customer")
@PreAuthorize("hasRole('ADMIN') or hasRole('CUSTOMER')")
public class CustomerController {
    private final FeedbackRepository feedbackRepository;
    private final UserService userService;

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
    @PostMapping("/create-feedback")
    public ResponseEntity<Feedback> createFeedback(@RequestBody  Feedback feedback){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User userInfo =  userService.getCurrentUser(authentication);
        feedback.setUser_id(userInfo);
        return  ResponseEntity.ok(feedbackRepository.save(feedback));
    }

}
