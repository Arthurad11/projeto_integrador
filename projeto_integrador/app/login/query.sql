--Cadastro de clientes
INSERT INTO usuarios (nome, email, senha, funcionario) VALUES ('nome', 'email.com', 'senha', false);

--Login de usuario
SELECT * FROM usuarios WHERE email = 'email.com' AND senha = 'senha';
