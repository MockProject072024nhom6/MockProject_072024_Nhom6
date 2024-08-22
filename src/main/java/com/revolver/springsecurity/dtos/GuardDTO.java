package com.revolver.springsecurity.dtos;

import com.revolver.springsecurity.entities.Schedule;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GuardDTO {
    private int id;
    private String skill;
    private String department;
}
