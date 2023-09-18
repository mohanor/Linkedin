import React from 'react'

interface Props {
    className: string
}

export default function Up({className}: Props) {
    return (
        <svg className={className} viewBox="0 0 15 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.21101 0.484074C7.80357 0.0472471 7.10734 0.0615695 6.71984 0.514749L0.828526 7.40456C0.27383 8.05327 0.736581 9.05531 1.59086 9.05531L13.9085 9.05533C14.7823 9.05534 15.2339 8.01347 14.6374 7.37391L8.21101 0.484074Z" fill="#14ED44" />
        </svg>
    )
}



