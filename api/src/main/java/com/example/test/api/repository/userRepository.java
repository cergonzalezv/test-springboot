package com.example.test.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.test.api.model.user;

public interface userRepository extends JpaRepository<user, Long> {

    @Query
    user findByName(String name);
    
}
