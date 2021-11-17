import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

export const reducers = combineReducers({});

const sagas = {};

export default function () {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
  const store = composeWithDevTools(applyMiddleware(sagaMiddleware))(
    createStore
  )(reducers);

  Object.keys(sagas)
    .map((k: string) => sagas[k])
    .forEach((saga): any => sagaMiddleware.run(saga));
  return store;
}
