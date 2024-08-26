const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRoute = require('./routes/dataRoute');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://nikhilpandravesham160802:nikhil@cluster0.i0ysj.mongodb.net/tempdatabase')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Routes
app.use('/api', dataRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
