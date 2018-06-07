const passport = require('passport');
const routerAuth = require('express').Router();

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const handlersAuth = require('../handlers/authHandlers');

routerAuth.get('/user/:username', ensureAuthenticated, handlersAuth.account);

routerAuth.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['write:org', 'user:email'] })
);

routerAuth.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  handlersAuth.isMember
);

routerAuth.get('/user/:username/logout', handlersAuth.logout);

module.exports = routerAuth;
