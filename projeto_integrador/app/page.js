"use client";
import "./page.css";
import { useEffect } from "react";
import Menu from "./components/Menu";

function Home() {
  useEffect(() => {
    document.title = "Bar do João";
  }, []);

  return (
    <div>
      <Menu /> 
    <div className="container">

      <div className="body">
      <header className="header">
        <img className="logo" src="/img/logo.png" alt="Logo do Bar do João" />
        <h1> Bar do João </h1>
      </header>

      <section className="hero">
        <div className="card-uiverse">
          <div className="beer-icon">
            <img src="/img/caneca.png" alt="Caneca de cerveja" />
          </div>
          <h2>Bem-vindo ao bar mais animado da cidade!</h2>
          <p>Gerencie comandas, pedidos e estoque com estilo.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Bar do João. Todos os direitos reservados.</p>
      </footer>

      </div>
    </div>
    </div>
  );
}

export default Home;
