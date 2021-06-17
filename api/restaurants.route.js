import express from "express"


const router = express.Router()

router.route("/").get((req,res) => res.send("This is Restaurant's page"))

export default router