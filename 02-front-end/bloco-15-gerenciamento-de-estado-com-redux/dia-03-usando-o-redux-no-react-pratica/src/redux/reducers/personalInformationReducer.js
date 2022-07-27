import { CHANGE_PERSONAL_INFORMATION } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const personalInformation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_PERSONAL_INFORMATION:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default personalInformation;
