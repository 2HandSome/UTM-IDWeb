package com.example.entity;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Entity
@Table(name = "digits")
@Data
public class Digits {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double digitA;
    private Double digitB;
    private Double digitC;

    @OneToOne
    @JoinColumn(name = "digit_value_id")
    @EqualsAndHashCode.Exclude
    private DigitValues digitValues;
}
