const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = 8000;
app.use("/api", userRoutes);

app.listen(PORT, (res, req) => {
  console.log(`Server running on port ${PORT}`);
});
