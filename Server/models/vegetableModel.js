const mongoose = require("mongoose");

const vegetableSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    livingPeriod: {
        type: Number
    },
    growingPeriod: {
        type: Number
    },
    harvestingPeriod: {
        type: Number
    }, 
    harvestPerAcresPerPeriod: {
        type: Number
    }
})

export default mongoose.model("Vegetable", vegetableSchema);