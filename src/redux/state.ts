import {v1} from "uuid";

//types

export type ContactType = {
    id: string
    name: string
    email: string
    avatar: string
}

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

export type MessageType = ({
    id: string
    messages: Array<string>
})

export type ContactsDataType = Array<ContactType>

export type PostDataType = {
    posts: Array<PostType>
    newPostText: string
}

export type MessagesDataType = Array<MessageType>

export type StateType = {
    contactsData: ContactsDataType
    postData: PostDataType
    messagesData: MessagesDataType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPost: (newPostText: string) => void
    updatePostText: (postText: string) => void
    deletePost: (id: string) => void
    subscriber: (observer: any) => void
}

//store

let store: StoreType = {
    _state: {
        contactsData: [
            {id: v1(), name: 'Bucky Bames', email: 'wintersolder@gmail.com', avatar: "friendAvatar"},
            {id: v1(), name: 'Sarah Lorender', email: 'barnes@gmail.com', avatar: "friendAvatar2"},
            {id: v1(), name: 'Jason Borne', email: 'jasonb@gmail.com', avatar: "friendAvatar3"},
            {id: v1(), name: 'Cameron Diaz', email: 'jasonb@gmail.com', avatar: "friendAvatar4"},
            {id: v1(), name: 'Daniel Warber', email: 'jasonb@gmail.com', avatar: "friendAvatar5"},
            {id: v1(), name: 'Andrew', email: 'jasonb@gmail.com', avatar: "friendAvatar6"},
            {id: v1(), name: 'Amy Watson', email: 'jasonb@gmail.com', avatar: "friendAvatar7"},
        ],
        postData: {
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
        },
        messagesData: [
            {
                id: v1(),
                messages: ["Hello", "How are you?", "Bye",]
            },
            {
                id: v1(),
                messages: ["Hello2", "2How are you?", "Bye2",]
            },
        ]
    },
    _callSubscriber (state: StateType) {
    },

    getState() {
        return this._state;
    },
    subscriber (observer: any) {
        this._callSubscriber = observer
    },

    addPost(newPostText: string) {
        this._state.postData.posts.push({
            id: v1(),
            name: "Janice Griffith",
            date: new Date().toLocaleString(),
            text: newPostText,
            views: 0,
            comments: 0,
            like: 0,
            dislike: 0
        })
        this._state.postData.newPostText = ""
        this._callSubscriber(this._state)

    },
    updatePostText(postText: string) {
        this._state.postData.newPostText = postText
        this._callSubscriber(this._state)
    },
    deletePost(id: string) {
        this._state.postData.posts = this._state.postData.posts.filter(el => el.id !== id)
        this._callSubscriber(this._state)
    },
}

export default store;