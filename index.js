const express = require("express")
const { config } = require("dotenv")

config()
/**
 * Initialization / Entry point of express app
 */
const app = express()
app.use(express.json())

/**
 * index route
 */
app.get("/", (req, res) => {})

/**
 * send message route through post requets
 */
app.post("/send-message", (req, res) => {
  res.status(200).send({
    ...req.body,
  })
})
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("listening at port " + process.env.PORT)
})
