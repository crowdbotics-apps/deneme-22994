import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView2178821Saga from '../features/CalendarView2178821/redux/sagas';
import EmailAuth3178820Saga from '../features/EmailAuth3178820/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView2178821Saga,
EmailAuth3178820Saga,
    
  ]);
}