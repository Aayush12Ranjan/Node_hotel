
const express= require('express')
const router=express.Router();
const person = require('./../models/person');
const { findByIdAndUpdate } = require('../models/Menu');

// POST /person route
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('Data saved successfully.');
        res.status(200).json(response);
    } catch (err) {
        console.log('Error saving person:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /person route
router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        console.log('Person data fetched successfully.');
        res.status(200).json(data);
    } catch (err) {
        console.log('Error fetching person data:', err);
        res.status(500).json({ error: 'Error fetching person data' });
    }
});

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;

        if (worktype === 'chef' || worktype === 'manager' || worktype === 'waiter') {
            const response = await person.find({ work: worktype });
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: 'Invalid worktype. Allowed values are chef, manager, or waiter.' });
        }
    } catch (err) {
        console.log('Error fetching person data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the id from the URL parameter
        const updatePersonData = req.body;

        const response = await YourModel.findByIdAndUpdate(personId, updatePersonData, {
            new: true,           // Return the updated document
            runValidators: true, // Ensure validators are run on the updated data
        });

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Data updated successfully');
        res.status(200).json(response);
    } catch (err) {
        console.error('Error updating data:', err);
        res.status(500).json({ message: 'Data could not be updated' });
    }
});



module.exports=router;

