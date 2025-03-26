import item from "../model/item";

export const addItem = async (req, res) => {
    try {
        const { abc, def, ghi } = req.body;

        // Validate request body
        if (!abc || !def || !ghi) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new item
        const newItem = new item({ abc, def, ghi });
        await newItem.save();

        res.status(201).json({ message: "Item added successfully", item: newItem });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}