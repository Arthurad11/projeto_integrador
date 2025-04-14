import"./produto.css";

function Produto(attr) {
	return (
		<div>
			<div className="item">
				<h3>{attr.nome}</h3>
				<br/>
                <img src={attr.imagem}/>
                <br/>
                <br/>
				<p><strong>R$ {attr.preco}</strong></p>
				<button>Comprar</button>
			</div>
		</div>
	);
}

export default Produto;
