import React, { Component } from 'react'

// export default class Contador extends Component {
//     // atraves do metodo construtor vc consegue declarar que
//     // 'this' nao eh undefined, e sim um objeto do tipo Contador
//     constructor(props) {
//         super(props)
//         this.maisUm = this.maisUm.bind(this)
//     }

//     maisUm() {
//         // this.props.numero++
//         console.log(this)

//     }

//     render() {
//         return (
//             <div>
//                 <div>Numero: {this.props.numero}</div>
//                 <button onClick={this.maisUm}>Inc</button>
//                 <button>Dec</button>
//             </div>
//         )
//     }
// }

// Usando arrow function na chamada da funcao onClick, o mesmo resultado eh obtido:
// export default class Contador extends Component {
//     maisUm() {
//         // this.props.numero++
//         console.log(this)
//     }

//     render() {
//         return (
//             <div>
//                 <div>Numero: {this.props.numero}</div>
//                 <button onClick={() => this.maisUm()}>Inc</button>
//                 <button>Dec</button>
//             </div>
//         )
//     }
// }

// se a funcao maisUm for uma Arrow function, vc nao precisa se preocupar com isso:
// export default class Contador extends Component {
//     maisUm = () => {
//         this.props.numero++
//         console.log(this)
//     }

//     render() {
//         return (
//             <div>
//                 <div>Numero: {this.props.numero}</div>
//                 <button onClick={this.maisUm}>Inc</button>
//                 <button>Dec</button>
//             </div>
//         )
//     }
// }

// Usando state conseguimos alterar o valor da prop
export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    alteraNumero = diferenca => {
        this.setState({ numero: this.state.numero + diferenca })
    }

    render() {
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alteraNumero(10)}>
                    Inc10
                </button>
                <button onClick={() => this.alteraNumero(-10)}>
                    Dec10
                </button>
            </div>
        )
    }
}