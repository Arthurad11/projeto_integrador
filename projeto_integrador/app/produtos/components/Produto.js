import"./produto.css";

function Produto(attr) {
	return (
		<div>
			<div className="item">
				<h3>{attr.nome}</h3>
                <img src="https://placehold.co/70"/>
                <br/>
				<p>{attr.preco}</p>
				<button>Comprar</button>
			</div>
		</div>
	);
}

export default Produto;
