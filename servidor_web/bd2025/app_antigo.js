/* Exemplo de leitura de parâmetros na URL! */

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(`
    <h1>Exemplo de leitura de parâmetros na URL!</h1>
    <p> Experimente escrever ao final da URL:</p>
    <ul>
        <li>/users/:userId -> substituindo ':userId' por um número</li>
        <li>/users/:userId/posts/:postId -> substituindo ':userId' e ':postId' por números</li>
    </ul>
    <a href="users/1">Usuário 1</a><br>
    <a href="users/2">Usuário 2</a>
    `);
});

// Rota com um parâmetro na URL
app.get('/users/:userId', (req, res) => {
  res.send(`Perfil do usuario de ID: ${req.params.userId}`);
});

// Rota com vários parâmetros na URL
app.get('/users/:userId/posts/:postId', (req, res) => {
  res.send(`
    <h2>Informação do Usuário e do Post</h2>
    <p>User ID: ${req.params.userId}</p>
    <p>Post ID: ${req.params.postId}</p>
  `);
});

app.listen(port, () => {
  console.log(`App de exemplo escutando em http://localhost:${port}`);
});