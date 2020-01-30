import React from 'react'
import Filho from './Filho'

export default props => {
    const notificarSaidaDoFilho =
        lugar => alert(`Liberado para ${lugar}`)
    return (
        <div>
            <Filho notificarSaida={notificarSaidaDoFilho} />
        </div>
    )
}

// Sem usar alert, porem o valor nao eh alterado, 
// export default props => {
//     let lugarInformado = 'Nenhum'
//     const notificarSaidaDoFilho =
//         lugar => {
//             lugarInformado = lugar
//             console.log(lugarInformado)
//         }
//     return (
//         <div>
//             {lugarInformado}
//             <Filho notificarSaida={notificarSaidaDoFilho} />
//         </div>
//     )
// }
