const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello Supachai!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Handling errors
app.on('error', (err) => {
  console.error(`Server error: ${err.message}`);
});
