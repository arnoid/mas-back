import express from 'express';
const router = express.Router();

/* GET home page. */
router.post('/register-token', function (req, res) {
    const authAdminController = req.app.controllers.authAdminController;
    const token = req.body.token;

    authAdminController.verifyIdToken(token)
        .then((decodedToken) => {
            const securityToken = authAdminController.constructor.generateSecurityToken();

            authAdminController.saveUser(securityToken, decodedToken);

            res.status(200).json({
                securityToken,
            });
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(404);
        });

});

module.exports = router;
