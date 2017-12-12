import { EventEmitter } from "events";

/* flux */
import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
// import GameStore from "./GameStore";

/* New instance of PlayerStats created for each player */
class PlayerStats {
  constructor(id) {
    this.id = id;
    this.state = {
      numberOfGamesLost: 0,
      numberOfGamesPlayed: 0,
      numberOfGamesWon: 0,
      numberOfTimesBlackjack: 0,
      numberOfTimesBusted: 0,
      winLossRatio: "1.000"
    };
  }

  update(statsFrame) {
    /* for each key in statsframe, update the corresponding key in state */
    for (let key in statsFrame) {
      console.log(`${key}: ${statsFrame[key]}`);
    }
  }

  calculateWinLossRatio() {
    const ratio = (this.numberOfGamesWon / this.numberOfGamesLost).toString();
    this.winLossRatio = ratio.substr(0, 4);
  }

  getState() {
    return this.state;
  }
}

/* State variables */
let state = { playerStats: [] };

/* Data, Getter method, Event Notifier */
const CHANGE_EVENT = "playerstats";
const StatsStore = Object.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getState: function() {
    return state;
  },
  getStats(playerId) {
    const index = state.playerStats.findIndex(item => item.id === playerId);
    return state.playerStats[index].getState();
  },
  update(playerId, statsFrame) {
    const index = state.playerStats.findIndex(item => item.id === playerId);
    state.playerStats[index].update(statsFrame);
    console.log(JSON.stringify(statsFrame));
    this.emitChange();
  },
  new(playerId) {
    state.playerStats.push(new PlayerStats(playerId));
    this.emitChange();
  }
});

/* register methods */
AppDispatcher.register(action => {
  /* report for debugging */
  //const now = new Date().toTimeString();
  //log(`${action.actionType} was called at ${now}`);

  switch (action.actionType) {
    case AppConstants.STATS_NEW:
      let newStats = new PlayerStats(action.playerId);
      state.playerStats.append(newStats);
      StatsStore.emitChange();
      break;

    default:
      /* do nothing */
      break;
  }
});

export default StatsStore;
