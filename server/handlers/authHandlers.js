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
  res.status(200).send('success');
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
      _.isEmpty(isMember)
        ? res.redirect(`/api/logout`)
        : res.redirect(`/${req.user.username}`)
    }
  });
};
