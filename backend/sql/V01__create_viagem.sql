DROP TABLE IF EXISTS dia_viagem_atividade;
DROP TABLE IF EXISTS destino_tags;
DROP TABLE IF EXISTS destino_viagens;
DROP TABLE IF EXISTS dia_viagem;
DROP TABLE IF EXISTS gasto;
DROP TABLE IF EXISTS viagem;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS destino;
DROP TABLE IF EXISTS atividade;

CREATE TABLE viagem
(
    id          SERIAL PRIMARY KEY,
    data_inicio DATE         NOT NULL,
    data_fim    DATE         NOT NULL,
    descricao   VARCHAR(50)  NOT NULL,
    orcamento   FLOAT        NOT NULL,
    status      VARCHAR(100) NOT NULL,
    imagem      TEXT         NOT NULL,
    observacao  TEXT
);

CREATE TABLE tag
(
    nome      VARCHAR(100) NOT NULL PRIMARY KEY,
    descricao TEXT         NOT NULL
);

CREATE TABLE destino
(
    id        SERIAL PRIMARY KEY,
    nome      VARCHAR(200) NOT NULL,
    pais      varchar(2)   NOT NULL,
    descricao TEXT
);

CREATE TABLE destino_tags
(
    destino_id INTEGER      NOT NULL,
    tag        VARCHAR(100) NOT NULL,
    PRIMARY KEY (destino_id, tag),
    FOREIGN KEY (destino_id) REFERENCES destino (id),
    FOREIGN KEY (tag) REFERENCES tag (nome)
);

CREATE TABLE destino_viagens
(
    destino_id INTEGER NOT NULL,
    viagem_id  INTEGER NOT NULL,
    PRIMARY KEY (destino_id, viagem_id),
    FOREIGN KEY (destino_id) REFERENCES destino (id),
    FOREIGN KEY (viagem_id) REFERENCES viagem (id)
);

CREATE TABLE gasto
(
    id        SERIAL PRIMARY KEY,
    descricao VARCHAR(255)   NOT NULL,
    valor     NUMERIC(10, 2) NOT NULL,
    pago      BOOLEAN        NOT NULL DEFAULT FALSE,
    viagem_id INTEGER        NOT NULL,
    CONSTRAINT fk_viagem FOREIGN KEY (viagem_id) REFERENCES viagem (id) ON DELETE CASCADE
);

create table dia_viagem
(
    id          SERIAL PRIMARY KEY,
    data_inicio TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    data_fim    TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    valor       NUMERIC(10, 2) NOT NULL,
    viagem_id   INTEGER        NOT NULL,
    CONSTRAINT fk_viagem FOREIGN KEY (viagem_id) REFERENCES viagem (id) ON DELETE CASCADE
);

create table atividade
(
    id        SERIAL PRIMARY KEY,
    descricao varchar(255)   NOT NULL,
    custo     NUMERIC(10, 2) NOT NULL
);

CREATE TABLE dia_viagem_atividade
(
    atividade_id  INTEGER NOT NULL,
    dia_viagem_id INTEGER NOT NULL,
    PRIMARY KEY (atividade_id, dia_viagem_id),
    FOREIGN KEY (atividade_id) REFERENCES atividade (id),
    FOREIGN KEY (dia_viagem_id) REFERENCES dia_viagem (id)
);
