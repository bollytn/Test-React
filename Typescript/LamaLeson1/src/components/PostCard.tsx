type Props = {
    title: string,
    body: string
}

export default function PostCard(props: Props) {
    return (
        <div className="postCard">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <button>Read More</button>
            <hr />
        </div>
    )
}