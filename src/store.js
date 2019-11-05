import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const mainReducer = combineReducers({
  /* your app’s top-level reducers */
});

const rootReducer = (state, action) => {
  return mainReducer(state, action);
};

const initialState = {};

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["session"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);
export { store, persistor };
