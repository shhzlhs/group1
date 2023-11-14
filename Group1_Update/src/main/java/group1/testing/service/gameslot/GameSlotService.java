package group1.testing.service.gameslot;

import group1.testing.entity.Game;
import group1.testing.entity.GameSlot;
import group1.testing.entity.User;
import group1.testing.repository.IGameRepository;
import group1.testing.repository.IGameSlotRepository;
import group1.testing.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        User user = userRepository.findById(userId);
        if (user == null) {
            return;
        }

        List<Game> games = gameRepository.findAll();
        List<GameSlot> existingGameSlots = gameSlotRepository.findAllByUserId(userId);

        List<GameSlot> newGameSlots = new ArrayList<>();

        for (Game game : games) {
            if (!containsGameSlot(existingGameSlots, userId, game.getId())) {
                GameSlot gameSlot = new GameSlot();
                gameSlot.setGame(game);
                gameSlot.setUser(user);
                newGameSlots.add(gameSlot);
            }
        }

        if (!newGameSlots.isEmpty()) {
            gameSlotRepository.saveAll(newGameSlots);
        }
    }

    private boolean containsGameSlot(List<GameSlot> gameSlots, int userId, int gameId) {
        return gameSlots.stream()
                .anyMatch(slot -> slot.getUser().getId() == userId && slot.getGame().getId() == gameId);
    }
}
