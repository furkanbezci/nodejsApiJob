const express = require('express');

const app = express()

const priorityList = [
    { name: "Urgent", ordinal: 1 },
    { name: "Regular", ordinal: 2 },
    { name: "Trivial", ordinal: 3 },

]
//ROUTES
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.send(priorityList)
    console.log(req.headers)
})

app.listen(8080);

