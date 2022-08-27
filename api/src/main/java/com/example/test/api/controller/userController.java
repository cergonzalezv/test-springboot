package com.example.test.api.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.example.test.api.model.user;

import com.example.test.api.service.userService;

@RestController
@RequestMapping ("/user/")

public class userController {

    @Autowired
	private userService userService;
	
	
		
	@GetMapping
	private ResponseEntity<List<user>> listarTodoslosUsuarios(){
		return ResponseEntity.ok(userService.getAllPersonas());
	}
	
	@DeleteMapping
	private ResponseEntity<Void> eliminarUser (@RequestBody user user){
	    userService.delete(user);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping (value = "{id}")
	private ResponseEntity<Optional<user>> listarUsuarioPorID (@PathVariable ("id") Long id){
		return ResponseEntity.ok(userService.findById(id));
	}
    
    
}
