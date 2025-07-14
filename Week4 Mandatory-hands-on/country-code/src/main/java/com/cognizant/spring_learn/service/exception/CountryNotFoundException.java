package com.cognizant.spring_learn.service.exception;

public class CountryNotFoundException extends Throwable {
    public CountryNotFoundException(String message) {
        super(message);
    }
}
