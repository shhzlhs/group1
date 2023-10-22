package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Table(name = "Answers")
@Data
@NoArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(length = 500, nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "q_id", nullable = false)
    @JsonBackReference
    private Question question;

    @Column(name = "is_true", length = 2)
    private String isTrue;
}
