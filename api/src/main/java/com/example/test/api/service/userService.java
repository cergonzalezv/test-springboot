package com.example.test.api.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.test.api.model.user;
import com.example.test.api.repository.userRepository;


@Service
public class userService {
    @Autowired
    private userRepository userRepository;

	
    
	public user create (user user) {
		return userRepository.save(user);
	}
	
	public List<user> getAllPersonas (){
		return userRepository.findAll();
	}
	
	public void delete (user user) {
		userRepository.delete(user);
	}
	
	public Optional<user> findById (Long id) {
		return userRepository.findById(id);
	}
}
