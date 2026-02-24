const user = require('../Model/auth_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const existEmail = await user.findOne({ email });
        console.log(existEmail);

        if (existEmail) {
            res.status(400).json({ message: 'email already exist' });
        }
        const PasswordHash = await bcrypt.hash(password, 10);

        const newUser = await user.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: PasswordHash,
        })

        res.status(200).json({ message: 'registration successful', user: newUser });

    } catch (error) {
        res.status(500).json({ message: 'internal server error' });

    }

}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await user.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    

    res.status(200).json({
      message: "Login successful",
        token: jwt.sign({ id: existingUser._id }, "secretkey", { expiresIn: "1h" })
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register, login };




