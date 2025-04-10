import Menu from "../components/Menu";
import Produto from "./components/Produto";

import "./produtos.css";

function Produtos() {
	return (
		<div>
			<Menu />
			<br />
			<br />

			<h1>Produtos</h1>
			<br />

			<div className="produtos">
				<h2>Cerveja</h2>
				<br />

				<div className="item-container">
					<Produto nome="" preco=""/>
					
				</div>

				<br />
				<br />

				<h2>Chopp</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>
				<br />
				<br />

				<h2>Drinks</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>

				<h2>Sucos</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>

				<h2>Refrigerantes</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>

				<h2>Bebidas em Geral</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>

				<h2>Espetinhos</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>

				<h2>Porções</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>
			</div>

			<br />
		</div>
	);
}

export default Produtos;
