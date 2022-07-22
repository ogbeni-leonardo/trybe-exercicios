import { createStore, combineReducers } from 'redux';
import { CHANGE_SIGNAL, MOVE_CAR } from './actionCreators';

const initialStateToSignalReducer = {
  signal: {
    color: 'red',
  },
}

function signalReducer(state = initialStateToSignalReducer, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

const initialStateToCarReducer = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

function carReducer(state = initialStateToCarReducer, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ signalReducer, carReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
