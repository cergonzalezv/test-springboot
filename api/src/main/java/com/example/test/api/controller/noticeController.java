package com.example.test.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;



@RestController
@RequestMapping("/notice")
public class noticeController {

    @GetMapping
    private String getNotice(){
        String url = "https://newsapi.org/v2/everything?q=Apple&from=2022-08-27&sortBy=popularity&apiKey=5e4afb7e039249ed9f9c0cf5778ec19d";
        RestTemplate restTemplate = new RestTemplate();
        String Result = restTemplate.getForObject(url, String.class);
        return Result;
    }
    
}



