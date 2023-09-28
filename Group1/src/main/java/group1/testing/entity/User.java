package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

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

    @Column(name = "`password`", length = 255, nullable = false)
    private String password;

    @Column(name = "`role`", nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    @PrePersist
    public void prePersistRole() {
        if (role == null) {
            role = Role.USER;
        }
    }

    @Column(name = "`status`", nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;

    @PrePersist
    public void prePersistStatus() {
        if (status == null) {
            status = Status.U_ACTIVE;
        }
    }

    @Column
    private int coin;

    @PrePersist
    public void prePersistCoin() {
        if (coin == 0) {
            coin = 1000;
        }
    }

    @Column
    private int gold;


    @Column(length = 255)
    private String avatar;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdAt;

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
    @OneToMany(mappedBy = "receiver")
    @JsonBackReference
    private List<Message> receivedMessages;

    //notifications
    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Notification> notifications;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<GameSlot> gameSlots;

    @ManyToMany
    @JoinTable(
            name = "User_item",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "item_id")}
    )
    private List<Item> items;

}
