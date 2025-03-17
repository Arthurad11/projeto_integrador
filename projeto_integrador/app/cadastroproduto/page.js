import "./cadprod.css"


function CadProduto() {
    return ( 
    
    <div class="conjunto">

        <h1 class="titulo"> Cadastro de produto </h1>
        <p> Produto: </p>
        <input placeholder="Digite o produto aqui..."/>
        <p> Valor do Produto: </p>
        <input placeholder="Digite o valor do produto..."/>
        <p>Quantidade em UN: </p>
        <input placeholder="Quantas Unidades..."/>
        <br/> <br/>
        <button class="botao"> Cadastrar </button>

    </div> );
}

export default CadProduto;