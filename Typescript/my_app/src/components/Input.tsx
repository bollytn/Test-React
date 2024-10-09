type Props = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ value, handleChange }: Props) {
    return (
        <input type="text" value={value} onChange={handleChange} />
    )
}