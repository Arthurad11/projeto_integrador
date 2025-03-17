import Produto from "./components/Produto";

function Produtos() {
    return ( 
        <div>
            {/* navbar */}

            <h1>Produtos</h1>

            <div className="produtos">
                <h2>Cerveja</h2>
                    <Produto/>
                    <Produto/>
                    <Produto/>

                <br/>
                    

                <h2>Whisky</h2>
                <Produto/>
                <Produto/>
                <br/>

                <h2>Porções</h2>           

            </div>
        </div>
    );
}

export default Produtos;