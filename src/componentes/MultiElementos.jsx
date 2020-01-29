import React from 'react'

// Importando dois elementos adjacentes, soluçao mais usada, usando div:
// export default props =>
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>

// Usando React.Fragment, nenhuma div extra eh adicionada:
// export default props =>
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>

// Usando array, tmbm nenhuma div extra eh adicionada:
export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]