const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/vs', express.static(path.join(__dirname, 'node_modules/monaco-editor/min/vs')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
