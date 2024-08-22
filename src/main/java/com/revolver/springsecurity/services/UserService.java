package com.revolver.springsecurity.services;

import com.revolver.springsecurity.entities.User;
import com.revolver.springsecurity.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public User getCurrentUser(Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        return userRepository.findByEmail(user.getEmail()).orElse(null);

    }
}
