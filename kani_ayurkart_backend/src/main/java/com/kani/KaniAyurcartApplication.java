package com.kani;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KaniAyurcartApplication {

	public static void main(String[] args) {
		SpringApplication.run(KaniAyurcartApplication.class, args);
		System.out.println("Server started");
	}

}