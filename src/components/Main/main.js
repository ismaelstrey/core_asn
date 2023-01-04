import React from 'react'

export function Main({ children }) {
    return (
        <div className='flex max-w-screen-md min-w-full flex-col h-full bg-slate-900 border-collapse border-spacing-0'>{children}</div>
    )
}
