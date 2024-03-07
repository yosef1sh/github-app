const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/users.js");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});
