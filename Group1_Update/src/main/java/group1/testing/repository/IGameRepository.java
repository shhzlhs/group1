package group1.testing.repository;

import group1.testing.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IGameRepository extends JpaRepository<Game,Integer> {
}
