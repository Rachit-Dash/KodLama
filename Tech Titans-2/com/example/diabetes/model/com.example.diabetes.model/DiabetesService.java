package com.example.diabetes.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;

@Service
public class DiabetesService {

    public String predictDiabetes(List<Double> features) {
        RestTemplate restTemplate = new RestTemplate();
        String flaskUrl = "http://127.0.0.1:5001/predict";

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("features", features);

        Map<String, String> response = restTemplate.postForObject(flaskUrl, requestBody, Map.class);
        return response.get("prediction");
    }
}