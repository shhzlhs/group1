package group1.testing.service.gameslot;

import group1.testing.entity.GameSlot;

import java.util.List;

public interface IGameSlotService {

    List<GameSlot> getGameSlotByUserId(int userId);

    void changeSlotByUserIdAndUserId(int userId, int gameId, int changedNumber);

    void createGameSlots(int userId);
}
