package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Notifications")
@Data
@NoArgsConstructor
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

    @ManyToOne
    @JoinColumn(name = "creator_id", nullable = false)
    @JsonBackReference
    private User creator;

    @Column(length = 255, nullable = false)
    private String content;

    @Column(name = "is_read", nullable = false)
    private boolean isRead;


}
