import { BiLinkExternal } from 'react-icons/bi'

export function Link({ url, title }) {
    return (
        <a className="flex items-center bg-teal-300 border-4 rounded-r-full border-slate-800 px-5 hover:bg-green-600 hover:text-slate-50" href={url} rel="noopener noreferrer" target="_blank" title={title}><BiLinkExternal /></a>
    )
}
