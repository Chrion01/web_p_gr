const mongoose = require('mongoose');
const tickets = require('./routes/tickets')
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/testdb')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use('/api/tickets', tickets);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
