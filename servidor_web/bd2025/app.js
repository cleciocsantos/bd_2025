const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Conexão com o banco de dados
const db = new sqlite3.Database("./database.db");

// Cria tabela se não existir
db.run(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL
  )
`);

db.run(`
  CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
  )
`);

// Rota para cadastrar produto
app.post("/api/produtos", (req, res) => {
  const { nome, preco, categoria_id } = req.body;
  if (!nome || !preco || !categoria_id) {
    return res.status(400).json({ error: "Nome, preço e categoria são obrigatórios" });
  }

  const stmt = db.prepare("INSERT INTO produtos (nome, preco, categoria_id) VALUES (?, ?, ?)");
  stmt.run(nome, preco, categoria_id, function (err) {
    if (err) {
      return res.status(500).json({ error: "Erro ao inserir produto" });
    }
    res.json({ id: this.lastID, nome, preco, categoria_id });
  });
  stmt.finalize();
});

// Rota para listar produtos (com filtro opcional por nome)
app.get("/api/produtos", (req, res) => {
  const filtro = req.query.nome ? `%${req.query.nome}%` : "%";
  let sql = `
    SELECT p.id, p.nome, p.preco, c.nome as categoria
    FROM produtos p
    INNER JOIN categorias c
    ON p.categoria_id = c.id
    WHERE p.nome LIKE ? ORDER BY p.id DESC
  ` ;
  db.all(
    sql,
    [filtro],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Erro ao consultar produtos" });
      }
      res.json(rows);
    }
  );
});

app.delete("/api/produtos/:id", (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM produtos WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({ error: "Erro ao deletar produto" });
    }
    res.json({ deleted: this.changes > 0 });
    });
});

app.put("/api/produtos/:id", (req, res) => {
    const { id } = req.params;
    const {nome, preco} = req.body;
    db.run("UPDATE produtos SET nome = ?, preco = ? WHERE id = ?", [nome, preco, id], function (err) {
    if (err) {
      return res.status(500).json({ error: "Erro ao atualizar produto" });
    }
    res.json({ updated: this.changes > 0 });
    });
});

// Rota para cadastrar categorias
app.post("/api/categorias", (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ error: "Nome é obrigatório" });
  }

  const stmt = db.prepare("INSERT INTO categorias (nome) VALUES (?)");
  stmt.run(nome, function (err) {
    if (err) {
      return res.status(500).json({ error: "Erro ao inserir categoria" });
    }
    res.json({ id: this.lastID, nome });
  });
  stmt.finalize();
});

// Rota para listar categorias (com filtro opcional por nome)
app.get("/api/categorias", (req, res) => {
  const filtro = req.query.nome ? `%${req.query.nome}%` : "%";
  db.all(
    "SELECT * FROM categorias WHERE nome LIKE ? ORDER BY id DESC",
    [filtro],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao consultar categorias" });
      }
      res.json(rows);
    }
  );
});

app.delete("/api/categorias/:id", (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM categorias WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({ error: "Erro ao deletar categoria" });
    }
    res.json({ deleted: this.changes > 0 });
    });
});

app.put("/api/categorias/:id", (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    db.run("UPDATE categorias SET nome = ? WHERE id = ?", [nome, id], function (err) {
    if (err) {
      return res.status(500).json({ error: "Erro ao atualizar categoria" });
    }
    res.json({ updated: this.changes > 0 });
    });
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
