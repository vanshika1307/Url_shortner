const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const urlSchema = new mangoose.Schema({
    shortId:{
        type : String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type : String,
        required: true,
    },

    totalClicks: [{timestamp : {type : Number}}],

},
{timestamps: true}
);

const URL = mongoose.model("Url",urlSchema);
module.exports = URL;