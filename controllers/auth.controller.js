const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
	try {	
		
		const { login, password } = req.body;
		if (login && password ) {
			const userWithLogin = await User.findOne({ login });
			if (userWithLogin) {
				return res.status(409).send({ message: 'User with this login already exists'});
			}

			const user = await User.create({ login, password });
			res.status(201).send({ message: 'User created ' + user.login })
		} else {
			res.status(400).send({ message: 'Bad request' });
		}

	} catch (err) {
		res.status(500).send({ message: err.message });
	}
}

exports.login = async (req, res) => {
    
}