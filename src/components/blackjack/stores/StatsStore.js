import { EventEmitter } from "events";

/* flux */
import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import GameStore from "./GameStore";

class PlayerStats {
  constructor(id) {
    this.id = id;
    this.state = {
      numberOfGamesLost: 0,
      numberOfGamesPlayed: 0,
      numberOfGamesWon: 0,
      numberOfHandsPlayer: 0,
      numberOfTimesBlackjack: 0,
      numberOfTimesBusted: 0,
      winLossRatio: "1.000"
    };
  }

  update(statsFrame) {
    this.state = { ...statsFrame };
  }

  calculateWinLossRatio() {
    const ratio = (this.numberOfGamesWon / this.numberOfGamesLost).toString();
    this.winLossRatio = ratio.substr(0, 4);
  }
}
