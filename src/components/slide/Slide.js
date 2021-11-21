import Carousel from "react-bootstrap/Carousel";

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "23rem" }}
          class="w-100"
          src="https://cdn3.ecshop.com.br/mgno9rbpq/product_images/n/999/pp1304__74434_zoom.png?v=1597838356"
        />
        <Carousel.Caption>
          <div class="col-lg-4 col-mb-4" style={{ marginBottom: 100 }}>
            <h2>Nossa especialidade:</h2>
            <h2>experiência de compra.</h2>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "23rem" }}
          class="w-100"
          src="https://madmais.vteximg.com.br/arquivos/ids/157184-1000-1000/LAMINADO-PERTECH-AZUL-REAL-PP3620-TX.jpg?v=637308454415300000"
        />
        <Carousel.Caption>
          <div class="col-lg-4 col-mb-4" style={{ marginBottom: 100 }}>
            <h1>Nossa especialidade:</h1>
            <h1>experiência de compra.</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
