import { useState } from "react";
import "./produto.css";

function Produto(attr) {
	const [quantidadeInicial, setQuantidadeInicial] = useState(1);
	const [quantidade, setQuantidade] = useState(quantidadeInicial);

	const [mesa, setMesa] = useState();

	return (
		<div>
			<div className="item">
				<h3>{attr.nome}</h3>
				<br />
				<img width={80} height={80} src={attr.imagem} />
				<br />
				<br />
				<p>
					<strong>R$ {attr.preco}</strong>
				</p>
				<select>
					<option value={1} onClick={() => setMesa(1)}>
						Mesa 1
					</option>
					<option value={2} onClick={() => setMesa(2)}>
						Mesa 2
					</option>
					<option value={3} onClick={() => setMesa(3)}>
						Mesa 3
					</option>
					<option value={4} onClick={() => setMesa(4)}>
						Mesa 4
					</option>
					<option value={5} onClick={() => setMesa(5)}>
						Mesa 5
					</option>
					<option value={6} onClick={() => setMesa(6)}>
						Mesa 6
					</option>
					<option value={7} onClick={() => setMesa(7)}>
						Mesa 7
					</option>
					<option value={8} onClick={() => setMesa(8)}>
						Mesa 8
					</option>
					<option value={9} onClick={() => setMesa(9)}>
						Mesa 9
					</option>
					<option value={10} onClick={() => setMesa(10)}>
						Mesa 10
					</option>
				</select>

				<button onClick={() => setQuantidade(quantidade - 1)}>-</button>
				<input
					type="number"
					value={quantidade}
					min={1}
					style={{
						border: "none",
						width: "30px",
						textAlign: "center",
						alignItems: "center",

						background: "transparent",
					}}
				/>
				<button onClick={() => setQuantidade(quantidade + 1)}>+</button>

				<button onClick={() => attr.funcao}>Adicionar</button>
			</div>
		</div>
	);
}

export default Produto;
