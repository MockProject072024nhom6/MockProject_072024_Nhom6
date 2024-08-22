package com.revolver.springsecurity.services;

import com.revolver.springsecurity.entities.Feedback;
import com.revolver.springsecurity.repositories.FeedbackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FeedbackService {


    private final FeedbackRepository feedbackRepository;


//    public List<Feedback> getAllFeedbackbyUser() {
//
//    }
}
