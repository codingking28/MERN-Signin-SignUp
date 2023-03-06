const express = require("express");
const router = express.Router();
const InfoRouter = require("./infoSchema");

//Create
router.post("/",
    async (req, res) => {
    console.log(req.body);
    var data = new InfoRouter({
        Name: req.body.Name,
        Mail: req.body.Mail,
        Age: req.body.Age,
        City: req.body.City,
        Password:req.body.Password

    });
    await data.save();
    res.json(data);
}   )

//GetAll
router.get("/",
    async (req, res) => {
        var findData = await InfoRouter.find();
        res.json(findData);
    })

//Signin
router.post("/signin",
    async (req, res) => {
        var result = await InfoRouter.find({ Mail: req.body.Mail }).exec();
        console.log(result);
        if (result) {
            if (result[0].Password == req.body.Password) {
                // res.status(200).send({
                //     message: "Successfully LogedIn",
                // });
                res.send(res.json(result));
            }
            else {
                res.status(200).send({
                    message:"Password Incorrect"
                })
            }
        }
        else {
            res.status(200).send({
                message:"User Not Found"
            })
        }
})

//Update
router.put("/update", async (req, res) => {
    var update = await InfoRouter.update({ _id: req.body._id }, {
        $set: {
            Name: req.body.Name,
            Mail: req.body.Mail,
            Age: req.body.Age,
            City: req.body.City,
            Password:req.body.Password
        }
    });
    res.json(update);
})

//Delete
router.delete("/del/:id", async (req, res) => {
    var delData = await InfoRouter.findByIdAndRemove(req.params.id).then(e => {
        res.json({ message: "Deleted Successfully" });
    })
})


//-------------------
router.get("/",(req, res)=> {
    res.json("I am From Router File");
})

module.exports = router;