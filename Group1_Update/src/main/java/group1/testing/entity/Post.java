package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;


import java.time.Instant;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Posts")
@Data
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @Column(length = 255, nullable = false)
    private String image;

    @Column(length = 2000)
    private String content;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdAt;

    //comments
    @OneToMany(mappedBy = "post")
    @JsonBackReference
    private List<Comment> comments;

    //likes
    @OneToMany(mappedBy = "post")
    @JsonBackReference
    private List<Like> likes;

    @OneToMany(mappedBy = "post")
    @JsonBackReference
    private List<Report> reports;

    @PrePersist
    public void prePersist() {
        ZoneId zoneId = ZoneId.of("Asia/Bangkok");
        Instant now = Instant.now();
        if (createdAt == null) {
            createdAt = Date.from(now.atZone(zoneId).toInstant());
        }
    }
}
