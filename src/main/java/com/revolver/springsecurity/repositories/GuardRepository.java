package com.revolver.springsecurity.repositories;

import com.revolver.springsecurity.entities.Guard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuardRepository extends JpaRepository<Guard, Integer> {
}
