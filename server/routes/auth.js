const passport = require('passport');
const routerAuth = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const handlersAuth = require('../handlers/authHandlers');

routerAuth.get('/user/:username', ensureAuthenticated, handlersAuth.account);

routerAuth.get('/login', handlersAuth.login);

routerAuth.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

routerAuth.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(`/user/${req.user.username}`);
  }
);

routerAuth.get('/logout', handlersAuth.logout);

module.exports = routerAuth;
