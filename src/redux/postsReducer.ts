import {v1} from "uuid";
import {ActionType, PostDataType} from "./my_store";
import {ADD_POST, DELETE_POST, UPDATE_POST_TEXT} from "./types";

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
    newPostText: ""
}

const postsReducer = (state= initialState, action: ActionType): PostDataType => {
    if (action.type === ADD_POST) {
        state.posts.push({
            id: v1(),
            name: "Janice Griffith",
            date: new Date().toLocaleString(),
            text: state.newPostText,
            views: 0,
            comments: 0,
            like: 0,
            dislike: 0
        });
        state.newPostText = "";
    } else if (action.type === UPDATE_POST_TEXT) {
        state.newPostText = action.postText;
    } else if (action.type === DELETE_POST) {
        state.posts = state.posts.filter(el => el.id !== action.id);
    }
    return state;
    // switch (action.type) {
    //     case ADD_POST:
    //         state.posts.push({
    //             id: v1(),
    //             name: "Janice Griffith",
    //             date: new Date().toLocaleString(),
    //             text: state.newPostText,
    //             views: 0,
    //             comments: 0,
    //             like: 0,
    //             dislike: 0
    //         });
    //         state.newPostText = "";
    //     case UPDATE_POST_TEXT:
    //         state.newPostText = action.postText;
    //     case DELETE_POST:
    //         state.posts = state.posts.filter(el => el.id !== action.id);
    //     default:
    //         return state;
    // }
}

export const addPostAC = (): ActionType => ({
    type: "ADD_POST"
})

export const updatePostTextAC = (postText: string): ActionType => ({
    type: "UPDATE_POST_TEXT",
    postText
})


export default postsReducer;