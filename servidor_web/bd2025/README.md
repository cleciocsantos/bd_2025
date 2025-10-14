## Para iniciar um novo projeto no Node.js, crie uma pasta, abra a pasta no VSCode e execute os seguintes comandos no terminal:

* npm init -y
* npm install express nodemon

## Adiciona a seguinte linha na parte de "scripts" do package.json:

* "start": "nodemon app.js",

A linha acima considera que o arquivo *app.js* contém o código do servidor web.

## Para iniciar o servidor, executar o seguinte comando no terminal:

* npm start