package com.revolver.springsecurity.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "Schedule")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private LocalDateTime startTime;
    private String name;

    private LocalDateTime endTime;

    @ManyToMany // Many schedules can have many guards
    @JoinTable(
            name = "schedule_guard",
            joinColumns = @JoinColumn(name = "schedule_id"),
            inverseJoinColumns = @JoinColumn(name = "guard_id")
    )
    private List<Guard> guards;
}
