const express = require('express');
const app = express();
const db = require('./db'); // Ensure db.js exports the mongoose connection
const Menu = require('./models/Menu');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
    res.send("This is the menu of our hotel...");
});

// POST /person route
// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body;
//         const newPerson = new person(data);
//         const response = await newPerson.save();
//         console.log('Data saved successfully.');
//         res.status(200).json(response);
//     } catch (err) {
//         console.log('Error saving person:', err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // GET /person route
// app.get('/person', async (req, res) => {
//     try {
//         const data = await person.find();
//         console.log('Person data fetched successfully.');
//         res.status(200).json(data);
//     } catch (err) {
//         console.log('Error fetching person data:', err);
//         res.status(500).json({ error: 'Error fetching person data' });
//     }
// });

// app.get('/person/:worktype', async (req, res) => {
//     try {
//         const worktype = req.params.worktype;

//         if (worktype === 'chef' || worktype === 'manager' || worktype === 'waiter') {
//             const response = await person.find({ work: worktype });
//             res.status(200).json(response);
//         } else {
//             res.status(400).json({ error: 'Invalid worktype. Allowed values are chef, manager, or waiter.' });
//         }
//     } catch (err) {
//         console.log('Error fetching person data:', err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// POST /Menu route
// app.post('/Menu', async (req, res) => {
//     try {
//         const data = req.body;
//         const newMenu = new Menu(data);
//         const resp = await newMenu.save();
//         console.log('Menu data saved successfully');
//         res.status(200).json(resp);
//     } catch (err) {
//         console.log('Error saving menu data:', err);
//         res.status(500).json({ error: 'Failed to save menu data' });
//     }
// });

// // GET /Menu route
// app.get('/Menu', async (req, res) => {
//     try {
//         const data = await Menu.find();
//         console.log(`${data.length} menu items fetched successfully`);
//         res.status(200).json(data);
//     } catch (err) {
//         console.log('Error fetching menu items:', err);
//         res.status(500).json({ error: 'Failed to fetch menu items. Please try again later.' });
//     }
// });

//import the router file
const personRoutes=require('./routes/personRoutes')
//use the router
app.use('/person',personRoutes)

const menuRoutes=require('./routes/menuRoutes')
app.use('/Menu',menuRoutes)

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
