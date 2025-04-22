const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

// CREATE NEW BOOK ROUTE
router.post('/', async(req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({error: err.message})
    }
});

// GET ALL BOOKS
router.get('/', async(req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json(books);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
})

// GET A SINGLE BOOK BY ID
router.get('/:id', async(req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if(!book) return res.status(404).json({error: 'Book not found'});
        res.json(book);
    } catch (err){
        res.status(500).json({error: message});
    }
});

// UPDATE A BOOK
router.put('/:id', async(req, res) => {
    try {
        const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if(!updated) return res.status(404).json({error: 'Book not found'});
        res.json(updated);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// DELETE A BOOK
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Book.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({error: 'Book not found'});
        res.json({message: 'Book deleted Successfully'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});


module.exports = router;