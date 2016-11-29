import { createStore } from 'redux';
import RootReducer     from '../reducers/RootReducer';
import RootMiddleware  from '../middleware/RootMiddleware';
import preloadedState  from './preloadedState';

export default () => {
  return (
    createStore(
      RootReducer,
      preloadedState,
      RootMiddleware
    )
  );
};