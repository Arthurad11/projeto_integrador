import"./produto.css";

function Produto(attr) {
	return (
		<div>
			<div className="item">
				<h3>Nome Produto</h3>
				<p>Descrição do Produto</p>
                <img src="https://placehold.co/70"/>
                <br/>
				<p>Preço</p>
				<button>Comprar</button>
			</div>
		</div>
	);
}

export default Produto;
