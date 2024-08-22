package com.revolver.springsecurity.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "feedback")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {
    @Id
    @GeneratedValue
    private Integer feedback_id;
    @Column(columnDefinition = "TEXT", name = "feedback_details")
    private String feedbackDetails;
    @Column(name = "feedback_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate feedbackDate;
    @Column(name = "feedback_rating")
    private Integer feedbackRating;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user_id;

    public Feedback(String feedbackDetails, LocalDate feedbackDate, Integer feedbackRating) {
        this.feedbackDetails = feedbackDetails;
        this.feedbackDate = feedbackDate;
        this.feedbackRating = feedbackRating;

    }
}
