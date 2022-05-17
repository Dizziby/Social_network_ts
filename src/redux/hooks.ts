import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState} from './store'
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionTypeForApp} from "./types";

export type ThunkActionType = ThunkAction<void, AppStateType, unknown, ActionTypeForApp>
export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypeForApp>


export const useAppDispatch = () => useDispatch<ThunkDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
