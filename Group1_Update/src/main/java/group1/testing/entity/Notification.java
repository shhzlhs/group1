package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.time.ZoneId;
import java.util.Date;

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

    @ManyToOne
    @JoinColumn(name = "post_id")
    @JsonBackReference
    private Post post;

    @ManyToOne
    @JoinColumn(name = "comment_id")
    @JsonBackReference
    private Comment comment;

    @Column(length = 255, nullable = false)
    private String content;

    @Column(name = "is_read", nullable = false)
    private String isRead;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdAt;

    @PrePersist
    public void prePersist() {
        if (isRead==null){
            isRead="N";
        }
        ZoneId zoneId = ZoneId.of("Asia/Bangkok");
        Instant now = Instant.now();
        if (createdAt == null) {
            createdAt = Date.from(now.atZone(zoneId).toInstant());
        }
    }
}
