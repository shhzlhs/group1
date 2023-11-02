package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "Games")
@Data
@NoArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "`name`", length = 255, nullable = false)
    private String name;

    @Column(name = "slot_coin_price", nullable = false)
    private int slotCoinPrice;

    @Column(name = "slot_gold_price", nullable = false)
    private int slotGoldPrice;

    @Column(length = 50, nullable = false)
    private String logo;

    @OneToMany(mappedBy = "game")
    @JsonBackReference
    private List<GameSlot> gameSlots;
}
