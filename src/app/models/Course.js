const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true,},
    description: { type: String},
    image: { type: String},
    videoId:{ type: String, required: true,},
    level:{ type: String},
    slug: { type: String, slug: 'name' , unique: true}, // unique tránh slug trùng nhau
}, {
    timestamps: true,
});

//Add Plugins
mongoose.plugin(slug); // thư viên thêm slug
Course.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all',
 }); //thư viện SoftDelete


module.exports = mongoose.model('Course', Course);