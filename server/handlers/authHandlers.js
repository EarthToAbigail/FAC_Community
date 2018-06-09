const request = require('request');
const _ = require('lodash');

exports.homeRedirect = (req, res) => {
  if (req.isAuthenticated()) {
    res.send({ authenticated: true, username: req.user.username });
  } else {
    res.send({ authenticated: false, username: null });
  }
};

exports.account = (req, res) => {
  res.send(req.user);
};

exports.logout = (req, res) => {
  req.logout();
  res.status(200).send('logged out');
};

exports.isMember = (req, res) => {
  const options = {
    url: req.user._json.organizations_url,
    headers: {
      'User-Agent': 'Founders and Coders Community'
    }
  };

  request(options, (err, success, body) => {
    if (err) res.sendStatus(500);
    else {
      const orgs = JSON.parse(body);
      const isMember = orgs.filter(name => name.login === 'foundersandcoders');
      if (_.isEmpty(isMember)) {
        const user = req.user.username;
        req.logout();
        res.redirect(`/${user}/not-a-member`);
      } else if (!req.user.username) {
        res.redirect('/');
      } else {
        res.redirect(`/${req.user.username}`)
      }
    }
  });
};
