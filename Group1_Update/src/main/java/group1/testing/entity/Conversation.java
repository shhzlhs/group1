package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.Instant;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Conversations")
@Data
@NoArgsConstructor
public class Conversation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_1_id")
    @JsonBackReference
    private User user1;

    @ManyToOne
    @JoinColumn(name = "user_2_id")
    @JsonBackReference
    private User user2;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdAt;

    @Column(name = "is_deleted_1")
    private String del1;

    @Column(name = "is_deleted_2")
    private String del2;

    @OneToMany(mappedBy = "conversation")
    @JsonBackReference
    private List<Message> messages;
    @PrePersist
    public void prePersist() {
        if (del1 == null) {
            del1 = "N";
        }
        if (del2 == null) {
            del2 = "N";
        }
        ZoneId zoneId = ZoneId.of("Asia/Bangkok");
        Instant now = Instant.now();
        if (createdAt == null) {
            createdAt = Date.from(now.atZone(zoneId).toInstant());
        }
    }
}
