import"./produto.css";

function Produto(attr) {
	return (
		<div>
			<div className="item">
				<h3>{attr.nome}</h3>
				<br/>
                <img width={80} src={attr.imagem}/>
                <br/>
                <br/>
				<p><strong>R$ {attr.preco}</strong></p>
				<button onClick={()=> attr.funcao} >Comprar</button>
			</div>
		</div>
	);
}

export default Produto;
