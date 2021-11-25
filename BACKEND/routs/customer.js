const router = require("express").Router();
let Customer = require("../models/routs/routs/customer");


//Post Method
router.route("/add").post((req,res)=>{

    const id = Number(req.body.id);
    const full_name = req.body.full_name;
    const birth_date = req.body.birth_date;
    const acc_num = Number(req.body.acc_num);

    const newCustomer = new Customer({

        id,
        full_name,
        birth_date,
        acc_num
    })

    newCustomer.save().then(()=>{     //add database
        res.json("Customer Added")    //response jason format
    }).catch((err)=>{                //if occure error
        console.log(err);
    })
})


//Get Methods
router.route("/").get((req,res)=>{

    Customer.find().then((Customers)=>{
        res.json(Customers)
    }).catch((err)=>{
        console.log(err)
    })
})


//Put Method(Update)
router.route("/update/:id").put(async (req,res)=>{

    let userId = req.params.id;        //like primery key
    const {id, full_name, birth_date, acc_num} = req.body;     //updated data

    const updateCustomer = {           //object of updated data
         id,
        full_name,
        birth_date,
        acc_num
    }

    const update = await Customer.findByIdAndUpdate(userId, updateCustomer)
    .then(()=> {
        res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    })
})


//Delete Method
router.route("/delete/:id").delete(async (req, res)=> {

    let userId = req.params.id;

    await Customer.findByIdAndDelete(userId)
    .then(()=> {
        res.status(200).send({status:"User deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
})


//Get only one user details
router.route("/get/:id").get(async (req, res)=> {

    let userId = req.params.id;

    const user = await Customer.findById(userId)
     .then ((customer)=> {
        res.status(200).send({status:"User fetched", customer});
     }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message});
     })
}


,module.exports = router)