package group1.testing.service.gameslot;

import group1.testing.entity.Game;
import group1.testing.entity.GameSlot;
import group1.testing.entity.User;
import group1.testing.repository.IGameRepository;
import group1.testing.repository.IGameSlotRepository;
import group1.testing.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameSlotService implements IGameSlotService {
    @Autowired
    IGameSlotRepository gameSlotRepository;
    @Autowired
    IGameRepository gameRepository;

    @Autowired
    IUserRepository userRepository;

    @Override
    public List<GameSlot> getGameSlotByUserId(int userId) {
        return gameSlotRepository.findAllByUserId(userId);
    }

    @Override
    public void changeSlotByUserIdAndUserId(int userId, int gameId, int changedNumber) {
        GameSlot gameSlot = gameSlotRepository.findByUserIdAndGameId(userId, gameId);
        gameSlot.setSlot(gameSlot.getSlot() + changedNumber);
        gameSlotRepository.save(gameSlot);
    }

    @Override
    public void createGameSlots(int userId) {
        List<Game> games = gameRepository.findAll();
        User user = userRepository.findById(userId);
        List<GameSlot> gameSlots = gameSlotRepository.findAllByUserId(userId);
        for (Game game : games) {
            if (gameSlots.stream().noneMatch(slot -> slot.getGame().getId() == game.getId())) {
                GameSlot gameSlot = new GameSlot();
                gameSlot.setGame(game);
                gameSlot.setUser(user);
                gameSlotRepository.save(gameSlot);
            }
        }
    }
}
