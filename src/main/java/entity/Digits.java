package entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "digits")
public class Digits {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double digitA;
    private Double digitB;
    private Double digitC;
}
