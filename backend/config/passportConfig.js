import 'dotenv/config';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.js';
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env['SECRET_TOKEN'],
    passReqToCallback: true,
};
export default (passport) => {
    passport.use(new JwtStrategy(jwtOptions, function (req, jwt_payload, done) {
        User.findOne({ id: jwt_payload.sub }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                req.user = user;
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));
};
// -------------------------------------------------LOCAL STRATEGY - NOT IN USE ----------------------------------------------
// const localStrategy = passportLocal.Strategy;
// export default (passport: any) => {
//   passport.use(
//     new localStrategy((email, password, done) => {
//       User.findOne({ email }, (err: NativeError, user: UserDocument) => {
//         if (err) throw err;
//         if (!user) return done(null, false);
//         bcrypt.compare(password, user.password, (err: Error, result) => {
//           if (err) throw err;
//           if (result === true) {
//             return done(null, user);
//           } else {
//             return done(null, false);
//           }
//         });
//       });
//     })
//   );
//   passport.serializeUser((req: Request, user: UserDocument, cb: any) => {
//     cb(null, user.id);
//   });
//   passport.deserializeUser((id: any, cb: any) => {
//     User.findOne({ _id: id }, (err: NativeError, user: UserDocument) => {
//       const userInformation = {
//         userName: user.userName,
//         id: user._id,
//       };
//       if (!user) {
//         return cb(new Error('user not found'));
//       }
//       cb(null, userInformation);
//     });
//   });
// };
