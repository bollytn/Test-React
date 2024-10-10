import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <div className="postList">
            {posts.map((post: { id: number; title: string; body: string }) => (
                <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    );
};

export default PostList;