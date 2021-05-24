import React from 'react'

export default function Logo(props) {

    // 1. LÓGICA
    console.log(props)


    // 2. RETORNO
    return (
        <div>
            Hola soy el {props.nombre}
            {props.taquerias}
            

            <span>
            {
                props.menu.map(e => {
                    return (
                       <>
                            <p>
                                El menú incluye: {e}
                            </p>
                        </>
                    )
                })
            }
            </span>

        </div>
    )
}
