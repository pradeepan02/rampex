import React, { useEffect, useState } from "react";
import axios from 'axios';

const Apicall = (props) => {
    const [post, setpost] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((e) => {
                console.log(e.data);
                setpost(e.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const dem = ["apple", "mango", "grape"];

    return (
        <div>
            <h1>Titles from the API call</h1>
            {/* Check if `post` has data before accessing `post[0].title` */}
            {post.length > 0 ? (
                <p>{post[0].body}</p>
            ) : (
                <p>Loading...</p> // Show a loading message while the data is being fetched
            )}
            {/* Uncomment if you want to list all posts */}
            {/* <ol>
                {post.map((item) => (
                    <li key={item.id}>
                        {item.userId} --- {item.title}
                    </li>
                ))}
            </ol> */}
        </div>
    );
};

export default Apicall;
