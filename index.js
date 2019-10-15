var express = require("express");
var app = express();

const port = process.env.PORT || 8000;
app.listen(port, () => {
   console.log(`Server running on ${port}`);
});