import {v1} from "uuid";

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
}

export type MessageType = ({
    id: string
    messages: Array<string>
})

export type ContactsDataType = Array<ContactType>

export type PostDataType = Array<PostType>

export type MessagesDataType = Array<MessageType>

export type StateType = {
    contactsData: ContactsDataType
    postData: PostDataType
    messagesData: MessagesDataType
}

export const state: StateType = {
    contactsData: [
        {id: v1(), name: 'Bucky Bames', email: 'wintersolder@gmail.com', avatar: "friendAvatar"},
        {id: v1(), name: 'Sarah Lorender', email: 'barnes@gmail.com', avatar: "friendAvatar2"},
        {id: v1(), name: 'Jason Borne', email: 'jasonb@gmail.com', avatar: "friendAvatar3"},
        {id: v1(), name: 'Cameron Diaz', email: 'jasonb@gmail.com', avatar: "friendAvatar4"},
        {id: v1(), name: 'Daniel Warber', email: 'jasonb@gmail.com', avatar: "friendAvatar5"},
        {id: v1(), name: 'Andrew', email: 'jasonb@gmail.com', avatar: "friendAvatar6"},
        {id: v1(), name: 'Amy Watson', email: 'jasonb@gmail.com', avatar: "friendAvatar7"},
    ],
    postData: [
        {
            id: v1(),
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "World's most beautiful car in Curabitur #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
        },
        {
            id: v1(),
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "Curabitur world's most beautiful car in #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
        },
        {
            id: v1(),
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "Lonely Cat Enjoying in Summer Curabitur #mypage ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc"
        },
    ],
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
}

export const addPost = (newPostText: string) => {
    debugger
    alert("1")
    state.postData.push({
        id: v1(),
        name: "fgf",
        date: "gfg",
        text: newPostText
    })
}

export default state;