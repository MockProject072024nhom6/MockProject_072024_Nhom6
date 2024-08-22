package com.revolver.springsecurity.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateScheduleRequest {
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private List<Integer> guardIds;
    private String name;

}
