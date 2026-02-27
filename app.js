const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080; // IMPORTANT for Cloud Run

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});