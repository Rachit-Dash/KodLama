package com.example.diabetes.model;

import java.util.List;

public class DiabetesRequest {
    private List<Double> features;

    public List<Double> getFeatures() {
        return features;
    }

    public void setFeatures(List<Double> features) {
        this.features = features;
    }
}