import { compose, legacy_createStore as createStore } from "redux";
import productReducer from './reducers/reducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
  }

const store = createStore(
    productReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;