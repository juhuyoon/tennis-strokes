const router = require('express').Router();
const { User } = require("../../models");
// localhost:3001
router.get('/', async (req, res) => {
    const userData = await User.findAll({
        attributes: [
            'id',
            'username'
        ]
    });
    console.log("UGLY DATA BOO", userData);

    const prettyUserData = userData.map((user) => user.get({plain: true}));
    console.log("PRETTY USER DATA YAY", prettyUserData);
    res.render('homepage', {prettyUserData});
})

// localhost:3001/dashboard
router.get('/dashboard/:user_id', async (req, res) => {
    const userData = await User.findByPk(req.params.user_id, {
        attributes: [
            'username',
            'email'
        ]
    });
    console.log("This is the ugly sequelize object!", userData);

    const actualUserData = userData.get({ plain: true });
    console.log("This is SOOO handsome!", actualUserData);
    res.render('dashboard', actualUserData);
});

module.exports = router;