const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const data = [
  { name: "Java", Student: 10 },
  { name: "JavaScript", Student: 25 },
  { name: "React", Student: 15 },
  { name: "PHP", Student: 50 },
  { name: "C", Student: 40 }
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
