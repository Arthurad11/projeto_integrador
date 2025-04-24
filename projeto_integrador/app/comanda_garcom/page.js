"use client";

import React, { useEffect, useState } from "react";
import "./garcom.css";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import host from "../lib/host";
import axios from "axios";

function PainelGarcom() {
	const [usuario, setUsuario] = useState({});

	const [mesas, setMesas] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]);

	const [comanda, setComanda] = useState([]);
	const [mesa, setMesa] = useState("");

	async function receberComanda(id) {
		try {
			const response = await axios.get(host + "/comanda/garcom/" + id);
			if (response.data.length > 0) {
				setComanda(response.data);
				setMesa(response.data[0].mesa);
			} else {
				setComanda([]);
				setMesa("");
			}
			console.log(response.data);
		} catch (error) {
			console.error("Erro ao buscar comanda:", error);
		}
	}

	async function finalizarComanda() {
		try {
			await axios.post(host + "/comanda/garcom/" + mesa);
			setComanda([]);
			setMesa("");
			alert("Comanda finalizada com sucesso!");
		} catch (error) {
			console.error("Erro ao finalizar comanda:", error);
			alert("Erro ao finalizar comanda.");
		}
	}

	const total = comanda.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

	useEffect(() => {
		const usuarioLocal = localStorage.getItem("usuario");

		if (!usuarioLocal || usuarioLocal === "") {
			window.location.href = "/";
		}

		setUsuario(JSON.parse(usuarioLocal));
	}, []);

	return (
		<div className="container">
			{/* Card do Garçom */}
			<div className="card-container">
				<div className="logo-wrapper">
					<img className="logo-img" src="/img/logo.png" alt="Logo do Bar" />
				</div>

				<div className="card">
					<div className="card__avatar">
						<img src="https://cdn3d.iconscout.com/3d/premium/thumb/garcom-5796564-4841563.png?f=webp" alt="Avatar do garçom" />
					</div>
					<div className="card__nome">
						<strong>{usuario.nome}</strong>
					</div>
					<div className="card__email">{usuario.email}</div>
					<div className="card__garcom">Garçom</div>
				</div>
			</div>

			{/* Painel de Comandas */}
			<div className="card-container">
				<div className="card__content">
					<h1>🍻 Painel de Comandas 🍻</h1>

					{/* Mesas Ocupadas */}
					<div className="mesas_coluna">
						<h3>Mesas</h3>
						{mesas.map((i) => (
							<div className="item" key={i.id}>
								Mesa {i.id}
								<button className="card__btn" onClick={() => receberComanda(i.id)}>
									Ver Pedido
								</button>
							</div>
						))}
					</div>

					{/* Exibir Comanda Visualizada */}
					{comanda.length > 0 && (
						<div className="comanda-card">
							<h3>Comanda da Mesa {mesa}</h3>
							<ul>
								{comanda.map((i, index) => (
									<li key={index} className="comanda-item">
										<span className="item-esquerda">
											{i.nome} ({i.quantidade}x)
										</span>
										<span className="item-direita">R$ {(i.preco * i.quantidade).toFixed(2)}</span>
									</li>
								))}
							</ul>

							<p>
								<strong>Total:</strong> R$ {total.toFixed(2)}
							</p>
							<button className="button_finalizar" onClick={finalizarComanda}>
								Finalizar Comanda
							</button>
						</div>
					)}

					{/* Botão Voltar */}
					<div className="button-container">
						<button className="button_voltar" onClick={() => redirect("/")}>
							<FontAwesomeIcon icon={faHouse} /> Voltar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PainelGarcom;
