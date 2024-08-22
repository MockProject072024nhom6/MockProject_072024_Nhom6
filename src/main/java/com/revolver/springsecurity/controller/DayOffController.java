package com.revolver.springsecurity.controller;

import com.revolver.springsecurity.dtos.RequestDayOff;
import com.revolver.springsecurity.entities.DayOff;
import com.revolver.springsecurity.services.DayOffService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/day-off")
public class DayOffController {
    private final DayOffService dayOffService;

    @PostMapping("/request")
    public DayOff requestDayOff(@RequestBody RequestDayOff requestDayOff) {
        return dayOffService.requestDayOff(requestDayOff);
    }

    @PostMapping("/approve")
    public DayOff approveDayOff(@RequestParam int dayOffId, @RequestParam int supervisorId) {
        return dayOffService.approveDayOff(dayOffId, supervisorId);
    }

    @GetMapping("/all")
    public List<DayOff> getAllDayOff() {
        return dayOffService.getAllDayOff();
    }
}
