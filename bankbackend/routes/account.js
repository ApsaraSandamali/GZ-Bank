const router = require("express").Router();
let Account = require("../models/account");

//POST Method
router.route("/add").post((req, res) => {
    const id = Number(req.body.id);
    const name = req.body.name;
    const nic = req.body.nic;
    const email = req.body.email;
    const balance = Number(req.body.balance);

    const newAccount = new Account({
        id,
        name,
        nic,
        email,
        balance
    })

    //when the request is success (response from json format)
    newAccount.save().then(() => {
        res.json("Account added")
    }).catch((err) => {
        console.log(err);
    })
})

//MAX ACC Num
router.route("/max").get((req, res) => {

    const max = Account.find().sort({ id: -1 }).limit(1).then((account) => {
        res.status(200).send({ status: "user fetched", account })
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user ", error: err.message });
    })

})

//GET METHOD
router.route("/").get((req, res) => {

    Account.find().then((accounts) => {
        res.json(accounts)
    }).catch((err) => {
        console.log(err);
    })

})

//PUT METHOD  (assyn funct wait for a promise request)
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;

    // const name = req.body.name; You also can do this way, otherwise use destructute method
    const { id, name, nic, email, balance } = req.body;

    const updateAccount = {
        id,
        name,
        nic,
        email,
        balance
    }

    //await use for the updation
    const update = await Account.findByIdAndUpdate(userId, updateAccount).then(() => {
        res.status(200).send({ status: "User Updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
})

//DELETE METHOD
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Account.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "user deleted" })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.message });
    })
})


router.route("/get/:id").get(async (req, res) => {
    let id = Number(req.body.id);
    const user = await Account.findOne({ id }).then((account) => {
        res.status(200).send({ status: "user fetched", account })
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user ", error: err.message });
    })
    
})

router.route("/get/:id/:nic").get(async (req, res) => {
    let account = (req.params.id);
    let nicNo = (req.params.nic);
    console.log(account, nicNo);
    const user = await Account.find({ $and: [{ id: account }, { nic: nicNo }] })
        .then((account) => {
            res.status(200).send({ status: "user fetched", account })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user ", error: err.message });
        })


    router.route("/getAcc/:id").get(async (req, res) => {
        let id = req.params.id;

        const user = await Account.find({ id }).then((account) => {
            res.status(200).send({ status: "user fetched", account })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user ", error: err.message });
        })

    })
})
module.exports = router;