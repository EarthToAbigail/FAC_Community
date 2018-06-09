const passport = require('passport');
const routerAuth = require('express').Router();

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const handlersAuth = require('../handlers/authHandlers');

routerAuth.get('/api/auth', handlersAuth.homeRedirect);

routerAuth.get('/api/user', ensureAuthenticated, handlersAuth.account);

routerAuth.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['write:org', 'user:email'] })
);

routerAuth.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  handlersAuth.isMember
);

routerAuth.get('/api/logout', handlersAuth.logout);

module.exports = routerAuth;
