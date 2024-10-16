import { PostProps } from "../types/types";

export default function PostCard(props: PostProps) {
    return (
        <div className="postCard">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <button>Read More</button>
            <hr />
        </div>
    )
}