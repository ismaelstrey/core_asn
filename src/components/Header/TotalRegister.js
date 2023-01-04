import { arrayLenght } from "../../utils"
export function TotalRegister({ list }) {
    return (
        <div className="bg-green-500 rounded m-2 p-2">{arrayLenght(list)}</div>
    )
}
