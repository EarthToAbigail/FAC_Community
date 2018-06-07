const request = require('request');
const _ = require('lodash');

exports.account = (req, res) => {
  res.send(req.user);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

exports.isMember = (req, res) => {
  const options = {
    url: req.user._json.organizations_url,
    headers: {
      'User-Agent': 'Founders and Coders Community Dev'
    }
  };

  request(options, (err, success, body) => {
    if (err) res.sendStatus(500);
    else {
      const orgs = JSON.parse(body);
      const isMember = orgs.filter(name => name.login === 'foundersandcoders');
      _.isEmpty(isMember)
        ? res.redirect(`/user/${req.user.username}/logout`)
        : res.redirect(`/user/${req.user.username}`)
    }
  });
};
