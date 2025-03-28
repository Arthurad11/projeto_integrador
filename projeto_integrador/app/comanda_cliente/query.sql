-- Escrever todas as query que sua tela precisa 
 --Ao cadastrar um produto 
 INSERT INTO produtos (nome , valor , categoria) VALUES ('cerveja Long Neck', 8.00 , bebidas);
 INSERT INTO produtos (nome , valor , categoria) VALUES ('espetinho de Frango ', 9.00 , espetinhos);
 INSERT INTO produtos (nome , valor , categoria) VALUES ('porção de Batata Frita', 18.00 , acompanhamentos);
 


  -- Ao entrar na página de produtos , listar todos produtos numa tabela 
SELECT * FROM produtos;

-- Ao clicar na lixeira para excluir um produto da tabela
REMOVE FROM produtos WHERE id = 1; 
