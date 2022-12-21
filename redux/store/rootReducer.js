import { combineReducers } from "redux";
import { plannerApi } from "redux/slices/plannerAPI";
import transactionReducer from "redux/slices/transactionSlice";

export const rootReducer = combineReducers({
    transaction: transactionReducer,
    [plannerApi.reducerPath]: plannerApi.reducer,
});
