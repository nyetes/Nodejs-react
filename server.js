
const express = require('express');
const notes = require('./backend/data/notes');
const dotenv = require("dotenv");
const connectDB = require("./backend/config/db");
const userRoutes = require("./backend/routes/userRoutes");


const app = express();
dotenv.config();
connectDB();


app.get('/', (req, res) =>{
    res.send('Server is Running:')
});

app.get('/api/notes' , (req, res) =>{
    res.json(notes)
});

app.use('/api/users', userRoutes);


app.get('/api/notes/:id', (req, res) =>{
    const note = notes.find((n) => n._id === req.params.id)
    console.log(req.params)
    res.send(note);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`Server is runnig on port:http://localhost:${PORT}..`)
    
});