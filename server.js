const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Nova Backend Live hai!' });
});

app.post('/api/nova', (req, res) => {
  const { prompt } = req.body;
  res.json({ reply: `Nova ne receive kiya: ${prompt || 'Hello'}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
