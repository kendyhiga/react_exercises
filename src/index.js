import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'

// JSX permite uso de string
// const elemento = document.getElementById('root')
// ReactDOM.render('Olá React', elemento)

// JSX permite usar tags HTML
// const elemento = document.getElementById('root')
// ReactDOM.render(<h1>Olá React</h1>, elemento)


// JSX permite usar variáveis, pois apesar de usar tags HTML, é tudo JS
// const elemento = document.getElementById('root')
// const jsx = <h1>Olá React</h1>
// ReactDOM.render(jsx, elemento)


// Sem JSX:
// const lista = document.createElement('ul')

// let item = document.createElement('li')
// let texto = document.createTextNode('1) Pedro')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('2) Maria')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('3) Ana')
// item.appendChild(texto)
// lista.appendChild(item)

// const elemento = document.getElementById('root')
// elemento.appendChild(lista)


//Mesma lista acima, porém com JSX
// const elemento = document.getElementById('root')
// ReactDOM.render(
//   <ul>
//     <li>1) Pedro</li>
//     <li>2) Maria</li>
//     <li>3) Ana</li>
//   </ul>
// , elemento)

// Importa primeiro componente
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//   <div>
//     <PrimeiroComponente></PrimeiroComponente>
//   </div>
// , elemento)

// Tag de fechamento pode ser dispensada
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//   <div>
//     <PrimeiroComponente />
//   </div>
// , elemento)

// Tag de div não é necessária, porem caso vc
// queira chamar duas vezes o componente, ele quebra:
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <PrimeiroComponente />
//     <PrimeiroComponente />
// , elemento)

// Ja com uma div, não quebra:
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//   <div>
//     <PrimeiroComponente valor='Bom dia!' aBcD={1234} />
//   </div>
// , elemento)

// Usando dois componentes, vc pode renomear um componente usando 'as'
// import { CompA, CompB as B} from './componentes/DoisComponentes'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <CompA valor='Olá eu sou A!' />
//         <B valor='B na área!'/>
//     </div>
// , elemento)

// import MultiElementos from './componentes/MultiElementos'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <MultiElementos />
//     </div>
// , elemento)

// Uso de um elemento dentro de outro elemento
// import FamiliaSilva from './componentes/FamiliaSilva'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <FamiliaSilva />
//     </div>
// , elemento)

// Através do metodo {props.children} em familia, o props eh repassado para o componente membro
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <Familia>
//             <Membro nome='Andre' sobrenome='Pereira' />
//             <Membro nome='Mariana' sobrenome='Pereira' />
//         </Familia>
//         <Familia>
//             <Membro nome='Bia' sobrenome='Arruda' />
//             <Membro nome='Gustavo' sobrenome='Arruda' />
//         </Familia>
//     </div>
// , elemento)

// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <Familia  sobrenome='Pereiraaaaa' >
//             <Membro nome='Andre'/>
//             <Membro nome='Mariana'/>
//         </Familia>
//         {/* <Familia  sobrenome='Arruda' >
//             <Membro nome='Bia'/>
//             <Membro nome='Gustavo' />
//         </Familia> */}
//     </div>
// , elemento)

// Usando uma funcao dentro de um componente funcional
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <ComponenteComFuncao />
//     </div>
// , elemento)

import Pai from './componentes/Pai'
const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Pai />
    </div>
, elemento)
