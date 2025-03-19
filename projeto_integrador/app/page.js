"use client";
import "./page.css"
import Head from "next/head";
import { useEffect } from "react";
import Menu from "./components/Menu";

function Home() {
  useEffect(() => {
    document.title = "Bar do João";
  }, []);

  return (

    
    <div>
      <Menu/>
      <Head>
        <title>Bar do João</title>
      </Head>
      <main>
        <img src="/bardojao.png" alt="Imagem do Bar do João" />
      </main>
    </div>
  );
}

export default Home;
