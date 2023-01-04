import { City } from "./City"
import { Link } from "./Link"
import { Name } from "./Name"
export function Content({ list }) {
    const RenderClientes = ({ list }) => {
        return list.map(data =>
            <div key={data.id} className="flex bg-sky-400 text-lime-900 mt-2 p-2">
                <Name>{data.name}</Name>
                <City>{data.city}</City>
                <Link url={data.website} title={data.name} />
            </div>)
    }
    return (
        <RenderClientes list={list} />
    )
}
