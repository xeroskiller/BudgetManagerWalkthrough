const mongoose = require('mongoose');

const api = {};

api.setup = (User) => (req, res) => {
    const admin = new User({
        username: 'testAdmin',
        password: 'testPassword',
        clients: [] // with security like this, who can blame them?!
    }); 

    admin.save(error => {
        if (error) throw error;

        console.log('Admin account was successfully set up');
        res.json({ succes: true });
    })
}

api.index = (User, BudgetToken) => (req, res) => {
    const token = BudgetToken;

    if (token) {
        User.find({}, (error, users) => {
            if (error) throw error;
            res.status(200).json(users);
        });
    } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

api.signup = (User) => (req, res) => {
    if (!req.body.username || !req.body.password) res.json({success: false, message: 'Username and password required.' });
    else {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            clients: []
        });

        newUser.save((error) => {
            if (error) return res.status(400).json({ success: false, message: 'Username already exists'})
            res.json({ success: true, message: 'Account created successfully'});
        })
    }
}

module.exports = api;