package com.revolver.springsecurity.services;

import com.revolver.springsecurity.dtos.CreateScheduleRequest;
import com.revolver.springsecurity.dtos.GuardDTO;
import com.revolver.springsecurity.dtos.ScheduleDTO;
import com.revolver.springsecurity.entities.Guard;
import com.revolver.springsecurity.entities.Schedule;
import com.revolver.springsecurity.repositories.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ScheduleService {

    private final ScheduleRepository scheduleRepository;

    public Schedule saveSchedule(CreateScheduleRequest request) {

        List<Guard> guards = new ArrayList<>();

        request.getGuardIds().stream().forEach(guardId -> {
            guards.add(new Guard(guardId));
        });

        Schedule schedule = Schedule.builder()
                .startTime(request.getStartTime())
                .endTime(request.getEndTime())
                .name(request.getName())
                .guards(guards)
                .build();

        return scheduleRepository.save(schedule);
    }

    public List<ScheduleDTO> getAllSchedule() {
        List<Schedule> schedules = scheduleRepository.findAll();
        List<ScheduleDTO> scheduleDTOS = new ArrayList<>();

        schedules.stream().forEach(schedule -> {
            List<Guard> guards = schedule.getGuards();
            List<GuardDTO> guardDTOS = new ArrayList<>();

            guards.stream().forEach(guard -> {
                guardDTOS.add(new GuardDTO(guard.getId(), guard.getSkill(), guard.getDepartment()));
            });

            scheduleDTOS.add(new ScheduleDTO(schedule.getId(), schedule.getStartTime(), schedule.getName(), schedule.getEndTime(), guardDTOS));
        });

        return scheduleDTOS;
    }
}
