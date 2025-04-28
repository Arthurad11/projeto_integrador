"use client";

import { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import host from "../lib/host";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const [logar, setLogar] = useState(true);
  const [criarConta, setCriarConta] = useState(false);

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [confirmaEmail, setConfirmaEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  // Função para Login
  async function entrar(e) {
    e.preventDefault();

    const obj = { email, senha };

    try {
      const response = await axios.post(host + "/usuarios", obj);

      if (response.data.length === 0) {
        toast.error("Usuário ou senha incorretos");
        return;
      }

      const usuarioData = response.data[0];
      localStorage.setItem("usuario", JSON.stringify(usuarioData));

      if (usuarioData.funcionario === 1 && usuarioData.admin === 0) {
        router.push("/comanda_garcom");
      } else if (usuarioData.funcionario === 1 && usuarioData.admin === 1) {
        router.push("/dashboard");
      } else if (usuarioData.funcionario === 0 && usuarioData.admin === 0) {
        router.push("/comanda_cliente");
      } else {
        toast.error("Usuário não encontrado");
      }
    } catch (error) {
      toast.error("Erro ao fazer login.");
    }
  }

  // Função para verificar dados do cadastro
  async function verificaDados(e) {
    e.preventDefault();

    if (
      usuario === "" ||
      email === "" ||
      confirmaEmail === "" ||
      senha === "" ||
      confirmaSenha === ""
    ) {
      toast.warn("Preencha todos os campos");
    } else if (email !== confirmaEmail) {
      toast.error("Os emails não são iguais");
    } else if (senha !== confirmaSenha) {
      toast.error("As senhas não são iguais");
    } else {
      const obj = {
        nome: usuario,
        email,
        senha,
        funcionario: false,
      };

      try {
        const response = await axios.post(host + "/login", obj);
        toast.success("Conta criada com sucesso!");
        localStorage.setItem("usuario", JSON.stringify(response.data));
        router.push("/comanda_cliente");
      } catch (error) {
        toast.error("Erro ao criar a conta.");
      }
    }
  }

  return (
    <main>
      <div>
        {logar && (
          <div className="login">
            <button
              className="botaoVoltarHome"
              onClick={() => router.push("/")}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <h1>LOGIN</h1>

            <label>
              Usuário <br />
            </label>
            <input
              type="text"
              placeholder="Usuário"
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />

            <label>
              Senha <br />
            </label>
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />

            <br />
            <br />

            <button className="enter" onClick={entrar}>
              Entrar
            </button>

            <button
              className="criarConta"
              onClick={() => {
                setLogar(false);
                setCriarConta(true);
              }}
            >
              Criar conta
            </button>
          </div>
        )}

        {criarConta && (
          <form onSubmit={verificaDados} className="login">
            <h1>Cadastro</h1>

            <label>
              Usuário <br />
            </label>
            <input
              type="text"
              placeholder="Usuário"
              required
              onChange={(e) => setUsuario(e.target.value)}
            />

            <br />
            <br />

            <label>
              Email <br />
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <label>
              Confirme seu Email <br />
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setConfirmaEmail(e.target.value)}
            />

            <br />
            <br />

            <label>
              Senha <br />
            </label>
            <input
              type="password"
              placeholder="Senha"
              required
              onChange={(e) => setSenha(e.target.value)}
            />

            <br />

            <label>
              Confirme a senha <br />
            </label>
            <input
              type="password"
              placeholder="Senha"
              required
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />

            <br />
            <br />

            <button className="enter">Cadastrar</button>

            <button
              className="criarConta"
              onClick={() => {
                setCriarConta(false);
                setLogar(true);
              }}
            >
              Já tem uma conta? <br /> Entrar
            </button>
          </form>
        )}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </main>
  );
}

export default Login;
