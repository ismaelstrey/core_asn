import { TotalRegister } from "./TotalRegister";

export function Header({ content, list }) {
    return (
        <div className="flex h-full bg-slate-900 text-white items-center content-center justify-center">
            {content}<TotalRegister list={list} /> encontrados.
        </div>
    )
}
