package com.revolver.springsecurity.controller;

import com.revolver.springsecurity.dtos.CreateScheduleRequest;
import com.revolver.springsecurity.dtos.ScheduleDTO;
import com.revolver.springsecurity.entities.Schedule;
import com.revolver.springsecurity.services.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/schedule")
public class ScheduleController {

    private final ScheduleService scheduleService;

    @PostMapping("/save")
    public Schedule saveSchedule(@RequestBody CreateScheduleRequest request) {
        return scheduleService.saveSchedule(request);
    }

    @GetMapping("/all")
    public List<ScheduleDTO> getAllSchedule() {
        return scheduleService.getAllSchedule();
    }

}
