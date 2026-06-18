INSERT INTO public.viagem (data_inicio,data_fim,orcamento,observacao,status,descricao,imagem) VALUES
	 ('2024-03-10','2024-03-15',2800.0,'Final de semana prolongado em Gramado','CONFIRMED','Gramado','http://localhost:8000/static/gramado_otimizada.jpg'),
	 ('2024-05-20','2024-05-27',4200.0,'Conhecer o Rio de Janeiro pela primeira vez','ONGOING','Rio de Janeiro','http://localhost:8000/static/rio_de_janeiro_otimizada.jpg'),
	 ('2024-07-05','2024-07-12',3800.0,'Férias de inverno nas cataratas','CANCELLED','Cataratas','http://localhost:8000/static/cataratas_otimizada.jpg'),
	 ('2026-09-08','2024-09-15',3100.0,'Descobrir a cultura baiana','ONGOING','Bahia','http://localhost:8000/static/bahia_otimizada.jpg'),
	 ('2024-10-10','2024-10-14',2200.0,'Festival de Inverno em Campos do Jordão','PLANNING','Campos do Jordão','http://localhost:8000/static/campos_do_jordao_otimizada.jpg'),
	 ('2024-11-20','2024-11-27',4500.0,'Ecoturismo em Bonito com os amigos','CONFIRMED','Bonito','http://localhost:8000/static/bonito_otimizada.jpg'),
	 ('2024-01-15','2024-01-22',3500.0,'Viagem de férias de verão para Fernando de Noronha','PLANNING','Fernando de Noronha','http://localhost:8000/static/foto_capa1.jpg'),
	 ('2026-12-08','2024-12-08',2900.0,'Viagem histórica a Ouro Preto','CANCELLED','Ouro Preto','http://localhost:8000/static/ouro_preto_otimizada.jpg');


-- =============================================
-- DADOS DE TESTE - VIAGENS
-- =============================================

-- Tags
INSERT INTO tag (nome, descricao) VALUES
('praia', 'Destinos de litoral e mar'),
('montanha', 'Destinos serranos e frios'),
('ecoturismo', 'Destinos com foco em natureza'),
('historia', 'Destinos com valor histórico'),
('gastronomia', 'Destinos com culinária típica'),
('cultural', 'Destinos com rica cultura local'),
('carnaval', 'Destinos com festas populares'),
('inverno', 'Destinos de clima frio'),
('aventura', 'Destinos com atividades radicais'),
('relaxante', 'Destinos para descansar');

-- Destinos
INSERT INTO destino (nome, pais, descricao) VALUES
('Gramado', 'BR', 'Cidade serrana gaúcha com arquitetura europeia'),
('Rio de Janeiro', 'BR', 'Cidade maravilhosa com praias e montanhas'),
('Foz do Iguaçu', 'BR', 'Cataratas do Iguaçu e Parque das Aves'),
('Salvador', 'BR', 'Capital baiana com rica cultura afro-brasileira'),
('Campos do Jordão', 'BR', 'Suíça brasileira com clima de montanha'),
('Bonito', 'BR', 'Ecoturismo com águas cristalinas e grutas'),
('Fernando de Noronha', 'BR', 'Arquipélago com praias paradisíacas'),
('Ouro Preto', 'BR', 'Cidade histórica com arquitetura colonial');

-- Destino Tags
INSERT INTO destino_tags (destino_id, tag) VALUES
(1, 'montanha'), (1, 'inverno'), (1, 'gastronomia'), (1, 'cultural'),
(2, 'praia'), (2, 'montanha'), (2, 'cultural'), (2, 'gastronomia'), (2, 'carnaval'),
(3, 'ecoturismo'), (3, 'aventura'), (3, 'relaxante'),
(4, 'praia'), (4, 'cultural'), (4, 'gastronomia'), (4, 'carnaval'),
(5, 'montanha'), (5, 'inverno'), (5, 'gastronomia'),
(6, 'ecoturismo'), (6, 'aventura'), (6, 'relaxante'),
(7, 'praia'), (7, 'ecoturismo'), (7, 'relaxante'),
(8, 'historia'), (8, 'cultural'), (8, 'montanha');

