import {legacy_createStore as createStore} from 'redux';
import { itemsReducer } from './reducer';

export const store = createStore(itemsReducer);