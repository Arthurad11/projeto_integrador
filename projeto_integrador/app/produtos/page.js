"use client";

import { useState } from "react";
import Menu from "../components/Menu";
import Produto from "./components/Produto";

import "./produtos.css";
import axios from "axios";

function Produtos() {

	//busca cerveja
	const [cerveja, setCerveja] = useState()
	async function buscaCerveja() {
		const response = await axios.get("http://localhost:3000/api/produtos/cerveja")
		setCerveja(response.data)
	}

	//busca chopp
	const [chopp, setChopp] = useState()
	async function buscaChopp)() {
		const response = await axios.get("http://localhost:3000/api/produtos/chopp")
		setChopp(response.data)
	}

	//busca drinks
	const [drinks, setDrinks] = useState()

	//busca sucos
	const [sucos, setSucos] = useState()
	

	//busca refrigerantes
	const [refrigerantes, setRefrigerantes] = useState()

	//busca bebidas em geral
	const [bebidas, setBebidas] = useState()

	//busca espetinhos
	const [espetinhos, setEspetinhos] = useState()

	//busca porções
	const [porcoes, setPorcoes] = useState()

	useState(() => {
		buscaCerveja();
		buscaChopp();
		buscaDrinks();
		buscaSucos();
		buscaRefrigerantes();
		buscaBebidas();
		buscaEspetinhos();
		buscaPorcoes();
	}, []);


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
				
				{
					cerveja.map((i) => (
						<div className="item-container">
							<Produto nome="" preco=""/>
						</div>
					))
				}

				<div className="item-container">
					<Produto nome="" preco=""/>
				</div>

				<br />
				<br />

				<h2>Chopp</h2>
				<br />

				<div className="item-container">
					<Produto nome="" preco=""/>
				</div>
				<br />
				<br />

				<h2>Drinks</h2>
				<br />

				<div className="item-container">
					<Produto nome="" preco=""/>
				</div>

				<h2>Sucos</h2>
				<br />

				<div className="item-container">
					<Produto nome="" preco=""/>
				</div>

				<h2>Refrigerantes</h2>
				<br />

				<div className="item-container">
					<Produto nome="" preco=""/>
				</div>

				<h2>Bebidas em Geral</h2>
				<br />

				<div className="item-container">
					<Produto nome="" preco=""/>
				</div>

				<h2>Espetinhos</h2>
				<br />

				<div className="item-container">
					<Produto nome="" preco=""/>
				</div>

				<h2>Porções</h2>
				<br />

				<div className="item-container">
					<Produto nome="" preco=""/>
				</div>
			</div>

			<br />
		</div>
	);
}

export default Produtos;
