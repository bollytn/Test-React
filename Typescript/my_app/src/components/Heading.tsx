
type Props = {
    children: string
}

function Heading(props: Props) {
    return (
        <div>{props.children}</div>
    )
}

export default Heading