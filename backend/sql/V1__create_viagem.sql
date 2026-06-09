CREATE TABLE viagem (
    id SERIAL PRIMARY KEY,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    orcamento FLOAT NOT NULL,
    observacao TEXT
);

CREATE TABLE tag (
    nome VARCHAR(100) NOT NULL PRIMARY KEY,
    descricao TEXT NOT NULL
);

CREATE TABLE destino (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    descricao TEXT
);

CREATE TABLE destino_tags (
    destino_id INTEGER NOT NULL,
    tag VARCHAR(100) NOT NULL,
    PRIMARY KEY (destino_id, tag),
    FOREIGN KEY (destino_id) REFERENCES destino(id),
    FOREIGN KEY (tag) REFERENCES tag(nome)
);

CREATE TABLE destino_viagens (
    destino_id INTEGER NOT NULL,
    viagem_id INTEGER NOT NULL,
    PRIMARY KEY (destino_id, viagem_id),
    FOREIGN KEY (destino_id) REFERENCES destino(id),
    FOREIGN KEY (viagem_id) REFERENCES viagem(id)
);