-- Destino Viagens
INSERT INTO destino_viagens (destino_id, viagem_id) VALUES
(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8);

-- Atividades
INSERT INTO atividade (descricao, custo) VALUES
('Passeio de barco', 150.00),
('Visita ao museu', 45.00),
('Trilha ecológica', 80.00),
('Gastronomia local', 200.00),
('Tour histórico', 120.00),
('Mergulho', 350.00),
('Rappel', 180.00),
('Passeio de bicicleta', 60.00),
('Visita a vinhos', 250.00),
('Parque de diversões', 100.00),
('Balneário', 130.00),
('Observação de aves', 70.00),
('Passeio de tirolesa', 90.00),
('City tour', 110.00),
('Degustação de queijos', 180.00);

-- =============================================
-- DIA_VIAGEM e DIA_VIAGEM_ATIVIDADE
-- =============================================

-- Viagem 1: Gramado (10/03 a 15/03/2024)
INSERT INTO dia_viagem (data_inicio, data_fim, valor, viagem_id) VALUES
('2024-03-10 09:00:00', '2024-03-10 22:00:00', 350.00, 1),
('2024-03-11 08:30:00', '2024-03-11 23:00:00', 420.00, 1),
('2024-03-12 09:00:00', '2024-03-12 21:30:00', 280.00, 1),
('2024-03-13 08:00:00', '2024-03-13 22:00:00', 390.00, 1),
('2024-03-14 09:30:00', '2024-03-14 20:00:00', 310.00, 1),
('2024-03-15 08:00:00', '2024-03-15 12:00:00', 100.00, 1);

INSERT INTO dia_viagem_atividade (atividade_id, dia_viagem_id) VALUES
(2, 1), (9, 1), (15, 1),  -- Dia 1
(3, 2), (8, 2), (4, 2),   -- Dia 2
(2, 3), (15, 3),          -- Dia 3
(3, 4), (8, 4), (4, 4),   -- Dia 4
(2, 5), (15, 5),          -- Dia 5
(14, 6);                  -- Dia 6

-- Viagem 2: Rio de Janeiro (20/05 a 27/05/2024)
INSERT INTO dia_viagem (data_inicio, data_fim, valor, viagem_id) VALUES
('2024-05-20 10:00:00', '2024-05-20 23:00:00', 450.00, 2),
('2024-05-21 08:00:00', '2024-05-21 22:00:00', 380.00, 2),
('2024-05-22 09:00:00', '2024-05-22 21:00:00', 520.00, 2),
('2024-05-23 07:30:00', '2024-05-23 20:00:00', 300.00, 2),
('2024-05-24 08:30:00', '2024-05-24 23:00:00', 410.00, 2),
('2024-05-25 09:00:00', '2024-05-25 22:00:00', 490.00, 2),
('2024-05-26 08:00:00', '2024-05-26 21:00:00', 360.00, 2),
('2024-05-27 09:00:00', '2024-05-27 14:00:00', 120.00, 2);

INSERT INTO dia_viagem_atividade (atividade_id, dia_viagem_id) VALUES
(1, 7), (5, 7), (14, 7),   -- Dia 1
(6, 8), (14, 8), (4, 8),   -- Dia 2
(5, 9), (14, 9), (1, 9),   -- Dia 3
(3, 10), (14, 10),         -- Dia 4
(5, 11), (1, 11), (6, 11), -- Dia 5
(4, 12), (14, 12),         -- Dia 6
(1, 13), (6, 13),          -- Dia 7
(14, 14);                  -- Dia 8

-- Viagem 3: Cataratas (05/07 a 12/07/2024) - CANCELLED
INSERT INTO dia_viagem (data_inicio, data_fim, valor, viagem_id) VALUES
('2024-07-05 09:00:00', '2024-07-05 22:00:00', 400.00, 3),
('2024-07-06 08:00:00', '2024-07-06 21:00:00', 350.00, 3),
('2024-07-07 09:30:00', '2024-07-07 20:00:00', 280.00, 3),
('2024-07-08 08:00:00', '2024-07-08 22:00:00', 420.00, 3);

