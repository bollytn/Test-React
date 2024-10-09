type Props = {
    objData: {
        name: string
        age: number
        loggedIn: boolean
    }
}
export default function SayHello({ objData }: Props) {
    return (
        <div>
            <h1>Hello {objData.loggedIn ? objData.name : "Guest"}</h1>
            <p>My age is {objData.age}</p>
        </div>
    )
}
