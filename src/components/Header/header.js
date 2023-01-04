import { Location } from "./Location";
import { TotalRegister } from "./TotalRegister";

export function Header({ content, list, location = '' }) {
    return (
        <div className="flex w-screen h-full bg-slate-900 text-white items-center content-center justify-center">
            <span className="flex  items-center content-center justify-center">{content}<TotalRegister list={list} /> encontrados.</span>
            <span><Location location={location} /></span>
        </div>
    )
}
