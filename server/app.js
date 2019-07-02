const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(json());
app.use(cors());

app.use('/api/pokemon', require('./routes/api/pokemon'));
app.use('/api/type', require('./routes/api/type'));
app.use('/api/weather', require('./routes/api/weather'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));