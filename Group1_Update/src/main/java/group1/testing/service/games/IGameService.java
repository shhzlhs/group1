package group1.testing.service.games;

import group1.testing.entity.Game;
import group1.testing.form.game.CreateGameForm;

import java.util.List;

public interface IGameService {

    List<Game> getAllGames();

    void createGame (CreateGameForm form);
}
