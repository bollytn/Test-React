import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostProps } from "../types/types";

const PostList = () => {

    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data: PostProps[] = await res.json();
            setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <div className="postList">
            {posts.map((post) => (
                <PostCard key={post.id} {...post} />
            ))}
        </div>
    );
};

export default PostList;