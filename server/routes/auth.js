const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }),
    (req, res) => {
      res.send("I'm authenticated!");
    }
  );

  app.get(
    '/auth/github/callback',
    passport.authenticate('github', {
      failureRedirect: '/login'
    }),
    (req, res) => {
      res.redirect('/');
    }
  );
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  });
};
