package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.Instant;
import java.time.ZoneId;
import java.util.Date;

@Entity
@Table(name = "Follows")
@Data
@NoArgsConstructor
public class Follow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "follower_id")
    @JsonBackReference
    private User follower;

    @ManyToOne
    @JoinColumn(name = "following_id")
    @JsonBackReference
    private User following;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdAt;

    @PrePersist
    public void prePersist() {
        ZoneId zoneId = ZoneId.of("Asia/Bangkok");
        Instant now = Instant.now();
        if (createdAt == null) {
            createdAt = Date.from(now.atZone(zoneId).toInstant());
        }
    }
}
