INSERT INTO public.viagem (data_inicio,data_fim,orcamento,observacao,status,descricao,imagem) VALUES
	 ('2024-03-10','2024-03-15',2800.0,'Final de semana prolongado em Gramado','CONFIRMED','Gramado','http://localhost:8000/static/gramado_otimizada.jpg'),
	 ('2024-05-20','2024-05-27',4200.0,'Conhecer o Rio de Janeiro pela primeira vez','ONGOING','Rio de Janeiro','http://localhost:8000/static/rio_de_janeiro_otimizada.jpg'),
	 ('2024-07-05','2024-07-12',3800.0,'Férias de inverno nas cataratas','CANCELLED','Cataratas','http://localhost:8000/static/cataratas_otimizada.jpg'),
	 ('2026-09-08','2024-09-15',3100.0,'Descobrir a cultura baiana','ONGOING','Bahia','http://localhost:8000/static/bahia_otimizada.jpg'),
	 ('2024-10-10','2024-10-14',2200.0,'Festival de Inverno em Campos do Jordão','PLANNING','Campos do Jordão','http://localhost:8000/static/campos_do_jordao_otimizada.jpg'),
	 ('2024-11-20','2024-11-27',4500.0,'Ecoturismo em Bonito com os amigos','CONFIRMED','Bonito','http://localhost:8000/static/bonito_otimizada.jpg'),
	 ('2024-01-15','2024-01-22',3500.0,'Viagem de férias de verão para Fernando de Noronha','PLANNING','Fernando de Noronha','http://localhost:8000/static/foto_capa1.jpg'),
	 ('2026-12-08','2024-12-08',2900.0,'Viagem histórica a Ouro Preto','CANCELLED','Ouro Preto','http://localhost:8000/static/ouro_preto_otimizada.jpg');

-- Inserir destinos
INSERT INTO destino (nome, pais, descricao) VALUES
('Gramado', 'BR', 'Cidade serrana com arquitetura europeia, conhecida pelo chocolate e paisagens de inverno'),
('Rio de Janeiro', 'BR', 'Cidade maravilhosa, famosa pelo Cristo Redentor, Pão de Açúcar e praias'),
('Foz do Iguaçu', 'BR', 'Cidade das famosas Cataratas do Iguaçu, uma das sete maravilhas naturais do mundo'),
('Salvador', 'BR', 'Capital da Bahia, rica em cultura afro-brasileira, com pelourinho e praias paradisíacas'),
('Campos do Jordão', 'BR', 'Cidade serrana com clima europeu, conhecida como a Suíça Brasileira'),
('Bonito', 'BR', 'Destino de ecoturismo com águas cristalinas, grutas e cachoeiras'),
('Fernando de Noronha', 'BR', 'Arquipélago com praias paradisíacas, vida marinha diversa e natureza preservada'),
('Ouro Preto', 'BR', 'Cidade histórica com arquitetura colonial barroca, repleta de igrejas e museus');

-- Inserir tags
INSERT INTO tag (nome, descricao) VALUES
('Praia', 'Destinos com acesso à praia ou litoral'),
('Serra', 'Destinos em regiões serranas com clima ameno'),
('Ecoturismo', 'Destinos com foco em natureza e preservação ambiental'),
('História', 'Destinos com rico patrimônio histórico e cultural'),
('Cultura', 'Destinos com forte manifestação cultural local'),
('Gastronomia', 'Destinos com culinária típica renomada'),
('Aventura', 'Destinos com atividades de aventura e adrenalina'),
('Romântico', 'Destinos ideais para casais e momentos românticos');

-- Relacionar destinos com tags
INSERT INTO destino_tags (destino_id, tag) VALUES
(1, 'Serra'),
(1, 'Gastronomia'),
(1, 'Romântico'),
(2, 'Praia'),
(2, 'Cultura'),
(2, 'Gastronomia'),
(3, 'Ecoturismo'),
(3, 'Aventura'),
(4, 'Praia'),
(4, 'Cultura'),
(4, 'Gastronomia'),
(5, 'Serra'),
(5, 'Romântico'),
(5, 'Gastronomia'),
(6, 'Ecoturismo'),
(6, 'Aventura'),
(7, 'Praia'),
(7, 'Ecoturismo'),
(7, 'Romântico'),
(8, 'História'),
(8, 'Cultura');

-- Relacionar viagens com destinos
INSERT INTO destino_viagens (destino_id, viagem_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8);

