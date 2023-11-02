package group1.testing.controller;

import group1.testing.dto.GameDTO;
import group1.testing.dto.ItemDTO;
import group1.testing.entity.Game;
import group1.testing.entity.Item;
import group1.testing.form.game.CreateGameForm;
import group1.testing.service.games.IGameService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/games")
public class GameController {

    @Autowired
    IGameService gameService;

    @Autowired
    ModelMapper modelMapper;

    @GetMapping
    public List<GameDTO> getAllGames() {
        List<Game> games = gameService.getAllGames();
        List<GameDTO> gameDTOS = modelMapper.map(games, new TypeToken<List<GameDTO>>() {
        }
                .getType());
        return gameDTOS;
    }

    @PostMapping
    public void createGame(@RequestBody CreateGameForm form) {
        gameService.createGame(form);
    }
}
