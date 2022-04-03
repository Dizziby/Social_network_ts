import React from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";

const postData = [
    {
        name: "Janice Griffith",
        date: "02.03.2021, 17:02:02",
        text: "World\'s most beautiful car in Curabitur #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
    },
    {
        name: "Janice Griffith",
        date: "02.03.2021, 17:02:02",
        text: "Curabitur world\'s most beautiful car in #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
    },
    {
        name: "Janice Griffith",
        date: "02.03.2021, 17:02:02",
        text: "Lonely Cat Enjoying in Summer Curabitur #mypage ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc"
    },
];



const Posts = () => {

        const postElement = postData.map(post => <Post name={post.name} date={post.date} text={post.text} />)

    return (
        <div className={styles.myPage}>
        {postElement}
        </div>
    )
}

export default Posts;