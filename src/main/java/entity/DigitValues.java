package entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "digitValues")
public class DigitValues {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double digitRA;
    private Double digitRB;
    private Double digitRC;

}
