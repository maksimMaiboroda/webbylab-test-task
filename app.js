const express = require("express");
const cors = require('cors')
const config = require("config");
const mongoose = require("mongoose");
const films = require("./routes/films.routes");
const multer = require("multer");

const app = express();

app.use(cors())

app.use(express.static(__dirname));
app.use(multer({ dest: "uploads" }).single("filedata"));

app.use(express.json({ extended: true }));

app.use("/api/films", films);

const PORT = config.get("port") || 8000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`CORS-enabled web server listening on port ${PORT}...`);
    });
  } catch (err) {
    console.log("Server error:", err.message);
    process.exit(1);
  }
}

start();
