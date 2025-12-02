DROP TABLE IF EXISTS produtos;
CREATE TABLE produtos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  preco REAL NOT NULL,
  categoria_id INTEGER NOT NULL,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

DROP TABLE IF EXISTS categorias;
CREATE TABLE categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
  );

PRAGMA foreign_keys = on;
