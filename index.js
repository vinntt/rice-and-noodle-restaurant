const path = require('path')
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/homepage.html'));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
