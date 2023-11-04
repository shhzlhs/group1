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
@Data
@NoArgsConstructor
@Table(name = "Transaction_History")
public class TransactionHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "coin_or_gold", nullable = false)
    @Enumerated(EnumType.STRING)
    private CoinOrGold coinOrGold;

    @Column(name = "`type`", nullable = false)
    @Enumerated(EnumType.STRING)
    private TranType type;

    @Column
    private String content;

    @Column(name = "changed_number", nullable = false)
    private int changedNumber;

    @Column(name = "last_balance", nullable = false)
    private int lastBalance;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @PrePersist
    public void prePersist() {
        ZoneId zoneId = ZoneId.of("Asia/Bangkok");
        Instant now = Instant.now();
        if (createdAt == null) {
            createdAt = Date.from(now.atZone(zoneId).toInstant());
        }
    }
}
