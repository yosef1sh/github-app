const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/users.js");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use("/api/users", userRoutes);

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});
