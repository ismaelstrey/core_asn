import React from 'react'

export function Location({ location }) {
    console.log(location)
    return (
        <div className='flex flex-col w-full text-right opacity-30'>
            <span>IP: {location.ipString}</span>
            <span>Tipo: {location.ipType}</span>
            <span>Dispositivo: {location.device}</span>
            <span>Sistema Operacional: {location.os}</span>
        </div>
    )
}
