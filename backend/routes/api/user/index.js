const express = require("express")
const userModel = require("../../../models/users")
const transactionModel = require("../../../models/transactions")

const router = express.Router()

router.get("/", async (req, res) => {
    const users = await userModel.find({}).populate("transactions")
    res.json(users)
})
router.post("/", async (req, res) => {
    const newUser = await userModel.create(req.body)
    res.json(newUser)
})
router.post("/signin", async (req, res) => {
    const { email, password } = req.body
    const existingUser = await userModel.findOne({ email })
    if (!existingUser) {

        return res.sendStatus(403)
    }

    if (existingUser.password !== password) {
        return res.sendStatus(401)
    }
    res.json({
        id: existingUser._id
    })
})
router.post("/:id/transaction", async (req, res) => {
    const newTransaction = await transactionModel.create({
        user: req.params.id,
        ...req.body
    })
    res.json(newTransaction)
})


module.exports = router