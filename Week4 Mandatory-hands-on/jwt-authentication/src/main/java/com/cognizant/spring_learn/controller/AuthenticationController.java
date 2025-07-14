package com.cognizant.spring_learn.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START of authenticate()");
        LOGGER.debug("Authorization Header: {}", authHeader);

        String user = getUser(authHeader);
        LOGGER.debug("User extracted: {}", user);

        String token = generateJwt(user);

        Map<String, String> map = new HashMap<>();
        map.put("token", token);

        LOGGER.info("END of authenticate()");
        return map;
    }

    private String getUser(String authHeader) {
        LOGGER.info("START of getUser()");
        // Remove "Basic " prefix
        String encodedCredentials = authHeader.substring("Basic ".length());

        // Decode Base64
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decodedString = new String(decodedBytes);

        LOGGER.debug("Decoded Credentials: {}", decodedString);

        // Split into username and password
        String user = decodedString.split(":")[0];

        LOGGER.info("END of getUser()");
        return user;
    }

    private String generateJwt(String user) {
        LOGGER.info("START of generateJwt()");

        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);
        builder.setIssuedAt(new Date());
        builder.setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000)); // 20 mins
       // builder.signWith(SignatureAlgorithm.HS256, "secretkey");
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        builder.signWith(key);

        String token = builder.compact();

        LOGGER.info("END of generateJwt()");
        return token;
    }
}
