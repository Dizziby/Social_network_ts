import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState} from './store'
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionTypeForApp} from "./types";

export type ThunkActionType = ThunkAction<void, RootState, unknown, ActionTypeForApp>
export type ThunkDispatchType = ThunkDispatch<RootState, unknown, ActionTypeForApp>

export const useAppDispatch = () => useDispatch<ThunkDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector