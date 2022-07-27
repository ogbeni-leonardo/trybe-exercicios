import { CHANGE_PROFISSIONAL_INFORMATION } from '../actions';

const INITIAL_STATE = {
  curriculum: '',
  job: '',
  description: '',
};

const profissionalInformation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_PROFISSIONAL_INFORMATION:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default profissionalInformation;