-- Inserir gastos
INSERT INTO gasto (descricao, valor, pago, viagem_id) VALUES
-- Viagem 1 - Gramado
('Passagem aérea ida e volta', 850.00, true, 1),
('Hotel - 5 noites', 1200.00, true, 1),
('Alimentação', 400.00, false, 1),
('Passeios', 250.00, false, 1),
('Compras', 100.00, false, 1),

-- Viagem 2 - Rio de Janeiro
('Passagem aérea ida e volta', 950.00, true, 2),
('Hotel - 7 noites', 1500.00, false, 2),
('Alimentação', 500.00, false, 2),
('Passeios', 600.00, false, 2),
('Transporte local', 200.00, true, 2),
('Compras', 450.00, false, 2),

-- Viagem 3 - Cataratas
('Passagem aérea ida e volta', 900.00, true, 3),
('Hotel - 7 noites', 1400.00, true, 3),
('Alimentação', 450.00, true, 3),
('Passeios', 500.00, true, 3),
('Transporte local', 550.00, true, 3),

-- Viagem 4 - Bahia
('Passagem aérea ida e volta', 880.00, true, 4),
('Hotel - 7 noites', 1300.00, false, 4),
('Alimentação', 420.00, false, 4),
('Passeios', 350.00, false, 4),
('Transporte local', 150.00, true, 4),

-- Viagem 5 - Campos do Jordão
('Passagem aérea ida e volta', 750.00, false, 5),
('Hotel - 4 noites', 800.00, false, 5),
('Alimentação', 300.00, false, 5),
('Passeios', 200.00, false, 5),
('Compras', 150.00, false, 5),

-- Viagem 6 - Bonito
('Passagem aérea ida e volta', 1100.00, true, 6),
('Hotel - 7 noites', 1600.00, false, 6),
('Alimentação', 550.00, false, 6),
('Passeios', 700.00, false, 6),
('Equipamentos', 550.00, false, 6),

-- Viagem 7 - Fernando de Noronha
('Passagem aérea ida e volta', 1200.00, false, 7),
('Hotel - 7 noites', 1800.00, false, 7),
('Alimentação', 600.00, false, 7),
('Passeios', 500.00, false, 7),
('Taxa de preservação', 400.00, false, 7),

-- Viagem 8 - Ouro Preto
('Passagem aérea ida e volta', 800.00, true, 8),
('Hotel - 5 noites', 1000.00, true, 8),
('Alimentação', 350.00, true, 8),
('Passeios', 450.00, true, 8),
('Transporte local', 300.00, true, 8);

-- Inserir atividades
INSERT INTO atividade (descricao, custo) VALUES
('Visita ao Museu de Cera', 45.00),
('Passeio de Teleférico', 35.00),
('Degustação de chocolate', 50.00),
('Visita ao Cristo Redentor', 80.00),
('Passeio de bondinho', 60.00),
('Visita ao Pão de Açúcar', 75.00),
('Visita às Cataratas', 90.00),
('Passeio de barco no Itaipu', 120.00),
('Visita ao Parque Aves', 65.00),
('Visita ao Pelourinho', 30.00),
('Passeio de barco para Ilha de Itaparica', 100.00),
('Aula de capoeira', 55.00),
('Visita ao Amantikir', 40.00),
('Passeio de tirolesa', 70.00),
('Visita à Cervejaria Baden Baden', 35.00),
('Mergulho no Rio da Prata', 150.00),
('Visita à Gruta do Lago Azul', 110.00),
('Flutuação no Sucuri', 180.00),
('Passeio de buggy', 200.00),
('Mergulho com golfinhos', 250.00),
('Visita à Ilha do Frade', 180.00),
('Visita à praia do Sancho', 50.00),
('Tour histórico pelas igrejas', 60.00),
('Visita ao Museu da Inconfidência', 40.00),
('Passeio de Maria Fumaça', 45.00);

-- Inserir dias de viagem (alguns dias propositalmente faltando)
INSERT INTO dia_viagem (data_dia, viagem_id) VALUES
-- Viagem 1 - Gramado (10/03 a 15/03) - 4 dias com atividades
('2024-03-10', 1),
('2024-03-11', 1),
('2024-03-12', 1),
('2024-03-14', 1), -- dia 13 pulado
('2024-03-15', 1),

-- Viagem 2 - Rio de Janeiro (20/05 a 27/05) - 5 dias com atividades
('2024-05-20', 2),
('2024-05-21', 2),
('2024-05-23', 2), -- dia 22 pulado
('2024-05-25', 2), -- dia 24 pulado
('2024-05-27', 2), -- dia 26 pulado

