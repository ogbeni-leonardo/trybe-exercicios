import { combineReducers } from 'redux';
import personalInformation from './personalInformationReducer';
import profissionalInformation from './profissionalInformationReducer';

const rootReducer = combineReducers({ personalInformation, profissionalInformation });

export default rootReducer;
