const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Sample Route
app.get('/', (req, res) => {
    res.send('Welcome to the Notes API!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const noteRoutes = require('./routes/notes');
app.use('/api/notes', noteRoutes);
