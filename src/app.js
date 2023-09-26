const express = require('express');
const app = express();
const routes = require('./routes')
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use('/', routes)

app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});