const vegetableModel = require("../models/vegetableModel");

const Vagetable = require("../models/vegetableModel");

const createVegetable = async (req, res) => {
    try {
        const name = req.body.name;
        const livingPeriod = req.body.livingPeriod;
        const growingPeriod = req.body.growingPeriod;
        const harvestingPeriod = req.body.harvestingPeriod;
        const harvestPerAcresPerPeriod = req.body.harvestPerAcresPerPeriod;

        const newVegetable = new vegetableModel({name, livingPeriod, growingPeriod, harvestingPeriod, harvestPerAcresPerPeriod})

        await newVegetable.save();
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

module.exports = createVegetable;