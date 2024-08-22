package com.revolver.springsecurity.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/guard")
@PreAuthorize("hasRole('ADMIN') or hasRole('GUARD')")
public class GuardController {

    @GetMapping
    public String get() {
        return "GET:: GUARD";
    }

    @PostMapping("/create")
    public String post() {
        return "POST:: GUARD";
    }

    @PutMapping("/update")
    public String put() {
        return "PUT:: GUARD";
    }

    @DeleteMapping("/delete")
    public String delete() {
        return "DELETE:: GUARD";
    }

    @PostMapping("/request-day-off")
    public String requestDayOff(
            @RequestParam String startDate,
            @RequestParam String endDate,
            @RequestParam String reason,
            @RequestParam int guardId) {
        return "POST:: GUARD:: REQUEST DAY OFF";
    }
}
