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
@Table(name = "Messages")
@Data
@NoArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "conversation_id")
    @JsonBackReference
    private Conversation conversation;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    @JsonBackReference
    private User sender;

    @Column
    private String content;


    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdAt;

    @Column(name = "is_deleted_1")
    private String del1;

    @Column(name = "is_deleted_2")
    private String del2;

    @Column(name = "is_read")
    private String isRead;

    @PrePersist
    public void prePersist() {
        if (del1 == null) {
            del1 = "N";
        }
        if (del2 == null) {
            del2 = "N";
        }
        if (isRead==null){
            isRead = "N";
        }
        ZoneId zoneId = ZoneId.of("Asia/Bangkok");
        Instant now = Instant.now();
        if (createdAt == null) {
            createdAt = Date.from(now.atZone(zoneId).toInstant());
        }
    }
}