-- Viagem 3 - Cataratas (05/07 a 12/07) - 4 dias com atividades
('2024-07-05', 3),
('2024-07-07', 3), -- dia 06 pulado
('2024-07-09', 3), -- dia 08 pulado
('2024-07-11', 3), -- dia 10 pulado

-- Viagem 4 - Bahia (08/09 a 15/09) - 4 dias com atividades
('2024-09-08', 4),
('2024-09-10', 4), -- dia 09 pulado
('2024-09-12', 4), -- dia 11 pulado
('2024-09-14', 4), -- dia 13 pulado

-- Viagem 5 - Campos do Jordão (10/10 a 14/10) - 3 dias com atividades
('2024-10-10', 5),
('2024-10-12', 5), -- dia 11 pulado
('2024-10-14', 5), -- dia 13 pulado

-- Viagem 6 - Bonito (20/11 a 27/11) - 5 dias com atividades
('2024-11-20', 6),
('2024-11-21', 6),
('2024-11-23', 6), -- dia 22 pulado
('2024-11-25', 6), -- dia 24 pulado
('2024-11-27', 6), -- dia 26 pulado

-- Viagem 7 - Fernando de Noronha (15/01 a 22/01) - 3 dias com atividades
('2024-01-15', 7),
('2024-01-18', 7), -- dias 16 e 17 pulados
('2024-01-21', 7), -- dias 19 e 20 pulados

-- Viagem 8 - Ouro Preto (08/12 a 12/12) - 4 dias com atividades
('2024-12-08', 8),
('2024-12-09', 8),
('2024-12-10', 8),
('2024-12-12', 8); -- dia 11 pulado

-- Relacionar dias com atividades (dia_viagem_atividade)
INSERT INTO dia_viagem_atividade (atividade_id, dia_viagem_id, data_inicio, data_fim, custo) VALUES
-- Viagem 1 - Gramado
-- Dia 10/03 (dia_viagem_id = 1)
(1, 1, '2024-03-10 09:00:00', '2024-03-10 12:00:00', 45.00),
(2, 1, '2024-03-10 14:00:00', '2024-03-10 17:00:00', 35.00),
-- Dia 11/03 (dia_viagem_id = 2)
(3, 2, '2024-03-11 10:00:00', '2024-03-11 12:00:00', 50.00),
(1, 2, '2024-03-11 14:00:00', '2024-03-11 16:00:00', 45.00),
-- Dia 12/03 (dia_viagem_id = 3) - SEM ATIVIDADES (dia de descanso)
-- Dia 14/03 (dia_viagem_id = 4)
(2, 4, '2024-03-14 09:00:00', '2024-03-14 11:30:00', 35.00),
(3, 4, '2024-03-14 14:00:00', '2024-03-14 16:30:00', 50.00),
-- Dia 15/03 (dia_viagem_id = 5)
(1, 5, '2024-03-15 09:00:00', '2024-03-15 11:00:00', 45.00),

-- Viagem 2 - Rio de Janeiro
-- Dia 20/05 (dia_viagem_id = 6)
(4, 6, '2024-05-20 08:00:00', '2024-05-20 11:00:00', 80.00),
(5, 6, '2024-05-20 13:00:00', '2024-05-20 16:00:00', 60.00),
-- Dia 21/05 (dia_viagem_id = 7)
(6, 7, '2024-05-21 09:00:00', '2024-05-21 12:00:00', 75.00),
(4, 7, '2024-05-21 14:00:00', '2024-05-21 17:00:00', 80.00),
-- Dia 23/05 (dia_viagem_id = 8) - SEM ATIVIDADES (dia de descanso)
-- Dia 25/05 (dia_viagem_id = 9)
(5, 9, '2024-05-25 09:00:00', '2024-05-25 12:00:00', 60.00),
(6, 9, '2024-05-25 14:00:00', '2024-05-25 17:00:00', 75.00),
-- Dia 27/05 (dia_viagem_id = 10)
(4, 10, '2024-05-27 08:00:00', '2024-05-27 10:30:00', 80.00),

