import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView2178821Reducer from '../features/CalendarView2178821/redux/reducers';
import EmailAuth3178820Reducer from '../features/EmailAuth3178820/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView2178821: CalendarView2178821Reducer,
EmailAuth3178820: EmailAuth3178820Reducer,

});