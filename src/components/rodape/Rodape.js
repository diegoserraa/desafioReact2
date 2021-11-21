function Rodape() {
  return (
    <footer
      class="footer text-white text-center text-md-start"
      style={{ backgroundColor: "#191970" }}
    >
      <div class="container p-5">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h4 class="text-uppercase">Localização</h4>
            <div class="row">
              <div class="col-mb-4 col-lg-4">
                <h6>São Paulo</h6>
                <p>Rua do Rocio,423/1801</p>
                <p>Vila Olimpia, SP</p>
                <p>tel:(11) 2222-2222</p>
              </div>
              <div class="col-mb-4 col-lg-4">
                <h6>Rio de Janeiro</h6>
                <p>Vol da Patria, 301</p>
                <p>Botafogo, RJ</p>
                <p>tel:(21) 2222-2222</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 align-self-center">
            <ul class="list-unstyled mb-0 text-center">
              <li class="rounded-pill" style={{ backgroundColor: "orange" }}>
                <span>Entre em contato</span>
              </li>
              <li
                class="rounded-pill"
                style={{ backgroundColor: "orange", marginTop: 10 }}
              >
                <span>Fale com o nosso consulto online</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
