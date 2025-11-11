-- ✅ 1) Criar categoria padrão
INSERT INTO categorias (nome) VALUES ('Sem categoria');

-- Capturar o ID gerado (supondo que seja 1, mas funciona mesmo se não for)
-- Você pode confirmar com:
-- SELECT id, nome FROM categorias;

-- ✅ 2) Adicionar a coluna categoria_id aos produtos
ALTER TABLE produtos ADD COLUMN categoria_id INTEGER;

-- ✅ 3) Preencher produtos existentes com a categoria padrão
UPDATE produtos SET categoria_id = (SELECT id FROM categorias WHERE nome = 'Sem categoria')
WHERE categoria_id IS NULL;

-- ✅ 4) Recriar tabela para aplicar foreign key corretamente no SQLite
PRAGMA foreign_keys = off;

CREATE TABLE produtos_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  preco REAL NOT NULL,
  categoria_id INTEGER NOT NULL,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

INSERT INTO produtos_new (id, nome, preco, categoria_id)
SELECT id, nome, preco, categoria_id FROM produtos;

DROP TABLE produtos;
ALTER TABLE produtos_new RENAME TO produtos;

PRAGMA foreign_keys = on;
