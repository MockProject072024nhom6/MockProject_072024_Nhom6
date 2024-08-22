package com.revolver.springsecurity.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Columns;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Day_off")
public class DayOff {
    @Id
    @GeneratedValue
    @Column(name = "day_off_id")
    private Integer id;
    private String reason;
    @Column(name = "day_off_status")
    private DayOffStatus status;
    @Column(name = "start_dates")
    private LocalDate startDates;
    @Column(name = "end_dates")
    private LocalDate endDates;
    @ManyToOne
    @JoinColumn(name = "guard_id")
    private Guard guard;
    @ManyToOne
    @JoinColumn(name = "supervisor_id")
    private Supervisor supervisor;
}
