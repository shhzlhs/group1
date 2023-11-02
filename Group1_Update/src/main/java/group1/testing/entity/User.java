package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Users")
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(length = 255, nullable = false, unique = true)
    private String username;

    @Column(length = 255, nullable = false, unique = true)
    private String email;

    @Column(name = "full_name", length = 255, nullable = false)
    private String fullName;

    @Column(name = "`password`", length = 255, nullable = false)
    private String password;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(name = "`role`", nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;


    @Column(name = "`status`", nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;


    @Column
    private int coin;


    @Column
    private int gold;


    @Column(length = 255)
    private String avatar;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdAt;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<TransactionHistory> transactions;

    //posts
    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Post> posts;

    //comments
    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Comment> comments;

    //likes
    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Like> likes;

    //messages
    @OneToMany(mappedBy = "sender")
    @JsonBackReference
    private List<Message> sentMessages;


    //notifications
    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Notification> notifications;

    @OneToMany(mappedBy = "reporter")
    @JsonBackReference
    private List<Report> reports;

    @OneToMany(mappedBy = "reportTo")
    @JsonBackReference
    private List<Report> beReports;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<GameSlot> gameSlots;

    @ManyToMany
    @JoinTable(
            name = "Follows",
            joinColumns = {@JoinColumn(name = "follower_id")},
            inverseJoinColumns = {@JoinColumn(name = "following_id")}
    )
    private List<User> followings;

    @ManyToMany
    @JoinTable(
            name = "Follows",
            joinColumns = {@JoinColumn(name = "following_id")},
            inverseJoinColumns = {@JoinColumn(name = "follower_id")}
    )
    private List<User> follows;

    @ManyToMany
    @JoinTable(
            name = "User_item",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "item_id")}
    )
    private List<Item> items;

    @PrePersist
    public void prePersist() {
        if (coin == 0) {
            coin = 1000;
        }
        if (role == null) {
            role = Role.USER;
        }
        if (status == null) {
            status = Status.U_ACTIVE;
        }
        Instant now = Instant.now();
        if (createdAt == null) {
            createdAt = Date.from(now);
        }
    }

}
