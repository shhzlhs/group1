package group1.testing.entity;


import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "Items")
@Data
@NoArgsConstructor
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "`name`", length = 50)
    private String name;

    @Column(length = 255)
    private String image;

    @Column(name = "coin_cost", nullable = false)
    private int coinCost;

    @Column(name = "gold_cost", nullable = false)
    private int goldCost;

    @ManyToMany(mappedBy = "items")
    private List<User> users;

    @Column(name = "`type`", nullable = false)
    @Enumerated(EnumType.STRING)
    private ItemType type;
}
