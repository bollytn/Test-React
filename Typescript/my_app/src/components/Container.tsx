import React from 'react'

type Props = {
    styles: React.CSSProperties
}

export default function Container(props: Props) {
    return (
        <div style={props.styles}>Container</div>
    )
}