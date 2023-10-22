package group1.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Table(name = "Game_slot")
@Entity
public class GameSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private int slot;
    @PrePersist
    public void prePersistCoin() {
        if (slot == 0) {
            slot = 3;
        }
    }

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @ManyToOne
    @JoinColumn(name = "game_id")
    @JsonBackReference
    private Game game;
}

