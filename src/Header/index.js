// 1. IMPORTACION
import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

// 2. FUNCIÓN
function Header(){
    // 1. LÓGICA
        // const nombre = "Mike"
        // const apellido = "Nieva"

        // const pais = {
        //     nombre: "México",
        //     comida: "Tacos"
        // }

        // const generarEdad = () => {
        //     return 33
        // }

    const taquerias = {
        taqueriaUno: "Piña flotando",
        taqueriaDos: "Tacos Copacabanito"
    }

    const menu = [
        "Tacos al pastor",
        "Agua de Jamaica",
        "Torta de carne al pastor"
    ]

    // 2. RETORNO
    return(
        <>
            {/* <p>Hola soy {nombre} {apellido}</p>
            <p>Hola soy {`${nombre} ${apellido}`}</p>
            <p>Mi pais es {pais.nombre} y comemos {pais.comida}</p>
            <p>{generarEdad()}</p> */}
            {/* <Logo nombre="Logo 1" taquerias={taquerias.taqueriaUno} menu={menu} />
            <Logo nombre="Logo 2" taquerias={taquerias.taqueriaDos} menu={menu} />
            <Nav /> */}
        </>
    )
}


// 3. EXPORTACIÓN
export default Header
