function CardProduto({ produto }) {
  return (
    <div class="card col-md-2">
      <img class="card-img-top" src={produto.image} />
      <div class="card-body">
        <h5 class="card-title">{produto.name}</h5>
        <p class="card-text">
          <s>de R${produto.oldPrice}</s>
        </p>
        <h5 class="card-text">por R${produto.price}</h5>
        <p class="card-text">
          <small class="text-muted">
            Ou em ate {produto.installments.count}X de{" "}
            {produto.installments.value} sem juros
          </small>
        </p>
        <a
          href="#"
          class="btn btn-primary"
          style={{ backgroundColor: "#87CEFA" }}
        >
          Comprar
        </a>
      </div>
    </div>
  );
}

export default CardProduto;
