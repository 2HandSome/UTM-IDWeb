package com.example.controller;


import com.example.dto.DigitsDto;
import com.example.services.RootService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController()
@RequestMapping("digit")
@CrossOrigin(origins = "http://localhost:3000")
public class DigitController {

    @Autowired
    private RootService rootService;

    @PostMapping("/new")
    public ResponseEntity<?> saveDigits(@RequestBody List<DigitsDto> values) throws Exception {
        rootService.saveDigit(values);
        return ok().build();
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllDigits(){
        return ok(rootService.all());
    }

    @GetMapping("/{name}")
    public ResponseEntity<?> getAllDigits(@PathVariable("name") String name){
        return ok(rootService.getByName(name));
    }
}
