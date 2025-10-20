/* Exemplo de Servidor Web que envia um HTML a partir de um modelo */

const express = require('express');
const app = express();
const port = 8080;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory where templates are located
app.set('views', './views');

// Route that renders a template
app.get('/', (req, res) => {
  const data = {
    title: 'DS202',
    message: 'Bem-vindos à DS202!',
    items: ['Banco de Dados (SQL)', 'Back-End (Node.JS)', 'Front-End (HTML, CSS, JS)']
  };

  // Renders the views/index.ejs template
  res.render('index', data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});