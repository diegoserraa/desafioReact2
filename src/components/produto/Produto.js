import { Component } from "react";
import CardProduto from "../cardProduto/CardProduto";
import Carousel from 'react-bootstrap/Carousel'

export default class Produto extends Component {
    
    constructor(props){
        super(props);
        this.state = {produtoList: []};
    }

    onCarregamentoProdutoFalhou(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("http://localhost:8080/product")
        .then(response => response.json(), this.onCarregamentoProdutoFalhou)
        .then(json => this.setState({ produtoList : json }), this.onCarregamentoProdutoFalhou);
    }

    render() {
        return (   
            
            <section id="produtos">
                <h2 class="text border-bottom col-2" style={{marginTop: 30}}>Produtos</h2>

                <div class="row justify-content-center text-center">
                    {
                       this.state.produtoList.map(function (produto) {
                        return <CardProduto produto={produto} />
                        })
                    }
                </div>
            </section>
        )
    }
}