package com.revolver.springsecurity.repositories;

import com.revolver.springsecurity.dtos.RequestDayOff;
import com.revolver.springsecurity.entities.DayOff;
import org.hibernate.annotations.NamedNativeQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface DayOffRepository extends JpaRepository<DayOff, Integer> {

    // tạo một query tạo mới một ngày nghỉ
    @Modifying
    @Query(
            value = "insert into day_off (day_off_id, start_dates, end_dates, reason, day_off_status) values (5,'2024-08-20', '2024-08-20', 'abc', 1)",
            nativeQuery = true
    )
    int requestDayOff(RequestDayOff requestDayOff);

    // tạo một query duyệt một ngày nghỉ
    @Modifying
    @Query(
            value = "update day_off set day_off_status = 2, supervisor_id = ?2 where day_off_id = ?1",
            nativeQuery = true
    )
    int approveDayOff(int dayOffId, int supervisorId);
}
