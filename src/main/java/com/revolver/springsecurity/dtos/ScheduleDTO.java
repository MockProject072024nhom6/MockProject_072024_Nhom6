package com.revolver.springsecurity.dtos;

import com.revolver.springsecurity.entities.Guard;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ScheduleDTO {
    private int id;
    private LocalDateTime startTime;
    private String name;
    private LocalDateTime endTime;
    private List<GuardDTO> guards;
}
