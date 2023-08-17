import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import accountSlice from "./slices/accountSlice";
import bonusSlice from "./slices/bonusSlice";
import rewordReducer from "./reducers/reword";


export const store = configureStore({
  reducer: {
    account:accountSlice,
    bonus:bonusSlice,
    reword:rewordReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;