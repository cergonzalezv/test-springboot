package com.example.test.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/weather")
public class wetherController {
    
    @GetMapping
    private String getNotice(){
        String url = "https://api.openweathermap.org/data/2.5/weather?lat=39&lon=-83&appid=ea51a4d5030b5d4eb93a9824563976e3";
        RestTemplate restTemplate = new RestTemplate();
        String Result = restTemplate.getForObject(url, String.class);
        return Result;
    }
    
}
