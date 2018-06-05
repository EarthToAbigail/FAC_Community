const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // Query the db, find the id
  done(null, user);
});

passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientId,
      clientSecret: keys.githubClientSecret,
      callbackURL: 'http://localhost:4444/auth/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(
        'accessToken: ',
        accessToken,
        'refreshToken: ',
        refreshToken,
        'profile: ',
        profile
      );
      return done(null, profile);
    }
  )
);
