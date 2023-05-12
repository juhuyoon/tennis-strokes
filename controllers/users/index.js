const router = require("express").Router();
const { User } = require('../../models');
// localhost:3001/users
router.get('/', (req, res) => {
    res.json("From the user folder!");
})

// I want to write a POST request that will create a new user.
// localhost:3001/users/sign-up
router.post("/sign-up", async (req, res) => {
    // The NONFANCY WAY
    // const notFancyBody = req.body;
    // const userData = notFancyBody.username;
    // THE FANCY WAY
    const { username:UserInputUsername, email:UserInputEmail, password:UserInputPassword } = req.body;
    const userData = await User.create({
        username: UserInputUsername,
        password: UserInputPassword,
        email: UserInputEmail
    });

    res.json(userData);
});



module.exports = router;