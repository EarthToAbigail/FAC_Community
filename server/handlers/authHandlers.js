exports.account = (req, res) => {
  res.send(req.user);
};

exports.login = (req, res) => {
  const html = `<ul>
      <li><a href='/auth/github'>GitHub</a></li>
          <li><a href='/logout'>logout</a></li>
        </ul>`;
  res.send(html);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
