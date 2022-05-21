

const JwtStrategy = require("passport-jwt").Strategy;
var cookieExtractor =  (req)=> {
  const token = req.header("auth-token");
  return token;
};

module.exports = (passport) => {
  var opts = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.SECRET,
    passReqToCallback: true,
  };

  passport.use(
    new JwtStrategy(opts, (req, jwt_payload, callback) => {
      req.user = jwt_payload;
      callback(null, req.user);
    })
  );
};

// exports.checkAuth = passport.authenticate("JWT", { session: false });
