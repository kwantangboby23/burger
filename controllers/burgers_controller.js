var burger = require("../models/burger.js");
var express = reuqire("express");
var router = express.Router();

router.get("/", function(req, res){
    
    burger.selectAll(function(data){
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});


router.post("/api/burgers", function (req, res){
    burger.insertOne("burger_name", req.body.burger_name, function(result){
        res.json({burgerName:req.body.burger_name});
    });
});

router.put("/api/burgers/:id", function (req, res){
    var condition = "id = " + req.params.id;
    console.log("condition: ", condition);

    burger.updateOne("devoured", true, condition, function(result){
     

        if (result.changedRows == 0) {
            
            return res.status(404).end();
          } else {
            res.json({ devoured: true});
          };
    });
    
});


module.exports = router;