package group1.testing.service.games;

import group1.testing.entity.Game;
import group1.testing.form.game.CreateGameForm;
import group1.testing.repository.IGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class GameService implements IGameService {
    @Autowired
    IGameRepository gameRepository;

    @Override
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    @Override
    public void createGame(CreateGameForm form) {
        Game game = new Game();
        game.setName(form.getName());
        game.setSlotCoinPrice(form.getSlotCoinPrice());
        game.setSlotGoldPrice(form.getSlotGoldPrice());
        game.setLogo(form.getLogo());
        gameRepository.save(game);
    }
}
