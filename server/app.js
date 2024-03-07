const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/users.js");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
// Here we can remove the cors, it's not necessary in production because the frontend and backend are on the same domain. I forgot to mention that in the video, sorry about that.🙄
// app.use(cors());

app.use("/api/users", userRoutes);


app.use(cors());

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});
