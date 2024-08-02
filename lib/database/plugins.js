const mongoose = require('mongoose');
const pluginSchema = mongoose.Schema({
id: { type: String,  unique: true ,required: true },
url: { type: String }
})
const plugindb =  mongoose.model("Plugindb",pluginSchema )
module.exports = { plugindb }
