//Third Party Models
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// app.use("/", (req, res) => {
//     res.json("Hi Subscriber");
// })

//Morgan
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Router
const infoRouter = require("./router");
app.use("/info", infoRouter);

//Express Listen Port
app.listen(5000, () => {
    console.log("Server started on 5000");
})

//DB Connection
mongoose.connect("mongodb://localhost/MernDB", { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err) {
        console.log("DB Connected Successfully");
    }
});