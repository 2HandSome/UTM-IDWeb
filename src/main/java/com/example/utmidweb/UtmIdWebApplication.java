package com.example.utmidweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.example.entity")
@EnableJpaRepositories(basePackages = "com.example.entity.repository")
@ComponentScan(basePackages = "com.example")
public class UtmIdWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(UtmIdWebApplication.class, args);
    }

}