INSERT INTO dia_viagem_atividade (atividade_id, dia_viagem_id) VALUES
(14, 15), (3, 15),         -- Dia 1
(3, 16), (13, 16), (4, 16),-- Dia 2
(14, 17), (10, 17),        -- Dia 3
(12, 18), (3, 18);         -- Dia 4

-- Viagem 4: Bahia (08/09 a 15/09/2024)
INSERT INTO dia_viagem (data_inicio, data_fim, valor, viagem_id) VALUES
('2024-09-08 10:00:00', '2024-09-08 23:00:00', 380.00, 4),
('2024-09-09 08:30:00', '2024-09-09 22:00:00', 420.00, 4),
('2024-09-10 09:00:00', '2024-09-10 21:00:00', 300.00, 4),
('2024-09-11 07:00:00', '2024-09-11 20:00:00', 350.00, 4),
('2024-09-12 08:00:00', '2024-09-12 23:00:00', 480.00, 4),
('2024-09-13 09:30:00', '2024-09-13 22:00:00', 390.00, 4),
('2024-09-14 08:00:00', '2024-09-14 21:00:00', 310.00, 4),
('2024-09-15 09:00:00', '2024-09-15 15:00:00', 130.00, 4);

INSERT INTO dia_viagem_atividade (atividade_id, dia_viagem_id) VALUES
(5, 19), (4, 19), (14, 19), -- Dia 1
(1, 20), (4, 20),          -- Dia 2
(5, 21), (14, 21),         -- Dia 3
(3, 22), (14, 22),         -- Dia 4
(4, 23), (5, 23), (14, 23),-- Dia 5
(1, 24), (4, 24),          -- Dia 6
(5, 25), (14, 25),         -- Dia 7
(14, 26);                  -- Dia 8

-- Viagem 5: Campos do Jordão (10/10 a 14/10/2024) - PLANNING
INSERT INTO dia_viagem (data_inicio, data_fim, valor, viagem_id) VALUES
('2024-10-10 09:00:00', '2024-10-10 22:00:00', 350.00, 5),
('2024-10-11 08:30:00', '2024-10-11 21:00:00', 280.00, 5),
('2024-10-12 09:00:00', '2024-10-12 23:00:00', 420.00, 5),
('2024-10-13 08:00:00', '2024-10-13 20:00:00', 300.00, 5),
('2024-10-14 09:00:00', '2024-10-14 14:00:00', 110.00, 5);

INSERT INTO dia_viagem_atividade (atividade_id, dia_viagem_id) VALUES
(9, 27), (15, 27), (14, 27), -- Dia 1
(2, 28), (15, 28),          -- Dia 2
(9, 29), (4, 29), (15, 29), -- Dia 3
(3, 30), (14, 30),          -- Dia 4
(14, 31);                   -- Dia 5

-- Viagem 6: Bonito (20/11 a 27/11/2024) - CONFIRMED
INSERT INTO dia_viagem (data_inicio, data_fim, valor, viagem_id) VALUES
('2024-11-20 08:00:00', '2024-11-20 22:00:00', 450.00, 6),
('2024-11-21 07:30:00', '2024-11-21 21:00:00', 380.00, 6),
('2024-11-22 09:00:00', '2024-11-22 20:00:00', 320.00, 6),
('2024-11-23 08:00:00', '2024-11-23 23:00:00', 490.00, 6),
('2024-11-24 07:00:00', '2024-11-24 22:00:00', 410.00, 6),
('2024-11-25 08:30:00', '2024-11-25 21:00:00', 360.00, 6),
('2024-11-26 09:00:00', '2024-11-26 20:00:00', 280.00, 6),
('2024-11-27 08:00:00', '2024-11-27 15:00:00', 120.00, 6);

INSERT INTO dia_viagem_atividade (atividade_id, dia_viagem_id) VALUES
(3, 32), (12, 32), (6, 32),  -- Dia 1
(3, 33), (13, 33),          -- Dia 2
(11, 34), (12, 34),         -- Dia 3
(3, 35), (6, 35), (13, 35), -- Dia 4
(3, 36), (12, 36),          -- Dia 5
(11, 37), (12, 37),         -- Dia 6
(3, 38), (12, 38),          -- Dia 7
(14, 39);                   -- Dia 8

