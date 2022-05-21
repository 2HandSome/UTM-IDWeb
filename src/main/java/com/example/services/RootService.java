package com.example.services;

import com.example.dto.DigitsDto;
import com.example.dto.Response;
import com.example.entity.repository.DigitRepository;
import com.example.entity.Digits;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static java.util.Objects.isNull;

@Service
@RequiredArgsConstructor
public class RootService {

    @Autowired
    private DigitRepository digitRepository;

    public void saveDigit(List<DigitsDto> values) {
        values.forEach(
                v -> {
                    var byDigit = digitRepository.findByNameOfDigit(v.getNameOfDigit());
                    if (isNull(byDigit)) {
                        var digit = new Digits();
                        digit.setNameOfDigit(v.getNameOfDigit());
                        digit.setDigit(v.getDigit());
                        digit.setDigitRoot(calculateRoot(v.getDigit()));
                        digitRepository.save(digit);
                    } else if (byDigit.getDigit() != v.getDigit()) {
                        byDigit.setDigit(v.getDigit());
                        byDigit.setDigitRoot(calculateRoot(v.getDigit()));
                        digitRepository.save(byDigit);
                    }
                }
        );
    }

    public List<Response> all() {
        var all = digitRepository.findAll();
        List<Response> allDigits = new ArrayList<>();

        all.forEach(d -> {
            Response digits = new Response();
            digits.setDigit(d.getDigit());
            digits.setNameOfDigit(d.getNameOfDigit());
            digits.setResponse(d.getDigitRoot());
            allDigits.add(digits);
        });
        return allDigits;
    }

    public Response getByName(String nameOfDigit) {
        var digitByName = digitRepository.findByNameOfDigit(nameOfDigit);

        Response digits = new Response();
            digits.setDigit(digitByName.getDigit());
            digits.setNameOfDigit(digitByName.getNameOfDigit());
            digits.setResponse(digitByName.getDigitRoot());

        return digits;
    }
    private Double calculateRoot(Double digit) {
        return Math.sqrt(digit);
    }
}
