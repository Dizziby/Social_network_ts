import {SET_USER_DATA} from "../types";

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

export const setUserDataAC = (data: AuthType) => ({
    type: SET_USER_DATA,
    data
}) as const