-- Viagem 3 - Cataratas
-- Dia 05/07 (dia_viagem_id = 11)
(7, 11, '2024-07-05 08:00:00', '2024-07-05 12:00:00', 90.00),
(8, 11, '2024-07-05 14:00:00', '2024-07-05 17:00:00', 120.00),
-- Dia 07/07 (dia_viagem_id = 12) - SEM ATIVIDADES (dia de descanso)
-- Dia 09/07 (dia_viagem_id = 13)
(9, 13, '2024-07-09 09:00:00', '2024-07-09 12:00:00', 65.00),
(7, 13, '2024-07-09 14:00:00', '2024-07-09 16:00:00', 90.00),
-- Dia 11/07 (dia_viagem_id = 14)
(8, 14, '2024-07-11 08:00:00', '2024-07-11 11:00:00', 120.00),

-- Viagem 4 - Bahia
-- Dia 08/09 (dia_viagem_id = 15)
(10, 15, '2024-09-08 09:00:00', '2024-09-08 12:00:00', 30.00),
(11, 15, '2024-09-08 14:00:00', '2024-09-08 17:00:00', 100.00),
-- Dia 10/09 (dia_viagem_id = 16) - SEM ATIVIDADES (dia de descanso)
-- Dia 12/09 (dia_viagem_id = 17)
(12, 17, '2024-09-12 10:00:00', '2024-09-12 12:00:00', 55.00),
(10, 17, '2024-09-12 14:00:00', '2024-09-12 16:00:00', 30.00),
-- Dia 14/09 (dia_viagem_id = 18)
(11, 18, '2024-09-14 08:00:00', '2024-09-14 11:00:00', 100.00),

-- Viagem 5 - Campos do Jordão
-- Dia 10/10 (dia_viagem_id = 19)
(13, 19, '2024-10-10 09:00:00', '2024-10-10 12:00:00', 40.00),
(14, 19, '2024-10-10 14:00:00', '2024-10-10 16:00:00', 70.00),
-- Dia 12/10 (dia_viagem_id = 20) - SEM ATIVIDADES (dia de descanso)
-- Dia 14/10 (dia_viagem_id = 21)
(15, 21, '2024-10-14 10:00:00', '2024-10-14 12:00:00', 35.00),
(13, 21, '2024-10-14 14:00:00', '2024-10-14 17:00:00', 40.00),

-- Viagem 6 - Bonito
-- Dia 20/11 (dia_viagem_id = 22)
(16, 22, '2024-11-20 07:00:00', '2024-11-20 12:00:00', 150.00),
(17, 22, '2024-11-20 14:00:00', '2024-11-20 17:00:00', 110.00),
-- Dia 21/11 (dia_viagem_id = 23)
(18, 23, '2024-11-21 08:00:00', '2024-11-21 12:00:00', 180.00),
-- Dia 23/11 (dia_viagem_id = 24) - SEM ATIVIDADES (dia de descanso)
-- Dia 25/11 (dia_viagem_id = 25)
(16, 25, '2024-11-25 08:00:00', '2024-11-25 11:00:00', 150.00),
(19, 25, '2024-11-25 14:00:00', '2024-11-25 17:00:00', 200.00),
-- Dia 27/11 (dia_viagem_id = 26)
(17, 26, '2024-11-27 09:00:00', '2024-11-27 12:00:00', 110.00),

-- Viagem 7 - Fernando de Noronha
-- Dia 15/01 (dia_viagem_id = 27)
(20, 27, '2024-01-15 08:00:00', '2024-01-15 12:00:00', 250.00),
(21, 27, '2024-01-15 14:00:00', '2024-01-15 17:00:00', 180.00),
-- Dia 18/01 (dia_viagem_id = 28) - SEM ATIVIDADES (dia de descanso)
-- Dia 21/01 (dia_viagem_id = 29)
(22, 29, '2024-01-21 09:00:00', '2024-01-21 12:00:00', 50.00),
(20, 29, '2024-01-21 14:00:00', '2024-01-21 16:00:00', 250.00),

-- Viagem 8 - Ouro Preto
-- Dia 08/12 (dia_viagem_id = 30)
(23, 30, '2024-12-08 09:00:00', '2024-12-08 12:00:00', 60.00),
(24, 30, '2024-12-08 14:00:00', '2024-12-08 17:00:00', 40.00),
-- Dia 09/12 (dia_viagem_id = 31)
(25, 31, '2024-12-09 10:00:00', '2024-12-09 12:00:00', 45.00),
-- Dia 10/12 (dia_viagem_id = 32) - SEM ATIVIDADES (dia de descanso)
-- Dia 12/12 (dia_viagem_id = 33)
(23, 33, '2024-12-12 08:00:00', '2024-12-12 10:00:00', 60.00),
(24, 33, '2024-12-12 14:00:00', '2024-12-12 16:30:00', 40.00);