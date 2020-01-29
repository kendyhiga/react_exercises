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
export default () =>
  <div>
    <h1>Primeiro Componente Arrow!</h1>
  </div>
