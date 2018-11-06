const mongoose = require('mongoose');

const api = {};

api.setup = (User) => (req, res) => {
    const admin = new User({
        username: 'testAdmin',
        password: 'testPassword',
        clients: [] // with security like this, who can blame them?!
    }); 

}