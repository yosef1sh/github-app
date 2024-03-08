const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
var passport = require('passport');
const userRoutes = require("./routes/users.js");
const authRoutes = require("./routes/auth.js");
const connectMongoDB = require("./db/connectMongoDB.js");
var session = require("express-session");
var path = require("path");
require("./passport/github.auth.js");

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false,  cookie: { maxAge: 24 * 60 * 60 * 1000 }  }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
 

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
    connectMongoDB();
});
