import { combineReducers } from "redux";
import { plannerApi } from "redux/slices/plannerApi";
import transactionReducer from "redux/slices/transactionSlice";

export const rootReducer = combineReducers({
    transaction: transactionReducer,
    [plannerApi.reducerPath]: plannerApi.reducer,
});
