package com.revolver.springsecurity.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestDayOff {
    private LocalDate startDate;
    private LocalDate endDate;
    private String reason;
    private int guardId;
}
