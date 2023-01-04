import React from 'react'

export function Link({ url, title }) {
    return (
        <a className="bg-teal-300 border-4 rounded-r-full border-slate-800 px-5" href={url} rel="noopener noreferrer" target="_blank" title={title}>{url}</a>
    )
}
