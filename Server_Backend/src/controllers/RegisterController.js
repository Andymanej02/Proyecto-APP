const registerRepository = require('../repositories/registerRepository');

async function registerUser(req, res) {
    const { firstName, lastName, email, username, password } = req.body;

    const existingEmail = await registerRepository.findUserByEmail(email);
    if (existingEmail) {
        return res.status(400).json({ message: 'El correo electrónico ya está en uso.' });
    }

    const existingUsername = await registerRepository.findUserByUsername(username);
    if (existingUsername) {
        return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
    }

    const user = {
        firstName,
        lastName,
        email,
        username,
        password, // Recuerda cifrar la contraseña antes de almacenarla
    };

    const newUser = await registerRepository.createUser(user);

    res.status(201).json(newUser);
}

module.exports = {
    registerUser,
};
