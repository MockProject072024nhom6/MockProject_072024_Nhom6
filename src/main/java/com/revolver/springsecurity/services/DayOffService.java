package com.revolver.springsecurity.services;

import com.revolver.springsecurity.dtos.RequestDayOff;
import com.revolver.springsecurity.entities.DayOff;
import com.revolver.springsecurity.entities.DayOffStatus;
import com.revolver.springsecurity.entities.Guard;
import com.revolver.springsecurity.entities.Supervisor;
import com.revolver.springsecurity.repositories.DayOffRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DayOffService {

    private final DayOffRepository dayOffRepository;

    private final JdbcTemplate jdbcTemplate;
    public DayOff requestDayOff(RequestDayOff requestDayOff) {
        DayOff dayOff = new DayOff();
        dayOff.setStartDates(requestDayOff.getStartDate());
        dayOff.setEndDates(requestDayOff.getEndDate());
        dayOff.setReason(requestDayOff.getReason());
        dayOff.setStatus(DayOffStatus.PENDING);
        dayOff.setGuard(new Guard(requestDayOff.getGuardId()));
//        dayOff.setSupervisor(new Supervisor(1));
        System.out.println("dayoff: " + dayOff);
        System.out.println(requestDayOff);
//        System.out.println(dayOffRepository.requestDayOff(requestDayOff));
        return dayOffRepository.save(dayOff);
    }

    public List<DayOff> getAllDayOff() {
        return dayOffRepository.findAll();
    }

    @Transactional
    public DayOff approveDayOff(int dayOffId, int supervisorId) {
//        DayOff dayOff = dayOffRepository.findById(dayOffId).orElseThrow();
//        dayOff.setStatus(DayOffStatus.APPROVED);
//        dayOff.setSupervisor(new Supervisor(supervisorId));
        dayOffRepository.approveDayOff(dayOffId, supervisorId);

//        return dayOffRepository.save(dayOff);
        return new DayOff();
    }
}
