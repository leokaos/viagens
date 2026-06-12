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