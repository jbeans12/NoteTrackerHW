const express = require('express'); 
const path = require('path');

const app = express();
const PORT = process.env.PORT || 6500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

app.get('/api/tables', (req, res) => res.json(tables));



app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));