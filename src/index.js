const express = require('express');
const taskRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
