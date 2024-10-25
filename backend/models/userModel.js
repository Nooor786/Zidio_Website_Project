const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abdul10102001:SlMMCCcplvM8ovlS@backendcluster1.xgnxc.mongodb.net/?retryWrites=true&w=majority&appName=Backendcluster1')


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String,
});

module.exports = mongoose.model('User',userSchema)