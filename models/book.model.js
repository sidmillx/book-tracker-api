const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    title: {type: String, required: true},
    author: String,
    pages: Number,
    category: String,
    status: { type:String, enum:['to-read', 'reading', 'completed'], default: 'to-read' },
    dateStarted: Date,
    dateCompleted: Date,
    lessons: String,
    applications: String,
    rating: Number,
    review: String

}, {timestamps: true});

module.exports = mongoose.model('Book', bookSchema);