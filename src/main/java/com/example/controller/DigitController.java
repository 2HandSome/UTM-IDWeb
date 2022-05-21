package com.example.controller;


import com.example.dto.DigitsDto;
import com.example.services.RootService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController()
@RequestMapping("digit")
public class DigitController {

    @Autowired
    private RootService rootService;

    @PostMapping("/new")
    public ResponseEntity<?> saveDigits(@RequestBody List<DigitsDto> values) throws Exception {
        rootService.saveDigit(values);
        return ok().build();
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllDigits() throws Exception {

        return ok("rootService.all()");
    }
}
