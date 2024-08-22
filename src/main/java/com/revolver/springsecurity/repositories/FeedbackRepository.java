package com.revolver.springsecurity.repositories;

import com.revolver.springsecurity.entities.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {



}
