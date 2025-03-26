package com.example.diabetes.controller;

import com.example.diabetes.model.DiabetesRequest;
import com.example.diabetes.service.DiabetesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class DiabetesController {

    @Autowired
    private DiabetesService diabetesService;

    @PostMapping("/predict")
    public String predictDiabetes(@RequestBody DiabetesRequest request) {
        return diabetesService.predictDiabetes(request.getFeatures());
    }
}