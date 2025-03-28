import"./produto.css";

function Produto(attr) {
	return (
		<div>
			<div className="item">
				<h3>Nome Produto</h3>
                <img src="https://placehold.co/70"/>
                <br/>
				<p>Preço</p>
				<button>Comprar</button>
			</div>
		</div>
	);
}

export default Produto;
