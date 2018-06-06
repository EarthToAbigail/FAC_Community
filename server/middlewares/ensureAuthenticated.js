const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated() && req.params.username === req.user.username) {
    return next();
  }
  res.redirect('/');
};

module.exports = ensureAuthenticated;
