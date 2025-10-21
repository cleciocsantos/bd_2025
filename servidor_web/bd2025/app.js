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

// Rota para cadastrar produto
app.post("/api/produtos", (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || !preco) {
    return res.status(400).json({ error: "Nome e preço são obrigatórios" });
  }

  const stmt = db.prepare("INSERT INTO produtos (nome, preco) VALUES (?, ?)");
  stmt.run(nome, preco, function (err) {
    if (err) {
      return res.status(500).json({ error: "Erro ao inserir produto" });
    }
    res.json({ id: this.lastID, nome, preco });
  });
  stmt.finalize();
});

// Rota para listar produtos (com filtro opcional por nome)
app.get("/api/produtos", (req, res) => {
  const filtro = req.query.nome ? `%${req.query.nome}%` : "%";
  db.all(
    "SELECT * FROM produtos WHERE nome LIKE ? ORDER BY id DESC",
    [filtro],
    (err, rows) => {
      if (err) {
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
})

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
