import { Component } from "react";
import Topo from "./components/topo/Topo";
import Carousell from "./components/carousel/Carousel";
import Produto from "./components/produto/Produto";
import Footer from "./components/footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <Topo />
        </div>
        <Carousell />
        <div class="container" style={{ marginBottom: 100 }}>
          <Produto />
        </div>
        <Footer />
      </div>
    );
  }
}
