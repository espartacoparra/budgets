const express = require("express"),
  apiroute = require("./routes/apiroutes"),
  app = express();

app.use("/api", apiroute);

app.listen(3000, () => {
  console.log("server run");
});
