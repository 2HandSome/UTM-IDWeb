package com.example.entity.repository;

import com.example.dto.Response;
import com.example.entity.Digits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DigitRepository extends JpaRepository<Digits, Long> {

    Digits findByDigit(Double value);
}
