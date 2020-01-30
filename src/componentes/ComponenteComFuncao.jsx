import React from 'react'

// Usando uma funcao dentro de um componente funcional
export default props => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}
