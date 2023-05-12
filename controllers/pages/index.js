const router = require('express').Router();
const { User } = require("../../models");
// localhost:3001
router.get('/', (req, res) => {
    res.render('homepage');
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