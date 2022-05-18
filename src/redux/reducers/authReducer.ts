import {SET_USER_DATA} from "../types";
import {api} from "../../api/api";
import {ThunkActionType, ThunkDispatchType} from "../hooks";

export type AuthType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthActionType = ReturnType<typeof setUserDataAC>

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}


// ActionCreator

export const setUserDataAC = (data: AuthType) => ({
    type: SET_USER_DATA,
    data
}) as const


//Thunk Creator

export const getAuthUserDataTC = (): ThunkActionType => (dispatch: ThunkDispatchType) => {
    api.authMe().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserDataAC(response.data.data))
        }
    })
}
