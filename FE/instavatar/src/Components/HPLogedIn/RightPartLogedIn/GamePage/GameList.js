import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./GamePage.css";
import { Button } from "reactstrap";
import BuyGameSlotModal from "./BuyGameSlotModal";
import { setGameToBySlotAction } from "../../../../Redux/Actions/GameActions";
import { showBuyGameSlotModalAction } from "../../../../Redux/Actions/ModalActions";
function GameList(props) {
  let dispatch = useDispatch();
  let baseGames = useSelector((state) => state.games);
  let gameSlots = useSelector((state) => state.gameSlots);
  let games =
    baseGames && gameSlots && gameSlots.length > 0
      ? baseGames.map((game) => {
          let slot = gameSlots.find((sl) => sl.gameId === game.id);
          if (slot && slot.slot) {
            return { ...game, slot: slot.slot };
          }
        })
      : null;
  console.log("games: ", games);
  let items =
    games && games.length > 0
      ? games.map((game, index) => {
          let price =
            game.slotCoinPrice > 0 ? (
              <div className="row">
                <img
                  className="price"
                  src="/imgs/icons/coin.png"
                  alt="Coin"
                ></img>
                {game.slotCoinPrice}
              </div>
            ) : (
              <div className="row">
                <img
                  className="price"
                  src="/imgs/icons/gold.png"
                  alt="Gold"
                ></img>
                {game.slotGoldPrice}
              </div>
            );
          let slot =
            game.slot && game.slot > 0
              ? `Còn ${game.slot} lượt chơi`
              : "Đã hết lượt chơi";

          return (
            <div key={index} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <div className="row">
                <img
                  className="GameLogo"
                  alt={game.name}
                  src={`/imgs/games/${game.logo}`}
                ></img>
              </div>

              <div className="row">
                <h4>{game.name}</h4>
              </div>
              {price}

              <div className="row">
                {slot}
                <Button
                  onClick={() => {
                    dispatch(setGameToBySlotAction(game));
                    dispatch(showBuyGameSlotModalAction());
                  }}
                  id="Play"
                >
                  <img
                    alt="addSlot"
                    src="/imgs/icons/add.png"
                    className="price"
                  ></img>
                </Button>
              </div>

              <div className="row">
                <Button id="Play">
                  <img
                    className="Play"
                    src="/imgs/icons/Play.png"
                    alt="Play"
                  ></img>
                </Button>
              </div>
            </div>
          );
        })
      : null;
  return (
    <div className="GameList">
      {items}
      <BuyGameSlotModal />
    </div>
  );
}

export default GameList;
