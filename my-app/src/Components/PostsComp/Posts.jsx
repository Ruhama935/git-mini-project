import { useEffect, useState } from "react";
import axios from 'axios';
import Post from "./Post";
import CreatePost from "./CreatePost"
import * as React from 'react';
import PostContext from "./PostContext";

function Posts() {
    const [posts, setPosts] = useState([])

    const imp = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/posts')
            if (res.status === 200)
                setPosts(res.data.sort((a, b) => a._id - b._id))
        }
        catch (e) { console.log(e); }
    }
    useEffect(() => {
        imp();
    }, [])

    return (
        <>
            <CreatePost setPosts={setPosts}/>
            {
                posts.map((post) => (
                    <PostContext.Provider value={{ post, setPosts }}>
                        <Post />
                    </PostContext.Provider>
                ))}
        </>
    )
}

export default Posts;



