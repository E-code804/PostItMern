const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
//const bodyParser = require("body-parser");

// Middleware
app.use(express.json()); // This looks for if the request has data in it, and if it does it will attach to the req variable.
//app.use(bodyParser.json());
app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000", process.env.URL],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use((req, res, next) => {
  // This func fires for every request that comes in.
  // Must call the "next" function in order to move onto next piece of middleware.
  console.log(req.path, req.method);
  next();
});

// Using the routes
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

// Connect to DB
// mongoose.connect(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listening for requests at a certain port
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log("Connected to DB and listening on port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credential", "true");
  res.json("Connected to Backend!");
});
