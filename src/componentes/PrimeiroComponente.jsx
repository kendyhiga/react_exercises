import React from 'react'

// função
// function primeiro() {
//   return <h1>Primeiro Componente!</h1>
// }

// export default primeiro


// a mesma função, porém sem nome:
// export default function() {
//   return <h1>Primeiro Componente!</h1>
// }

// Mesma coisa de cima, porem com Arrow function:
// export default () => {
//   return <h1>Primeiro Componente Arrow!</h1>
// }

// Voce pode tirar o 'return' e as chaves quando vc só possui um retorno
// export default () => <h1>Primeiro Componente Arrow!</h1>

// Voce tambem pode retornar código HTML:
// export default () =>
//   <div>
//     <h1>Primeiro Componente Arrow!</h1>
//   </div>

// Vc pode passar parametros(props) para a funçao:
// export default (props) =>
//   <div>
//     <h1>{props.valor}</h1>
//     <h2>{props.aBcD}</h2>
//   </div>

// Vc pode colocar qualquer expressão JS entre chaves e ela sera interpretada:
export default (props) =>
  <div>
    <h1>{props.valor}</h1>
    <h2>{1 + 1}</h2>
    <p>{ true ? 'Sim' : 'Não' }</p>
    <p>{ Math.random() }</p>
  </div>
