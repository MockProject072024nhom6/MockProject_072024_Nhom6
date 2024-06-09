package com.revolver.springsecurity.config;


import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Revolver",
                        email = "foxfessor@gmail.com"
                ),
                description = "This is a simple Spring Security project",
                title = "Spring Security - Revolver",
                version = "1.0.0"
        )
)
public class OpenApiConfig {
}
