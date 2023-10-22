package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "User_item")
@Data
@NoArgsConstructor
public class UserItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @ManyToOne
    @JoinColumn(name = "item_id")
    @JsonBackReference
    private Item item;
}
