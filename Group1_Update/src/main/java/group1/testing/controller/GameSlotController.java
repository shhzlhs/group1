package group1.testing.controller;

import group1.testing.dto.GameDTO;
import group1.testing.dto.GameSlotDTO;
import group1.testing.entity.GameSlot;
import group1.testing.service.gameslot.IGameSlotService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/gameSlots")
public class GameSlotController {

    @Autowired
    IGameSlotService gameSlotService;

    @Autowired
    ModelMapper modelMapper;

    @GetMapping(value = "/user/{userId}")
    public List<GameSlotDTO> getByUser(@PathVariable int userId) {
        List<GameSlot> gameSlots = gameSlotService.getGameSlotByUserId(userId);
        List<GameSlotDTO> gameSlotDTOS = modelMapper.map(gameSlots, new TypeToken<List<GameSlotDTO>>() {
        }
                .getType());
        return gameSlotDTOS;
    }

    @PostMapping(value = "/user/{userId}")
    public void createGameSlotByUser(@PathVariable int userId) {
        gameSlotService.createGameSlots(userId);
    }

    @PutMapping(value = "/user/game/{userId}/{gameId}/{changedSlot}")
    public void chaneSlotByUserAndGame(@PathVariable int userId, @PathVariable int gameId, @PathVariable int changedSlot) {
        gameSlotService.changeSlotByUserIdAndUserId(userId, gameId, changedSlot);
    }

}
