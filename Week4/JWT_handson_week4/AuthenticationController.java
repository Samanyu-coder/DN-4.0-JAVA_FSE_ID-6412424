package com.example.jwt_auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        String user = getUserFromHeader(authHeader);
        String token = generateToken(user);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        return response;
    }

    private String getUserFromHeader(String authHeader) {
        String encodedCredentials = authHeader.replace("Basic ", "");
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decoded = new String(decodedBytes);
        return decoded.split(":")[0];
    }

    private String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000)) // 20 mins
                .signWith(SignatureAlgorithm.HS256, "secretkey")
                .compact();
    }
}
