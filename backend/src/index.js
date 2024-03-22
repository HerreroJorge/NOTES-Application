const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const noteRoutes = require("./routes/note")

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());
app.use('/api', noteRoutes);

// routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
})

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error(error))

app.listen(9000, () => console.log('server listening on port', port));