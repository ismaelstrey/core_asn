import { useEffect, useState } from "react";
import { ApiRs } from "./API/Api";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { orderByCity } from "./utils";
import { FcFilledFilter } from 'react-icons/fc'

function App() {
  const [dataCit, setDataCity] = useState([])
  const [campo, setCampo] = useState('name')
  const [filter, setFilter] = useState('')
  const filterByname = (list, name) => list.filter(l => l.name.toLowerCase().includes(name) || l.city.toLowerCase().includes(name))
  const handleSearch = (e) => {
    e.preventDefault()
    setFilter(e.target.value.toLowerCase())
  }


  useEffect(() => {
    const filtrado = filterByname(ApiRs.data, filter)
    setDataCity(orderByCity(filtrado, campo))
    // eslint-disable-next-line
  }, [campo, filter])

  return (
    <Main>
      <Header content="Qantidade de registros" list={dataCit} />
      <div className="flex px-6 mt-2 mb-4 justify-between min-[320px]:flex-col max-[600px]:flex-row sm:items-center md:flex-row">
        <div className="flex sm:pt-8">
          <span className="bg-white px-5 cursor-default rounded-l-full">Ordenação por  </span>
          <span className="bg-orange-500 px-5 cursor-pointer" onClick={() => setCampo('city')}>Cidade</span>
          <span className="bg-red-200 px-5 cursor-pointer text-red-700" onClick={() => setCampo('name')}>Nome</span>
          <span className="flex items-center bg-green-500 px-5 cursor-pointer rounded-r-full text-green-50 uppercase"><FcFilledFilter />- {campo}</span>
        </div>
        {filter && <span className="text-white flex bg-purple-500 rounded-full w-4/12 justify-center items-center">{filter}</span>}

        <div className="flex sm:pt-8">
          <label className="text-white pr-4">Pesquisa</label>
          <input className="form-input px-4 py-1 rounded-full  sm:mt-4" type="txt" name="busca" onChange={(e) => handleSearch(e)} />
        </div>
      </div>
      <Content list={dataCit} />
    </Main>
  );
}

export default App;
