import React from 'react'
import { useState } from 'react'

export default function Main() {

    const [person, setPerson]  = useState({
        nombre: "Mike"
    })

    const [numero, setNumero] = useState(0)


    const cambiarNombre = () => {
        setPerson({
            nombre: "Sam"
        })
    }
 
    const adicionarUno = () => {
        setNumero(numero + 1)
    }

    const resteUno = () => {
        setNumero(numero - 1)
    }

    return (
        <div>
            Este es el contenido principal  
            <p>{person.nombre}</p>
            <button onClick={cambiarNombre}>
                Cambiar nombre
            </button>

            <hr />

            <p>{numero}</p> 
            <button onClick={adicionarUno}>+1</button>
            <button onClick={resteUno}>-1</button>
            
        </div>
    )
}
