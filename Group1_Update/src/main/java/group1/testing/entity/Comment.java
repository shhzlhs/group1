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
@Table(name = "Comments")
@Data
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "post_id")
    @JsonBackReference
    private Post post;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @OneToMany(mappedBy = "comment")
    @JsonBackReference
    private List<Report> reports;

    @OneToMany(mappedBy = "comment")
    @JsonBackReference
    private List<Like> likes;

    @OneToMany(mappedBy = "comment")
    @JsonBackReference
    private List<Comment> replies;

    @ManyToOne
    @JoinColumn(name = "reply_to")
    @JsonBackReference
    private Comment comment;

    @Column(length = 2000, nullable = false)
    private String content;

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
