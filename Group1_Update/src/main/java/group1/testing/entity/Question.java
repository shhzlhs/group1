package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name="Questions")
@Data
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(length = 500, nullable = false, unique = true)
    private String content;

    @Column(nullable = false)
    private int number;

    //answers
    @OneToMany(mappedBy = "question")
    @JsonBackReference
    private List<Answer> answers;
}
