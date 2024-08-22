package com.revolver.springsecurity.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.revolver.springsecurity.entities.Permission.*;
import static com.revolver.springsecurity.entities.Role.ADMIN;
import static com.revolver.springsecurity.entities.Role.MANAGER;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtFilter jwtFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(
                                "api/v1/auth/**",
                                "/swagger-ui/**",
                                "/v3/api-docs/**",
                                "/swagger-ui.html",
                                "/ws/**",
                                "/**")
                        .permitAll()

                        .requestMatchers(
                                "/api/v1/management/**"
                        ).hasAnyRole(ADMIN.name(), MANAGER.name())

                        .requestMatchers(HttpMethod.GET, "/api/v1/management/**").hasAnyAuthority(ADMIN_READ.name(),MANAGER_READ.name())
                        .requestMatchers(HttpMethod.POST, "/api/v1/management/**").hasAnyAuthority(ADMIN_CREATE.name(),MANAGER_CREATE.name())
                        .requestMatchers(HttpMethod.PUT, "/api/v1/management/**").hasAnyAuthority(ADMIN_UPDATE.name(),MANAGER_UPDATE.name())
                        .requestMatchers(HttpMethod.DELETE, "/api/v1/management/**").hasAnyAuthority(ADMIN_DELETE.name(),MANAGER_DELETE.name())

//                        .requestMatchers(
//                                "/api/v1/admin/**"
//                        ).hasRole(ADMIN.name())
//
//                        .requestMatchers(HttpMethod.GET, "/api/v1/admin/**").hasAuthority(ADMIN_READ.name())
//                        .requestMatchers(HttpMethod.POST, "/api/v1/admin/**").hasAuthority(ADMIN_CREATE.name())
//                        .requestMatchers(HttpMethod.PUT, "/api/v1/admin/**").hasAuthority(ADMIN_UPDATE.name())
//                        .requestMatchers(HttpMethod.DELETE, "/api/v1/admin/**").hasAuthority(ADMIN_DELETE.name())

                        .anyRequest()
                        .authenticated()
                ).sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

}