const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/login" style="font-family: Arial; margin-top: 50px; text-align: center;">
      <h2>Login</h2>
      <input type="text" name="usuario" placeholder="Usuário" required /><br/><br/>
      <input type="password" name="senha" placeholder="Senha" required /><br/><br/>
      <button type="submit">Entrar</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  res.send(`
    <div style="
      margin: 50px auto;
      width: fit-content;
      padding: 20px;
      background-color: #d4edda;
      border: 2px solid #28a745;
      color: #155724;
      border-radius: 10px;
      font-family: Arial;
      text-align: center;
    ">
      <h2>Login realizado com sucesso!</h2>
      <p><strong>Usuário:</strong> ${usuario}</p>
      <p><strong>Senha:</strong> ${senha}</p>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
