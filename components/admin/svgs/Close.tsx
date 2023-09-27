import React from 'react'

interface Props {
    className?: string
}

export default function Close({ className}: Props) {
  return (
    <svg viewBox="0 0 30 30" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M25.589 5.07777C19.9554 -0.555872 10.7104 -0.555872 5.0768 5.07777C-0.556849 10.7114 -0.556849 19.9564 5.0768 25.59C10.7104 31.2237 19.8109 31.2237 25.4446 25.59C31.0782 19.9564 31.2227 10.7114 25.589 5.07777ZM19.3776 21.4009L15.3329 17.3562L11.2883 21.4009L9.26592 19.3786L13.3106 15.3339L9.26592 11.2892L11.2883 9.2669L15.3329 13.3116L19.3776 9.2669L21.3999 11.2892L17.3553 15.3339L21.3999 19.3786L19.3776 21.4009Z" fill="#7F265B"/>
    </svg>
  )
}




