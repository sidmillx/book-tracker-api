const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;
const bookRoutes = require('./routes/routes.book');


app.use(cors());
// MIDDLEWARE TO PARSE JSON
app.use(express.json());

app.use('/api/books', bookRoutes);



mongoose.connect('mongodb+srv://sidmillx:Mongodb2002.@mernapp.uafff8b.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp')
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => console.error('MongDB connnection error: ', err));


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});