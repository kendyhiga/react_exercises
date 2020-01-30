import React from 'react'

// Dessa forma o componente filho é chamado e
// todos os elementos sao passados para ele:
// export default props =>
//     <div>
//         <h1>Familia</h1>
//         {props.children}
//     </div>

// Estas possibilidades funcionam apenas para um unico componente filho:
    // Vc pode passar uma propriedade especifica para o
    // componente filho da seguinte forma:
    // export default props =>
    //     <div>
    //         <h1>Familia</h1>
    //         { React.cloneElement(props.children,
    //             { sobrenome: props.sobrenome })}
    //     </div>

    // Ou vc pode passar todas as props(esta forma nao eh tao usada):
    // export default props =>
    //     <div>
    //         <h1>Familia</h1>
    //         { React.cloneElement(props.children, props )}
    //     </div>

    // Ou usar a notaçao 'spread' (...) para criar um clone dos props
    // export default props =>
    //     <div>
    //         <h1>Familia</h1>
    //         { React.cloneElement(props.children, { ...props } )}
    //     </div>

// Para mais de um componente filho, podemos utilizar o map:
// export default props =>
//     <div>
//         <h1>Familia</h1>
//         { React.Children.map(props.children, filho => {
//             return React.cloneElement(filho, { ...props })
//         })}
//     </div>

// Para evitar repetiçao, esta funcao pode ser jogada em outro lugar,
// como por exemplo utils/utils.js
import { filhoComProps } from '../utils/utils'
export default props =>
    <div>
        <h1>Familia</h1>
        { filhoComProps(props) }
    </div>

