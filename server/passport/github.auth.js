const passport = require("passport");
const dotenv = require("dotenv");
const User = require("../models/user.model.js");
var GitHubStrategy = require("passport-github2").Strategy;

dotenv.config();

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});


passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: "http://localhost:5000/api/auth/github/callback",
		},
		async function (accessToken, refreshToken, profile, done) {
			const user = await User.findOne({ username: profile.username });
			// signup
			if (!user) {
				const newUser = new User({
					name: profile.displayName,
					username: profile.username,
					profileUrl: profile.profileUrl,
					avatarUrl: profile.photos[0].value,
					likedProfiles: [],
				});
				await newUser.save();
				done(null, newUser);
			} else {
				done(null, user);
			}
		}
	)
);
