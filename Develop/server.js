const express = require('express'); 
const path = require('path');
const fs = require('fs');
const noteDB = JSON.parse(fs.readFileSync('./db/db.json'));
// const { v4: uuidv4 } = require("uuid");
const { response } = require('express');


const app = express();
const PORT = process.env.PORT || 6500;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//returns index.html
app.get('/', (req,res) => res.sendFile(path.join(__dirname, './public/index.html')));

//returns notes.html
app.get('/notes', (req,res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req,res) => res.json(noteDB));
app.post('/api/notes', (req, res) => {
    const newNote = req.body
    newNote.id = req.body.title
    noteDB.push(newNote)
    response.json(newNote)
});

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));