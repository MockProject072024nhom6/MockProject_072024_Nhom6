package com.revolver.springsecurity;

import com.revolver.springsecurity.dtos.RegisterRequest;
import com.revolver.springsecurity.entities.Role;
import com.revolver.springsecurity.services.AuthenticationService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication

public class SpringSecurityApplication {



	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(
			AuthenticationService authenticationService
	) {

		return args -> {
			var admin  = RegisterRequest.builder()
					.firstName("Default")
					.lastName("Admin")
					.email("admin@gmail.com")
					.password("admin")
					.role(Role.ADMIN)
					.build();
			System.out.println("Admin token: " +  authenticationService.register(admin).getAccessToken());
			var manager  = RegisterRequest.builder()
					.firstName("Default")
					.lastName("Manager")
					.email("manager@gmail.com")
					.password("manager")
					.role(Role.MANAGER)
					.build();
			System.out.println("Manager token: " +  authenticationService.register(manager).getAccessToken());
		};
	}

}
