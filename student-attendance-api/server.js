
const express = require('express');
const app = express();
app.use(express.json());

let inventory = [];

// GET /inventory
app.get('/inventory', (req, res) => {
    res.json(inventory);
});

// POST /inventory
app.post('/inventory', (req, res) => {
    const { name, stock } = req.body;

    if (!name || stock === undefined) {
        return res.status(400).json({ message: "Invalid item data" });
    }

    if (stock < 0) {
        return res.status(400).json({ message: "Stock quantity cannot be negative" });
    }

    const item = {
        id: inventory.length + 1,
        name,
        stock
    };

    inventory.push(item);

    res.json({
        message: "Item added",
        data: item
    });
});

// PUT /inventory/:id
app.put('/inventory/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = inventory.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }

    const { stock } = req.body;

    if (stock === undefined) {
        return res.status(400).json({ message: "Invalid stock data" });
    }

    if (stock < 0) {
        return res.status(400).json({ message: "Stock quantity cannot be negative" });
    }

    item.stock = stock;

    res.json({
        message: "Item updated",
        data: item
    });
});

// DELETE /inventory/:id
app.delete('/inventory/:id', (req, res) => {
    const id = parseInt(req.params.id);
    inventory = inventory.filter(i => i.id !== id);

    res.json({ message: "Item deleted" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

