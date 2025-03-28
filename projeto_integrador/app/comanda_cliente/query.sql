-- Escrever todas as query que sua tela precisa 
 --Ao cadastrar um produto 

INSERT INTO vendas (id_cliente, id_produto, id_mesas, id_comanda, quantidade, data, finalizado)
VALUES (NULL, 1, 5, 10, 2, NOW(), false)
RETURNING id;
 


  -- Ao entrar na página de produtos , listar todos produtos numa tabela 
SELECT * FROM produtos;

-- Ao clicar na lixeira para excluir um produto da tabela
REMOVE FROM produtos WHERE id = 1; 


-- Lista de produto que o cliente consumio 
SELECT v.id, v.id_comanda, v.id_mesas, v.quantidade, v.data, v.finalizado, 
       p.nome AS produto_nome, p.preco
FROM vendas v
JOIN produtos p ON v.id_produto = p.id
WHERE v.id_comanda = 10;


-- Caso precise buscar todas as vendas de um cliente especifico
SELECT v.id, v.id_cliente, v.id_comanda, v.id_mesas, v.quantidade, v.data, v.finalizado, 
       p.nome AS produto_nome, p.preco
FROM vendas v
JOIN produtos p ON v.id_produto = p.id
WHERE v.id_cliente = 3;
