const express = require("express")
const app = require()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.listen(5000, () => {
    console.log("server has started on port 5000")
})
