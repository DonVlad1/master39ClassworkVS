const mongoose = require('mongoose')

const tvSchema = new mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true,
            unique: true,
        },
        actor:
        {
            type: String,
            default: "Not Specified",
        },
    }
)

const TvShow = mongoose.model('tvShow', tvSchema);

module.exports = TvShow
