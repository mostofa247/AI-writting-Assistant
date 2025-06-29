const express = require("express");
const cors = require("cors");
require("dotenv").config();
const analyzeRouter = require("./routes/analyze");
const grammarCheck = require("./routes/grammarChecker");
const spellChecker = require("./routes/spellChecker");

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.use("/api/analyze", analyzeRouter);
app.use("/api/grammarcheck", grammarCheck);
app.use("/api/spellcheck", spellChecker);

app.listen(PORT, () => {
  console.log(`AI Writing assistant app http://localhost:${PORT}`);
});