-- Viagem 7: Fernando de Noronha (15/01 a 22/01/2024) - PLANNING
INSERT INTO dia_viagem (data_inicio, data_fim, valor, viagem_id) VALUES
('2024-01-15 10:00:00', '2024-01-15 23:00:00', 500.00, 7),
('2024-01-16 08:00:00', '2024-01-16 22:00:00', 420.00, 7),
('2024-01-17 09:00:00', '2024-01-17 21:00:00', 380.00, 7),
('2024-01-18 07:30:00', '2024-01-18 20:00:00', 350.00, 7),
('2024-01-19 08:30:00', '2024-01-19 23:00:00', 460.00, 7),
('2024-01-20 09:00:00', '2024-01-20 22:00:00', 390.00, 7),
('2024-01-21 08:00:00', '2024-01-21 21:00:00', 320.00, 7),
('2024-01-22 09:00:00', '2024-01-22 16:00:00', 140.00, 7);

INSERT INTO dia_viagem_atividade (atividade_id, dia_viagem_id) VALUES
(1, 40), (6, 40), (14, 40),  -- Dia 1
(6, 41), (14, 41),          -- Dia 2
(1, 42), (4, 42),           -- Dia 3
(3, 43), (14, 43),          -- Dia 4
(1, 44), (6, 44), (14, 44), -- Dia 5
(6, 45), (14, 45),          -- Dia 6
(1, 46), (4, 46),           -- Dia 7
(14, 47);                   -- Dia 8

-- Viagem 8: Ouro Preto (08/12 a 08/12/2024) - CANCELLED
INSERT INTO dia_viagem (data_inicio, data_fim, valor, viagem_id) VALUES
('2024-12-08 09:00:00', '2024-12-08 22:00:00', 350.00, 8),
('2024-12-08 08:30:00', '2024-12-08 21:00:00', 280.00, 8);

INSERT INTO dia_viagem_atividade (atividade_id, dia_viagem_id) VALUES
(5, 48), (14, 48), (2, 48), -- Dia 1
(5, 49), (14, 49), (2, 49); -- Dia 2

-- =============================================
-- GASTOS
-- =============================================

INSERT INTO gasto (descricao, valor, pago, viagem_id) VALUES
-- Viagem 1: Gramado
('Hospedagem Hotel Serra', 1200.00, true, 1),
('Alimentação', 450.00, true, 1),
('Ingressos parques', 300.00, true, 1),
('Compras', 250.00, false, 1),
-- Viagem 2: Rio de Janeiro
('Hospedagem Copacabana', 1800.00, true, 2),
('Alimentação', 600.00, true, 2),
('Passeios', 400.00, true, 2),
('Transporte', 350.00, false, 2),
('Compras', 500.00, false, 2),
-- Viagem 3: Cataratas
('Hospedagem', 1500.00, true, 3),
('Alimentação', 500.00, true, 3),
('Ingressos Cataratas', 250.00, true, 3),
-- Viagem 4: Bahia
('Hospedagem', 1300.00, true, 4),
('Alimentação', 550.00, true, 4),
('Passeios', 380.00, false, 4),
('Transporte', 280.00, false, 4),
-- Viagem 5: Campos do Jordão
('Hospedagem', 900.00, false, 5),
('Alimentação', 350.00, false, 5),
('Ingressos', 200.00, false, 5),
-- Viagem 6: Bonito
('Hospedagem', 1600.00, true, 6),
('Alimentação', 480.00, true, 6),
('Passeios ecoturismo', 650.00, true, 6),
('Transporte', 320.00, false, 6),
-- Viagem 7: Fernando de Noronha
('Hospedagem', 2000.00, false, 7),
('Alimentação', 600.00, false, 7),
('Mergulhos', 750.00, false, 7),
('Taxa ambiental', 150.00, false, 7),
-- Viagem 8: Ouro Preto
('Hospedagem', 800.00, true, 8),
('Alimentação', 300.00, true, 8),
('Ingressos museus', 150.00, true, 8);