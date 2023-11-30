const express = require('express')
const app =express()
var cors = require('cors')
const port =process.env.PORT || 5000



const categories = require('./Data/categories.json')

app.use(cors())

app.get('/', (req,res) =>{
res.send('world news is comming')
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.listen(port, () => {
    console.log(`world news is running on port ${port}`)
  })