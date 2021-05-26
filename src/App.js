// COMPONENTE FUNCIONAL
// 1. IMPORTACIONES
import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Crud from './Crud'

// 2. FUNCIÓN (COMPONENTE)
function App() {
  // a. La lógica de la función
  // b. Retorno (REACT)
  // JSX -> Una estructura que mezcla HTML y JS
  // REGLA -> Cuando retornas debe estar encapsulada toda la información en una sola etiqueta
  return (
    // FRAGMENTOS
    <> 
      <Header />
      {/* <Main /> */}

      <Crud />

      {/* <Footer /> */}
    </>
  )
}

// 3. EXPORTACIÓN
export default App;
