const express = require("express");
const bp = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  // db.sequelize.sync();
  console.log(`SERVER: bjj-appunning on ${PORT}`);
});
