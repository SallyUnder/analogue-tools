const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/api/proxy', require('./api/proxy'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));