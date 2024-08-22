package com.revolver.springsecurity.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Guards")
public class Guard {
    @Id
    @GeneratedValue
    @Column(name = "guard_id")
    private int id;
    private String skill;
    private String department;


    @ManyToMany(mappedBy = "guards")
    private List<Schedule> schedules;

    public Guard(int id) {
        this.id = id;
    }
}
