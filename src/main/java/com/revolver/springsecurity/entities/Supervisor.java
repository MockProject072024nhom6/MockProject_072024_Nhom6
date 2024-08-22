package com.revolver.springsecurity.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Supervisors")
public class Supervisor {
    @Id
    @GeneratedValue
    @Column(name = "supervisor_id")
    private int id;
    private int experience;
    private String department;
    private String certification;

    public Supervisor(int i) {
        this.id = i;
    }
}
