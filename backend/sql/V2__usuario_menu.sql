CREATE TABLE usuario
(
    id     SERIAL PRIMARY KEY,
    nome   VARCHAR(100) NOT NULL,
    email  VARCHAR(255) NOT NULL UNIQUE,
    avatar TEXT
);

CREATE TABLE item_menu
(
    id          SERIAL PRIMARY KEY,
    nome        VARCHAR(100) NOT NULL,
    codigo_acao VARCHAR(50)  NOT NULL UNIQUE,
    icone       VARCHAR(100) NOT NULL,
    order       INTEGER      NOT NULL UNIQUE
);

insert into item_menu(codigo_acao, nome, icone)
values ('/', 'Dashboard', 'pi pi-th-large', 1),
       ('/trips', 'My Trips', 'pi pi-map', 2),
       ('/checklists', 'Checklists', 'pi pi-list', 3),
       ('/settings', 'Settings', 'pi pi-cog', 4);