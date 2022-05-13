import {v1} from "uuid";
import {ADD_POST, DELETE_POST, SET_PROFILE, UPDATE_POST_TEXT} from "../types";

export type PostType = {
    id: string
    name: string
    date: string
    text: string
    views: number
    comments: number
    like: number
    dislike: number
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsProfileType
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: PhotosProfileType
}

export type ContactsProfileType = {
    facebook: null | string,
    website: null | string,
    vk: null | string
    twitter: null | string,
    instagram: null | string,
    youtube: null | string,
    github: null | string,
    mainLink: null | string
}

export type PhotosProfileType = {
    small: string
    large: string
}

export type PostDataType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
}
type PostsActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostTextAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setProfileAC>

const initialState: PostDataType = {
    posts: [
        {
            id: v1(),
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "World's most beautiful car in Curabitur #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            views: 125,
            comments: 10,
            like: 14,
            dislike: 3


        },
        {
            id: v1(),
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "Curabitur world's most beautiful car in #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            views: 145,
            comments: 445,
            like: 45,
            dislike: 2
        },
        {
            id: v1(),
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "Lonely Cat Enjoying in Summer Curabitur #mypage ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc",
            views: 45,
            comments: 1,
            like: 556,
            dislike: 14
        },
    ],
    newPostText: "",
    profile: null
}

export const profileReducer = (state = initialState, action: PostsActionType): PostDataType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    {
                        id: v1(),
                        name: "Janice Griffith",
                        date: new Date().toLocaleString(),
                        text: state.newPostText,
                        views: 0,
                        comments: 0,
                        like: 0,
                        dislike: 0
                    },
                    ...state.posts
                ],
                newPostText: ""
            }
        }
        case UPDATE_POST_TEXT: {
            return {...state, newPostText: action.postText}
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.id)
            }
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({
    type: ADD_POST
}) as const

export const updatePostTextAC = (postText: string) => ({
    type: UPDATE_POST_TEXT,
    postText
}) as const

export const deletePostAC = (id: string) => ({
    type: DELETE_POST,
    id: id
}) as const

export const setProfileAC = (profile: ProfileType) => ({
    type: SET_PROFILE,
    profile
}) as const