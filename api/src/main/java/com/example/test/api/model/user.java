package com.example.test.api.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table (name = "user", schema = "public")
public class user {

    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	private String pass;
    public user() {
    }

    public user(String name, String pass, Long id){
        this.name= name;
        this.pass= pass;
        this.id= id;
    }

    public user(String name, String pass){
        this.name= name;
        this.pass= pass;
        
    }
    public Long getId() {
        return id; 
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }



}
