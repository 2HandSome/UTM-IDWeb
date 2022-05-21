package com.example.services;

import com.example.dto.DigitsDto;
import com.example.entity.repository.DigitRepository;
import com.example.entity.Digits;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.Objects.isNull;

@Service
@RequiredArgsConstructor
public class RootService {

    @Autowired
    private DigitRepository digitRepository;

    public void saveDigit(List<DigitsDto> values) {
        values.stream().forEach(
                v -> {
                    var byDigit = digitRepository.findByDigit(v.getDigit());
                    var digit = new Digits();
                    digit.setDigit(v.getDigit());
                    if(isNull(byDigit)){
                        digit.setDigitRoot(calculateRoot(v.getDigit()));
                        digitRepository.save(digit);
                    }
                }
        );
    }

    public DigitsDto all() {
        return null;
    }

    private Double calculateRoot(Double digit) {
        return Math.sqrt(digit);
    }
}
