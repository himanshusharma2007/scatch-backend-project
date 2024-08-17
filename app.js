const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const indexRouter=require("./routes/index")
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouters");
const ownerRouter = require("./routes/ownerRouter");
const db = require("./config/db-connection");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/owner", ownerRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.listen(3000, () => {
  console.log("server is running...");
});
