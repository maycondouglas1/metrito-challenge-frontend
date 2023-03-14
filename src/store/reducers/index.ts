import { combineReducers } from "redux";

import ordersSlice from "./ordersSlice";

const rootReducer = combineReducers({
  orders: ordersSlice,
});

export default rootReducer;
