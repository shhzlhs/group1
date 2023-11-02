package group1.testing.repository;

import group1.testing.entity.GameSlot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IGameSlotRepository extends JpaRepository<GameSlot,Integer> {
    List<GameSlot> findAllByUserId(int userId);

    GameSlot findByUserIdAndGameId (int userId,int gameId);
}
