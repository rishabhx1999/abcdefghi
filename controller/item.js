const Item = require("../model/item");

export const addItem = async (req, res) => {
    console.log('Request received:', req.body);  // Log request body
    try {
        const { abc, def, ghi } = req.body;

        // Validate request body
        if (!abc || !def || !ghi) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new item
        console.log('Saving item to DB...');
        const newItem = new Item({ abc, def, ghi });
        await newItem.save();
        console.log('Item saved successfully');

        res.status(201).json({ message: "Item added successfully", item: newItem });
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}