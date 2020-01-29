import React from 'react'

// Usando export desta forma, vc precisa importar passando exatamente o nome dos componentes
// const CompA = props =>
//     <h1>Primeiro diz: {props.valor}</h1>

// const CompB = props =>
//     <h1>Segundo diz: {props.valor}</h1>

// export { CompA, CompB }

// Voce pode exportar cada funcao conforme as declara, ou no final
export const CompA = props =>
    <h1>Primeiro diz: {props.valor}</h1>

export const CompB = props =>
    <h1>Segundo diz: {props.valor}</h1>

export default CompA // CompA esta importanto tanto como default, como sem
//ser padrão, portanto pode ser renomeado livremente na hora de importar,
// como por exemplo:
// import A, { CompB as B } from './componentes/DoisComponentes.jsx'
// Lembrando que quando algo eh exportado sem ser default,
// é necessário chama-la pelo nome exato usado no export e entre chaves


// Voce nao pode exportar uma funçao anonima desta forma
// export default function() {
//     return <p>teste</p>
// }