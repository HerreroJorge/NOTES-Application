const express = require("express");
const noteSchema = require("../models/note");
const router = express.Router();

// create note
router.post('/notes', (req, res) => {
    const note = noteSchema(req.body);
    note
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// get all notes
router.get('/notes', (req, res) => {
    noteSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// get a note
router.get('/notes/:id', (req, res) => {
    const {id} = req.params;
    noteSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// update a note
router.put('/notes/:id', (req, res) => {
    const {id} = req.params;
    const {title, body} = req.body;
    noteSchema
        .updateOne({ _id: id }, { $set: {title, body} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// delete a note
router.delete('/notes/:id', (req, res) => {
    const {id} = req.params;
    noteSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;