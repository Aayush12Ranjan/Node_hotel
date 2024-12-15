const express= require('express')
const router=express.Router()
const menuRoutes=express('./../models/Menu')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new Menu(data);
        const resp = await newMenu.save();
        console.log('Menu data saved successfully');
        res.status(200).json(resp);
    } catch (err) {
        console.log('Error saving menu data:', err);
        res.status(500).json({ error: 'Failed to save menu data' });
    }
});

// GET /Menu route
router.get('/', async (req, res) => {
    try {
        const data = await Menu.find();
        console.log(`${data.length} menu items fetched successfully`);
        res.status(200).json(data);
    } catch (err) {
        console.log('Error fetching menu items:', err);
        res.status(500).json({ error: 'Failed to fetch menu items. Please try again later.' });
    }
});

module.exports=router;
