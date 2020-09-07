const mongoose = require("mongoose");
const config = require("config");
const Film = require("../models/Film");

const Film = mongoose.model("Film");

export function setUpConnection() {
  mongoose.connect(config.get("mongoUri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}
