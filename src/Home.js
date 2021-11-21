import { Component } from "react";
import Topo from "./components/topo/Topo";
import Slide from "./components/slide/Slide";
import Produto from "./components/produto/Produto";
import Rodape from "./components/rodape/Rodape";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <Topo />
        </div>
        <Slide />
        <div class="container" style={{ marginBottom: 100 }}>
          <Produto />
        </div>
        <Rodape />
      </div>
    );
  }
}
